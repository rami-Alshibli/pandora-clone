import React, { useState, useEffect } from 'react';
import { Search, Heart, MapPin, User, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
    // 1. تحديث الروابط لتتطابق تماماً مع الموقع الأصلي
    const navLinks = [
        'New & featured', 'Charms', 'Bracelets', 'Necklaces', 'Rings',
        'Earrings', 'Lab-grown diamonds', 'Engraving', 'Gifts',
        'Jewelry guide', 'All jewelry', 'Sale'
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled
                ? 'bg-white text-text-primary shadow-sm border-b border-border-default'
                : 'bg-transparent text-white'
            }`}
        >
            {/* حاوية لتحديد العرض الأقصى وضبط الحواف */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-4 pb-3">

                {/* الصف العلوي: مقسم لـ 3 أجزاء متساوية باستخدام grid-cols-3 */}
                <div className="grid grid-cols-3 items-center mb-5">

                    {/* 1. الشعار (على أقصى اليسار) */}
                    <div className="justify-self-start font-sans font-bold text-3xl tracking-widest uppercase cursor-pointer">
                        PANDORA
                    </div>

                    {/* 2. شريط البحث (في المنتصف تماماً وأعرض من السابق) */}
                    <div className={`hidden md:flex items-center justify-self-center border-b pb-1 w-full max-w-md transition-colors duration-300
            ${isScrolled ? 'border-gray-300' : 'border-white/70'}`}
                    >
                        <Search size={20} className="mr-3" strokeWidth={1.5} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent border-none outline-none w-full text-sm placeholder-current text-current"
                        />
                    </div>

                    {/* 3. الأيقونات (على أقصى اليمين) */}
                    <div className="justify-self-end flex gap-5">
                        <Heart size={24} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />
                        <MapPin size={24} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />
                        <User size={24} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />
                        <ShoppingBag size={24} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />
                    </div>
                </div>

                {/* الصف السفلي: الروابط (موزعة بمسافات متساوية وبدون خط عريض) */}
                <div className="hidden md:flex justify-center gap-x-6 lg:gap-x-8 flex-wrap">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.replace(/\s+/g, '-').toLowerCase()}`}
                            className="text-[14.5px] font-medium tracking-wide hover:underline underline-offset-8 transition-all duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;