import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ReviewForm from '../components/ReviewForm';
import '../styles/Home.css';

function Home() {
    const featuredServices = [
        {
            id: 1,
            title: "Lavagem de Carro",
            description: "Lavagem completa do veículo, incluindo aplicação de cera e os melhores produtos da Vonix.",
            price: "R$ 50,00",
            duration: "45 min",
            highlights: ["Produtos Vonix", "Inclui cera"]
        },
        {
            id: 2,
            title: "Lavagem de Moto",
            description: "Lavagem completa da sua moto, incluindo aplicação de cera e os melhores produtos da Vonix.",
            price: "R$ 30,00",
            duration: "30 min",
            highlights: ["Produtos Vonix", "Inclui cera"]
        },
        {
            id: 3,
            title: "Pintura de Escapamento",
            description: "Pintura especializada para escapamento de moto, utilizando tinta de alta temperatura e acabamento profissional.",
            price: "R$ 50,00",
            imageUrl: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80",
            duration: "1 hora",
            highlights: ["Tinta especializada", "Acabamento profissional"]
        }
    ];

    // Estado para gerenciar as avaliações de clientes
    const [reviews, setReviews] = useState([
        {
            name: "João Silva",
            rating: 5,
            comment: "Serviço excelente! Meu carro ficou como novo com a lavagem e cera Vonix.",
            date: "2023-05-10T14:30:00Z"
        },
        {
            name: "Ana Oliveira",
            rating: 5,
            comment: "A pintura do escapamento da minha moto ficou perfeita! Recomendo muito!",
            date: "2023-05-08T10:15:00Z"
        },
        {
            name: "Pedro Santos",
            rating: 5,
            comment: "Preço justo e produtos de qualidade. Minha moto nunca ficou tão limpa.",
            date: "2023-05-05T16:45:00Z"
        }
    ]);

    // Adicionar nova avaliação
    const handleAddReview = (newReview) => {
        setReviews(prevReviews => [newReview, ...prevReviews]);
    };

    return (
        <div className="home-page">
            <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 114, 255, 0.7), rgba(0, 198, 255, 0.7)), url(https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1920&q=80)` }}>
                <div className="hero-content">
                    <h1>Seu veículo merece o melhor</h1>
                    <p className="hero-subtitle">
                        Lavagem profissional com produtos Vonix para carros e motos
                    </p>
                    <div className="hero-buttons">
                        <Link to="/agendamento" className="btn btn-primary">Agendar Agora</Link>
                        <Link to="/servicos" className="btn btn-outline">Ver Serviços</Link>
                    </div>
                </div>
            </section>

            <section className="section advantages">
                <div className="container">
                    <h2 className="section-title">Por que escolher nosso Lava Rápido?</h2>
                    <div className="advantages-grid">
                        <div className="advantage-item">
                            <div className="advantage-icon">🌟</div>
                            <h3>Produtos Vonix</h3>
                            <p>Utilizamos exclusivamente os melhores produtos da linha Vonix.</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">✨</div>
                            <h3>Cera Incluída</h3>
                            <p>Todas as lavagens incluem aplicação de cera sem custo adicional.</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">👨‍🔧</div>
                            <h3>Equipe Especializada</h3>
                            <p>Profissionais treinados para carros e motos.</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">💰</div>
                            <h3>Preços Justos</h3>
                            <p>Excelente relação custo-benefício.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vonix-highlight">
                <div className="container">
                    <div className="vonix-content">
                        <h2>Produtos Vonixx em Todas as Lavagens</h2>
                        <p>Trabalhamos exclusivamente com produtos da linha Vonixx, reconhecidos pela qualidade superior e resultados excelentes. Toda lavagem inclui aplicação de cera de alta durabilidade.</p>
                        <div className="vonix-image-container">
                            <img
                                src="https://images.tcdn.com.br/img/img_prod/1229120/kit_limpeza_automotiva_produtos_vonixx_profissional_1235_1_fe9fac7e7aae4652e7b52df6ca6d3439.jpg"
                                alt="Kit de produtos Vonixx"
                                className="vonix-featured-image"
                            />
                        </div>
                        <Link to="/servicos" className="btn btn-accent">Conheça nossos serviços</Link>
                    </div>
                </div>
            </section>

            <section className="section featured-services">
                <div className="container">
                    <h2 className="section-title">Nossos Serviços</h2>
                    <div className="services-grid">
                        {featuredServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Pronto para agendar sua lavagem?</h2>
                    <p>Carros a partir de R$50 e motos a partir de R$30 com os melhores produtos do mercado!</p>
                    <Link to="/agendamento" className="btn btn-large">Agendar Agora</Link>
                </div>
            </section>

            <section className="section testimonials">
                <div className="container">
                    <h2 className="section-title">O que nossos clientes dizem</h2>

                    <div className="review-section">
                        <div className="review-form-wrapper">
                            <ReviewForm onSubmit={handleAddReview} />
                        </div>

                        <div className="testimonials-grid">
                            {reviews.map((review, index) => (
                                <div className="testimonial-card" key={index}>
                                    <div className="testimonial-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < review.rating ? 'star active' : 'star'}>★</span>
                                        ))}
                                    </div>
                                    <p className="testimonial-text">"{review.comment}"</p>
                                    <p className="testimonial-author">— {review.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
