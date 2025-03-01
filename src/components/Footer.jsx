import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Lava Rápido<span className="highlight">Pro</span></h3>
                    <p>Seu veículo merece o melhor! Oferecemos serviços premium de lavagem para carros e motos com os produtos mais avançados do mercado.</p>
                    <div className="social-links">
                        <a href="#" className="social-link" aria-label="Facebook">
                            <span role="img" aria-label="facebook">📘</span>
                        </a>
                        <a href="#" className="social-link" aria-label="Instagram">
                            <span role="img" aria-label="instagram">📷</span>
                        </a>
                        <a href="#" className="social-link" aria-label="WhatsApp">
                            <span role="img" aria-label="whatsapp">📱</span>
                        </a>
                        <a href="#" className="social-link" aria-label="YouTube">
                            <span role="img" aria-label="youtube">🎬</span>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Links Rápidos</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/servicos">Nossos Serviços</Link></li>
                        <li><Link to="/agendamento">Agendar Horário</Link></li>
                        <li><Link to="/contato">Fale Conosco</Link></li>
                        <li><a href="#" onClick={scrollToTop}>Voltar ao Topo</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contato & Horários</h4>
                    <p><strong>Telefone:</strong> (11) 99999-9999</p>
                    <p><strong>WhatsApp:</strong> (11) 99999-8888</p>
                    <p><strong>Email:</strong> contato@lavarapidopro.com.br</p>
                    <p><strong>Endereço:</strong> Av. Principal, 123 - Centro</p>
                    <p><strong>Horário:</strong><br />Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 14h<br />Domingo: Fechado</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} Lava Rápido Pro. Todos os direitos reservados. Desenvolvido com <span role="img" aria-label="love">❤️</span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
