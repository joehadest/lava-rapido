import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Efeito para detectar rolagem da página
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Fecha o menu quando mudar de página
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <h1>Lava Rápido<span className="highlight">Pro</span></h1>
                </Link>

                <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Menu">
                    {menuOpen ? '✕' : '☰'}
                </button>

                <Link to="/agendamento" className="btn header-btn">Agendar Agora</Link>

                <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Início</Link></li>
                        <li><Link to="/servicos" className={`nav-link ${location.pathname === '/servicos' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Serviços</Link></li>
                        <li><Link to="/agendamento" className={`nav-link ${location.pathname === '/agendamento' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Agendamento</Link></li>
                        <li><Link to="/contato" className={`nav-link ${location.pathname === '/contato' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
