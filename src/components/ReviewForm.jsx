import React, { useState } from 'react';
import '../styles/ReviewForm.css';

function ReviewForm({ onSubmit }) {
    const [rating, setRating] = useState(5);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleStarHover = (hoveredRating) => {
        setHoverRating(hoveredRating);
    };

    const handleStarLeave = () => {
        setHoverRating(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação básica
        if (!name.trim() || !comment.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Criar objeto de avaliação
        const review = {
            name,
            rating,
            comment,
            date: new Date().toISOString()
        };

        // Chamar callback se existir
        if (onSubmit) {
            onSubmit(review);
        }

        // Feedback visual e reset do formulário
        setSubmitted(true);

        setTimeout(() => {
            setName('');
            setComment('');
            setRating(5);
            setSubmitted(false);
        }, 3000);
    };

    // Renderizar as estrelas para avaliação
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= (hoverRating || rating) ? 'active' : ''}`}
                    onClick={() => handleStarClick(i)}
                    onMouseEnter={() => handleStarHover(i)}
                    onMouseLeave={handleStarLeave}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="review-form-container">
            <h3>Deixe sua Avaliação</h3>

            {submitted ? (
                <div className="review-success">
                    <span className="success-icon">✓</span>
                    <p>Obrigado por compartilhar sua opinião!</p>
                </div>
            ) : (
                <form className="review-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="review-name">Seu Nome</label>
                        <input
                            type="text"
                            id="review-name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Sua Avaliação</label>
                        <div className="star-rating">
                            {renderStars()}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="review-comment">Comentário</label>
                        <textarea
                            id="review-comment"
                            className="form-control"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Conte-nos sobre sua experiência"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">Enviar Avaliação</button>
                </form>
            )}
        </div>
    );
}

export default ReviewForm;
