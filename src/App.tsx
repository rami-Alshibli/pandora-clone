import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import VideoBanner from './components/VideoBanner';
import CategoryShowcase from './components/CategoryShowcase.tsx';
import WaveCharmsVideo from './components/WaveCharmsVideo';
import StoreFeatures from "./components/StoreFeatures.tsx";
import Footer from "./components/Footer.tsx";


function App() {
    return (
        <div className="min-h-screen font-sans">
            <Navbar />
            <Hero />
            <PromoBanner /> {/* ضفنا البانر الترويجي هون */}
            <VideoBanner />

            <CategoryShowcase />
            <WaveCharmsVideo />
            <CategoryShowcase />
            <StoreFeatures />
            <Footer />
        </div>
    );
}

export default App;