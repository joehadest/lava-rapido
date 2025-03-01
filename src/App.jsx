import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/fullWidth.css'; // Novo arquivo de estilos específico para largura completa

function App() {
    return (
        <Router>
            <div className="app full-width-app">
                <Header />
                <main className="main-content full-width">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/servicos" element={<Services />} />
                        <Route path="/agendamento" element={<Booking />} />
                        <Route path="/contato" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
