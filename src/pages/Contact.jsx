import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
        // Aqui você adicionaria a lógica para enviar a mensagem
        console.log('Dados de contato:', formData);
        setSubmitted(true);

        // Scroll para o topo suavemente
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (submitted) {
        return (
            <div className="contact-success">
                <h2>Mensagem Enviada com Sucesso!</h2>
                <p>Obrigado por entrar em contato, <strong>{formData.name}</strong>.</p>
                <p>Recebemos sua mensagem e retornaremos em breve através do email: <strong>{formData.email}</strong></p>
                <p>Nossa equipe está ansiosa para atendê-lo(a) da melhor forma possível!</p>
                <button
                    className="btn btn-accent"
                    onClick={() => {
                        setFormData({
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                        });
                        setSubmitted(false);
                    }}
                >
                    Enviar nova mensagem
                </button>
            </div>
        );
    }

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Entre em Contato</h1>
                <p>Estamos aqui para ajudar! Envie sua mensagem e retornaremos o mais breve possível.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info-container">
                    <div className="contact-info">
                        <h3>Informações de Contato</h3>

                        <div className="info-item">
                            <div className="info-icon">📱</div>
                            <div className="info-content">
                                <h4>Telefone</h4>
                                <p>(11) 99999-9999</p>
                                <p>(11) 5555-5555</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div className="info-content">
                                <h4>Email</h4>
                                <p>contato@lavarapidopro.com.br</p>
                                <p>atendimento@lavarapidopro.com.br</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h4>Endereço</h4>
                                <p>Av. Principal, 123 - Centro</p>
                                <p>São Paulo - SP, 01234-000</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🕒</div>
                            <div className="info-content">
                                <h4>Horário de Funcionamento</h4>
                                <p>Segunda a Sexta: 8h às 18h</p>
                                <p>Sábado: 8h às 14h</p>
                                <p>Domingo: Fechado</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098670884935!2d-46.65390548502164!3d-23.564611167714387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1620956568661!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Localização Lava Rápido"
                        ></iframe>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h3>Envie-nos uma Mensagem</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
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
                            <label htmlFor="subject">Assunto*</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-control"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensagem*</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-block">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
