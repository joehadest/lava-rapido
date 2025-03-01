import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Página não encontrada</h2>

                <div className="not-found-illustration">
                    <div className="car">🚗</div>
                    <div className="water-drops">
                        <span>💧</span>
                        <span>💧</span>
                        <span>💧</span>
                    </div>
                </div>

                <p className="not-found-text">
                    Ops! Parece que você está procurando uma página que não existe ou foi movida para outro endereço.
                </p>

                <div className="not-found-actions">
                    <Link to="/" className="btn btn-primary">
                        Voltar para a página inicial
                    </Link>
                    <Link to="/contato" className="btn btn-outline-primary">
                        Contato
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
