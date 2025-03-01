import React, { useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import '../styles/Booking.css';

function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        vehicleType: 'carro',
        service: '',
        comments: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você adicionaria a lógica para enviar os dados para o backend
        console.log('Dados de agendamento:', formData);

        // Scroll para o topo suavemente antes de mostrar o sucesso
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    // Calcula a data mínima (amanhã)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = format(tomorrow, 'yyyy-MM-dd');

    if (submitted) {
        return (
            <div className="booking-success">
                <div className="success-card">
                    <h2>Agendamento Realizado!</h2>
                    <p>Obrigado por agendar conosco, <strong>{formData.name}</strong>.</p>
                    <p>Seu serviço de <strong>{formData.service}</strong> para {formData.vehicleType === 'carro' ? 'seu carro' : 'sua moto'} está agendado para:</p>
                    <div className="booking-date">
                        {format(new Date(formData.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })} às {formData.time}
                    </div>
                    <p>Enviaremos uma confirmação para seu email: <strong>{formData.email}</strong></p>
                    <p>Se precisar realizar alguma alteração, entre em contato pelo telefone <strong>(11) 99999-9999</strong> ou responda o email de confirmação.</p>
                    <button
                        className="btn btn-accent"
                        onClick={() => setSubmitted(false)}
                    >
                        Fazer novo agendamento
                    </button>
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
                        <li>Produtos premium para o melhor resultado</li>
                        <li>Profissionais treinados e especializados</li>
                        <li>Ambiente confortável de espera com Wi-Fi</li>
                        <li>Satisfação garantida ou devolvemos seu dinheiro</li>
                    </ul>

                    <div className="contact-info">
                        <h3>Precisa de ajuda?</h3>
                        <p>Entre em contato: <strong>(11) 99999-9999</strong></p>
                    </div>
                </div>

                <div className="booking-form-container">
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <h3>Informações Pessoais</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nome completo*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Digite seu nome"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Digite seu email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telefone*</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(99) 99999-9999"
                                    required
                                />
                            </div>
                        </div>

                        <h3 style={{ marginTop: '30px' }}>Detalhes do Serviço</h3>

                        <div className="form-row">
                            <div className="form-group date-picker">
                                <label htmlFor="date">Data*</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="form-control"
                                    value={formData.date}
                                    min={minDate}
                                    onChange={handleChange}
                                    required
                                />
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
                                >
                                    <option value="">Selecione um horário</option>
                                    <option value="08:00">08:00</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Tipo de veículo*</label>
                                <div className="radio-group">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="vehicleType"
                                            value="carro"
                                            checked={formData.vehicleType === 'carro'}
                                            onChange={handleChange}
                                            required
                                        />
                                        Carro
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="vehicleType"
                                            value="moto"
                                            checked={formData.vehicleType === 'moto'}
                                            onChange={handleChange}
                                        />
                                        Moto
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Serviço*</label>
                                <select
                                    id="service"
                                    name="service"
                                    className="form-control"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione um serviço</option>
                                    <option value="Lavagem Simples">Lavagem Simples</option>
                                    <option value="Lavagem Completa">Lavagem Completa</option>
                                    <option value="Lavagem + Cera">Lavagem + Cera</option>
                                    <option value="Lavagem Completa + Polimento">Lavagem Completa + Polimento</option>
                                    <option value="Higienização Interna">Higienização Interna</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="comments">Observações</label>
                            <textarea
                                id="comments"
                                name="comments"
                                className="form-control"
                                value={formData.comments}
                                onChange={handleChange}
                                placeholder="Informe detalhes adicionais se necessário..."
                                rows="3"
                            ></textarea>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary btn-block">
                                Confirmar Agendamento
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;
