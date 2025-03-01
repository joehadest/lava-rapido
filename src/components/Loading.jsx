import React from 'react';
import '../styles/Loading.css';

function Loading({ size = 'medium', color = 'primary', fullPage = false, text = 'Carregando...' }) {
    const sizeClass = `loading-${size}`;
    const colorClass = `loading-${color}`;

    if (fullPage) {
        return (
            <div className="loading-overlay">
                <div className={`loading-spinner ${sizeClass} ${colorClass}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {text && <p className="loading-text">{text}</p>}
            </div>
        );
    }

    return (
        <div className="loading-container">
            <div className={`loading-spinner ${sizeClass} ${colorClass}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {text && <p className="loading-text">{text}</p>}
        </div>
    );
}

export default Loading;
