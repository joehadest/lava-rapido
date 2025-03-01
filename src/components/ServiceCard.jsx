import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

// URLs de imagens de exemplo usando Unsplash diretamente
const defaultImages = {
    "Lavagem de Carro": "https://eclean.com.br/wp-content/uploads/2020/08/fa17610923474523b8da3b55fa9c0f8e.jpg",
    "Lavagem de Moto": "https://proauto.com.br/wp-content/uploads/2020/04/produtos_para_lavar_a_moto_em_casa.png",
    "Pintura de Escapamento": "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80"
};

// Imagem genérica de lava-rápido para fallback
const fallbackImage = "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80";

function ServiceCard({ service }) {
    const { title, description, price, imageUrl, duration, highlights } = service;

    // Use a imagem fornecida, ou uma imagem padrão baseada no título, ou o fallback
    const imageSrc = imageUrl || defaultImages[title] || fallbackImage;

    // Estado para controlar se a imagem carregou corretamente
    const [imageError, setImageError] = React.useState(false);

    // Função para lidar com erros de carregamento de imagem
    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="service-card">
            {!imageError ? (
                <div
                    className="service-image"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                >
                    <img
                        src={imageSrc}
                        alt={title}
                        style={{ display: 'none' }}
                        onError={handleImageError}
                    />
                    {title.includes('Lavagem') && (
                        <div className="service-badge">Inclui cera Vonix</div>
                    )}
                </div>
            ) : (
                <div className={`service-image placeholder ${title.toLowerCase().replace(/\s+/g, '-').replace(/[+]/g, '').replace(/[ç]/g, 'c')}`}>
                    <div className="placeholder-text">{title}</div>
                    {title.includes('Lavagem') && (
                        <div className="service-badge">Inclui cera Vonix</div>
                    )}
                </div>
            )}
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>

                {highlights && highlights.length > 0 && (
                    <div className="service-highlights">
                        {highlights.map((highlight, index) => (
                            <span key={index} className="highlight-tag">{highlight}</span>
                        ))}
                    </div>
                )}

                <div className="service-details">
                    <div className="service-price">{price}</div>
                    <div className="service-duration">
                        <span className="duration-icon">⏱️</span> {duration}
                    </div>
                </div>
                <Link to="/agendamento" className="btn service-button">Agendar</Link>
            </div>
        </div>
    );
}

export default ServiceCard;
