import React, { useState, useEffect } from 'react';
import { Search, Heart, MapPin, User, ShoppingBag } from 'lucide-react';
// 1. استيراد السلة
import { useCart } from '../context/CartContext';
// 2. استيراد اللينك من مكتبة الراوتر
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navLinks = [
        'New & featured', 'Charms', 'Bracelets', 'Necklaces', 'Rings',
        'Earrings', 'Lab-grown diamonds', 'Engraving', 'Gifts',
        'Jewelry guide', 'All jewelry', 'Sale'
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    // سحب دالة فتح السلة وعدد المنتجات من الـ Context
    const { openCart, cartItems } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-text-primary shadow-sm border-b border-border-default' : 'bg-transparent text-white'}`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-4 pb-3">
                <div className="grid grid-cols-3 items-center mb-5">

                    {/* 3. تحويل الشعار لـ Link ليعود للصفحة الرئيسية */}
                    <Link to="/" className="justify-self-start font-sans font-bold text-3xl tracking-widest uppercase cursor-pointer">
                        PANDORA
                    </Link>

                    <div className={`hidden md:flex items-center justify-self-center border-b pb-1 w-full max-w-md transition-colors duration-300 ${isScrolled ? 'border-gray-300' : 'border-white/70'}`}>
                        <Search size={20} className="mr-3" strokeWidth={1.5} />
                        <input type="text" placeholder="Search" className="bg-transparent border-none outline-none w-full text-sm placeholder-current text-current" />
                    </div>

                    <div className="justify-self-end flex gap-5 items-center">
                        <Heart size={24} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />
                        <MapPin size={24} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />
                        <User size={24} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />

                        {/* أيقونة السلة هنا تفتح وتظهر العدد */}
                        <div className="relative cursor-pointer hover:opacity-60 transition-opacity" onClick={openCart}>
                            <ShoppingBag size={24} strokeWidth={1.5} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-text-primary text-white text-[11px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                    {cartItems.length}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* 4. تحويل الروابط من <a> إلى <Link> */}
                <div className="hidden md:flex justify-center gap-x-6 lg:gap-x-8 flex-wrap">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            to="/products"
                            className="text-[14.5px] font-medium tracking-wide hover:underline underline-offset-8 transition-all duration-200"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;