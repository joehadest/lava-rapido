import React, { useState, useEffect } from 'react';
import '../styles/Toast.css';

function Toast({ message, type = 'success', duration = 3000, onClose }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => {
                onClose && onClose();
            }, 300); // tempo da animação de saída
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`toast ${type} ${visible ? 'visible' : 'hidden'}`}>
            <div className="toast-icon">
                {type === 'success' && '✓'}
                {type === 'error' && '✕'}
                {type === 'info' && 'ℹ'}
                {type === 'warning' && '⚠'}
            </div>
            <div className="toast-message">{message}</div>
            <button className="toast-close" onClick={() => setVisible(false)}>✕</button>
        </div>
    );
}

// Componente para gerenciar múltiplos toasts
export function ToastContainer({ toasts }) {
    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    duration={toast.duration}
                    onClose={() => toast.onClose(toast.id)}
                />
            ))}
        </div>
    );
}

export default Toast;
