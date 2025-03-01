import React, { useState, useEffect } from 'react';
import { format, isWeekend, isSunday } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import '../styles/Booking.css';
import '../styles/BookingFix.css';

function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        vehicleType: 'carro',
        vehicleModel: '', // Novo campo para modelo do veículo
        selectedServices: [], // Alterado de "service" para array de serviços
        comments: ''
    });

    // Estado para horários disponíveis com base na data (para diferentes horários no domingo)
    const [availableTimes, setAvailableTimes] = useState([]);

    const [submitted, setSubmitted] = useState(false);

    // Atualiza os horários disponíveis quando a data muda
    useEffect(() => {
        if (formData.date) {
            const selectedDate = new Date(formData.date);

            // Horários para dias da semana (seg-sex)
            const weekdayTimes = [
                "08:00", "09:00", "10:00", "11:00",
                "13:00", "14:00", "15:00", "16:00", "17:00"
            ];

            // Horários para sábado (8h às 17h)
            const saturdayTimes = [
                "08:00", "09:00", "10:00", "11:00",
                "13:00", "14:00", "15:00", "16:00", "17:00"
            ];

            // Horários para domingo (8h às 12h)
            const sundayTimes = ["08:00", "09:00", "10:00", "11:00", "12:00"];

            if (isSunday(selectedDate)) {
                setAvailableTimes(sundayTimes);
            } else if (isWeekend(selectedDate)) {
                setAvailableTimes(saturdayTimes);
            } else {
                setAvailableTimes(weekdayTimes);
            }
        }
    }, [formData.date]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Verifica se é uma mudança no tipo de veículo
        if (name === 'vehicleType') {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                selectedServices: [] // Reset serviços quando muda o tipo de veículo
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Função específica para lidar com seleções múltiplas de serviços
    const handleServiceChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // Adiciona o serviço à lista
            setFormData(prev => ({
                ...prev,
                selectedServices: [...prev.selectedServices, value]
            }));
        } else {
            // Remove o serviço da lista
            setFormData(prev => ({
                ...prev,
                selectedServices: prev.selectedServices.filter(service => service !== value)
            }));
        }
    };

    // Calcula o valor total com base nos serviços selecionados
    const calculateTotal = () => {
        let total = 0;
        formData.selectedServices.forEach(service => {
            if (service === "Lavagem de Carro") total += 50;
            else if (service === "Lavagem de Moto") total += 30;
            else if (service === "Pintura de Escapamento") total += 50;
        });
        return total;
    };

    // Função para abrir WhatsApp com os dados do agendamento
    const openWhatsApp = () => {
        // Número de telefone do proprietário do lava-jato
        const phoneNumber = "5584999874915";

        // Formata a data para ser legível
        const formattedDate = format(new Date(formData.date), "dd/MM/yyyy", { locale: ptBR });

        // Lista de serviços e preço total
        const servicesText = formData.selectedServices.join(", ");
        const total = `R$${calculateTotal()},00`;

        // Constrói mensagem com detalhes do agendamento
        const message = `*Novo Agendamento* 🚗✨

*Dados do Cliente:*
👤 Nome: ${formData.name}
📱 Telefone: ${formData.phone}
📧 Email: ${formData.email}

*Serviço Solicitado:*
🔧 Serviços: ${servicesText}
🚘 Veículo: ${formData.vehicleType === 'carro' ? 'Carro' : 'Moto'} (${formData.vehicleModel})
💰 Valor Total: ${total}

*Horário Agendado:*
📅 Data: ${formattedDate}
⏰ Horário: ${formData.time}

${formData.comments ? `*Observações do Cliente:*\n${formData.comments}` : ''}

_Enviado pelo sistema de agendamento online_`;

        // Codifica a mensagem para URL
        const encodedMessage = encodeURIComponent(message);

        // Cria o link do WhatsApp e abre em nova janela
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados de agendamento:', formData);

        // Verifica se pelo menos um serviço foi selecionado
        if (formData.selectedServices.length === 0) {
            alert("Por favor, selecione pelo menos um serviço.");
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(() => {
            setSubmitted(true);

            // Abre o WhatsApp após breve delay para melhor experiência
            setTimeout(() => {
                openWhatsApp();
            }, 1000);
        }, 500);
    };

    // Calcula a data mínima permitida (alterado para permitir o dia atual)
    const today = new Date();
    const minDate = format(today, 'yyyy-MM-dd');

    // Serviços disponíveis baseados no tipo de veículo
    const getAvailableServices = () => {
        if (formData.vehicleType === 'carro') {
            return [
                { id: 'lavagem-carro', name: 'Lavagem de Carro', price: 'R$ 50,00' }
            ];
        } else {
            return [
                { id: 'lavagem-moto', name: 'Lavagem de Moto', price: 'R$ 30,00' },
                { id: 'pintura-escapamento', name: 'Pintura de Escapamento', price: 'R$ 50,00' }
            ];
        }
    };

    if (submitted) {
        // Tela de confirmação após envio bem-sucedido
        return (
            <div className="booking-success">
                <div className="success-card">
                    <div className="success-icon">✓</div>
                    <h2>Agendamento Realizado!</h2>
                    <p>Obrigado por agendar conosco, <strong>{formData.name}</strong>.</p>

                    <div className="service-summary">
                        <h3>Serviços agendados:</h3>
                        <ul className="service-list">
                            {formData.selectedServices.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                        <p className="total-price">Valor total: <strong>R$ {calculateTotal()},00</strong></p>
                    </div>

                    <p>Para seu {formData.vehicleType === 'carro' ? 'carro' : 'moto'}: <strong>{formData.vehicleModel}</strong></p>

                    <div className="booking-date">
                        {format(new Date(formData.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })} às {formData.time}
                    </div>
                    <p className="success-highlight">Todos os nossos serviços incluem produtos premium da linha Vonixx!</p>
                    <p>Aguarde nossa confirmação via WhatsApp ou Email: <strong>{formData.email}</strong></p>
                    <div className="booking-actions">
                        <button
                            className="btn btn-primary"
                            onClick={openWhatsApp}
                        >
                            <span className="whatsapp-icon">📱</span> Falar no WhatsApp
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={() => setSubmitted(false)}
                        >
                            Agendar outro serviço
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-page">
            <div className="booking-header">
                <h1>Agende seu Serviço</h1>
                <p>Escolha a data e horário ideais para você e deixe seu veículo nas mãos de profissionais.</p>
            </div>

            <div className="booking-container">
                <div className="booking-info">
                    <h2>Por que agendar conosco?</h2>
                    <ul className="benefits-list">
                        <li>Atendimento em horário marcado, sem filas</li>
                        <li>Produtos Vonixx premium para o melhor resultado</li>
                        <li>Lavagem com cera incluída, sem custo extra</li>
                        <li>Atendemos sábados e domingos</li>
                        <li>Satisfação garantida ou devolvemos seu dinheiro</li>
                    </ul>

                    <div className="pricing-info">
                        <h3>Nossos Preços:</h3>
                        <ul>
                            <li><strong>Lavagem de Carro:</strong> R$ 50,00</li>
                            <li><strong>Lavagem de Moto:</strong> R$ 30,00</li>
                            <li><strong>Pintura de Escapamento:</strong> R$ 50,00</li>
                        </ul>
                    </div>

                    <div className="hours-info">
                        <h3>Horário de Atendimento:</h3>
                        <ul>
                            <li><strong>Segunda a Sexta:</strong> 8h às 17h</li>
                            <li><strong>Sábado:</strong> 8h às 17h</li>
                            <li><strong>Domingo:</strong> 8h às 12h</li>
                        </ul>
                    </div>

                    <div className="help-section">
                        <div className="help-icon">❓</div>
                        <div className="help-content">
                            <h3 style={{ color: "#ffffff", fontWeight: "bold", fontSize: "22px", marginBottom: "10px" }}>
                                Precisa de ajuda?
                            </h3>
                            <p style={{ color: "#ffffff", fontSize: "16px" }}>
                                Entre em contato: <span className="contact-number">(84) 99987-4915</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="booking-form-container">
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <h3>Informações Pessoais</h3>

                        <div className="form-group">
                            <label htmlFor="name">Nome completo*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Digite seu nome completo"
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Telefone/WhatsApp*</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <h3 style={{ marginTop: '30px' }}>Informações do Veículo</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Tipo de veículo*</label>
                                <div className="vehicle-selector">
                                    <label className={`vehicle-option ${formData.vehicleType === 'carro' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="vehicleType"
                                            value="carro"
                                            checked={formData.vehicleType === 'carro'}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span className="vehicle-icon">🚗</span>
                                        <span className="vehicle-text">Carro</span>
                                    </label>
                                    <label className={`vehicle-option ${formData.vehicleType === 'moto' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="vehicleType"
                                            value="moto"
                                            checked={formData.vehicleType === 'moto'}
                                            onChange={handleChange}
                                        />
                                        <span className="vehicle-icon">🏍️</span>
                                        <span className="vehicle-text">Moto</span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="vehicleModel">Modelo do veículo*</label>
                                <input
                                    type="text"
                                    id="vehicleModel"
                                    name="vehicleModel"
                                    className="form-control"
                                    value={formData.vehicleModel}
                                    onChange={handleChange}
                                    placeholder={formData.vehicleType === 'carro' ? "Ex: Fiat Uno, Honda Civic" : "Ex: Honda CG, Yamaha Fazer"}
                                    required
                                />
                            </div>
                        </div>

                        <h3 style={{ marginTop: '30px' }}>Selecione os Serviços</h3>

                        <div className="services-selection">
                            {getAvailableServices().map(service => (
                                <div className="service-checkbox" key={service.id}>
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            name="selectedServices"
                                            value={service.name}
                                            checked={formData.selectedServices.includes(service.name)}
                                            onChange={handleServiceChange}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="service-label">
                                            {service.name}
                                            <span className="service-price">{service.price}</span>
                                        </span>
                                    </label>
                                </div>
                            ))}

                            {formData.selectedServices.length > 0 && (
                                <div className="service-total">
                                    Total: <strong>R$ {calculateTotal()},00</strong>
                                </div>
                            )}

                            {formData.selectedServices.length > 0 && (
                                <div className="service-note">
                                    <small>✓ Inclui produtos Vonixx e aplicação de cera</small>
                                </div>
                            )}
                        </div>

                        <div className="form-row">
                            <div className="form-group date-picker">
                                <label htmlFor="date">Data*</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="form-control"
                                    value={formData.date}
                                    min={minDate} // Agora usando minDate como o dia atual
                                    onChange={handleChange}
                                    required
                                />
                                {formData.date && (
                                    <div className="date-info">
                                        <small>
                                            {isSunday(new Date(formData.date))
                                                ? "Domingo: funcionamento das 8h às 12h"
                                                : "Horário de funcionamento: 8h às 17h"}
                                        </small>
                                    </div>
                                )}
                            </div>

                            <div className="form-group time-picker">
                                <label htmlFor="time">Horário*</label>
                                <select
                                    id="time"
                                    name="time"
                                    className="form-control"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    disabled={!formData.date}
                                >
                                    <option value="">Escolha um horário</option>
                                    {availableTimes.map(time => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="comments">Observações (opcional)</label>
                            <textarea
                                id="comments"
                                name="comments"
                                className="form-control"
                                value={formData.comments}
                                onChange={handleChange}
                                placeholder="Alguma informação adicional sobre seu veículo ou serviço?"
                                rows="3"
                            ></textarea>
                        </div>

                        <div className="form-actions">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={formData.selectedServices.length === 0}
                            >
                                Confirmar Agendamento
                            </button>
                        </div>

                        {formData.selectedServices.length === 0 && (
                            <div className="form-error">
                                Por favor, selecione pelo menos um serviço
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;
