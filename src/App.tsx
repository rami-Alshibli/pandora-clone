
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
// استيراد صفحة المنتجات
import Products from './pages/Products';

function App() {
    return (
        <CartProvider>
            <Router basename={import.meta.env.BASE_URL}>
                <div className="min-h-screen font-sans bg-white">
                    <Navbar />
                    <CartDrawer />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* إضافة مسار صفحة المنتجات هنا */}
                        <Route path="/products" element={<Products />} />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;