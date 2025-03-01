import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';

function Services() {
    const services = [
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

    return (
        <div className="services-page">
            <div className="services-header">
                <h1 className="page-title">Nossos Serviços</h1>
                <p className="services-description">
                    Oferecemos serviços de lavagem e estética para carros e motos, utilizando sempre os melhores produtos da Vonix.
                </p>
            </div>

            <div className="services-grid">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>

            <div className="vonix-banner">
                <div className="container">
                    <img
                        src="https://images.tcdn.com.br/img/img_prod/1229120/kit_limpeza_automotiva_produtos_vonixx_profissional_1235_1_fe9fac7e7aae4652e7b52df6ca6d3439.jpg"
                        alt="Produtos Vonixx"
                        className="vonix-image"
                    />
                    <div className="vonix-content">
                        <h3>Produtos Vonixx</h3>
                        <p>Utilizamos exclusivamente produtos Vonixx, reconhecidos pela sua qualidade superior e resultados excelentes. Todas as nossas lavagens já incluem aplicação de cera protetora sem custo adicional.</p>
                    </div>
                </div>
            </div>

            <div className="services-info">
                <div className="info-box">
                    <h3>Lavagens com Qualidade Premium</h3>
                    <p>
                        Todas as nossas lavagens incluem cera e produtos da linha Vonix, garantindo um acabamento profissional e proteção duradoura para seu veículo.
                    </p>
                </div>

                <div className="info-box">
                    <h3>Informações Adicionais</h3>
                    <ul className="info-list">
                        <li>Horário de funcionamento: Segunda a Sábado, das 8h às 18h</li>
                        <li>Aceitamos pagamento em dinheiro, cartão de débito e crédito</li>
                        <li>WiFi gratuito e área de espera climatizada</li>
                        <li>Atendemos carros e motos de todos os tamanhos</li>
                    </ul>
                </div>
            </div>

            <div className="cta-box">
                <h2>Venha conhecer nosso lava-jato!</h2>
                <p>Agende agora mesmo e experimente um serviço de qualidade com os melhores produtos do mercado.</p>
                <Link to="/agendamento" className="btn btn-primary btn-large">Agendar Serviço</Link>
            </div>
        </div>
    );
}

export default Services;
