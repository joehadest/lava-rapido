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
                    <p>Seu veículo merece o melhor! Oferecemos serviços premium de lavagem para carros e motos com produtos Vonixx, garantindo um acabamento profissional.</p>
                    <div className="social-links">
                        <a href="https://wa.me/5584999874915" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                            <span role="img" aria-label="whatsapp">📱</span>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                            <span role="img" aria-label="instagram">📷</span>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                            <span role="img" aria-label="facebook">📘</span>
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
                    <p><strong>WhatsApp:</strong> (84) 99987-4915</p>
                    <p><strong>Email:</strong> contato@lavarapidopro.com</p>
                    <p><strong>Endereço:</strong> Av. Principal, 123 - Centro</p>
                    <div className="hours-container">
                        <p><strong>Horário de Funcionamento:</strong></p>
                        <ul className="hours-list">
                            <li><strong>Segunda a Sexta:</strong> 8h às 17h</li>
                            <li><strong>Sábado:</strong> 8h às 17h</li>
                            <li><strong>Domingo:</strong> 8h às 12h</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} Lava Rápido Pro. Todos os direitos reservados.</p>
                    <p className="credits">
                        <a 
                            href="https://github.com/joehadest" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Desenvolvido por JoeHadest
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
