import React from 'react';
import Hero from '../components/Hero';
import PromoBanner from '../components/PromoBanner';
import CategoryShowcase from '../components/CategoryShowcase';
import WaveCharmsVideo from '../components/WaveCharmsVideo';
import VideoBanner from '../components/VideoBanner';
import StoreFeatures from '../components/StoreFeatures';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <PromoBanner />
            <WaveCharmsVideo />
            <CategoryShowcase />
            <VideoBanner />
            <StoreFeatures />
        </main>
    );
};

export default Home;