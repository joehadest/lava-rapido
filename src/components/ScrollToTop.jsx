import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar o botão quando a rolagem for maior que 400px
    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Função para rolar para o topo da página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
        >
            ↑
        </button>
    );
}

export default ScrollToTop;
