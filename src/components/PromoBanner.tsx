import React, { useState, useEffect } from 'react';

const PromoBanner: React.FC = () => {
    // مصفوفة صور العرض الترويجي
    const promoImages = [
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", // صورة 1
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", // صورة 2
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"  // صورة 3
    ];

    // حالة لتتبع الصورة الحالية
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // مؤقت لتغيير الصورة كل 3.5 ثواني
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIndex((prevIndex) => (prevIndex + 1) % promoImages.length);
        }, 3500);

        return () => clearInterval(timer);
    }, [promoImages.length]);

    return (
        <section className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto my-16 bg-white">

            {/* النصف الأول: الصور المتغيرة (Mini Slider) */}
            <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[500px] overflow-hidden">
                {promoImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Promo image ${index + 1}`}
                        // تأثير الشفافية للانتقال الناعم بين الصور
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === currentImgIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>

            {/* النصف الثاني: النصوص (ثابتة لا تتغير) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 md:p-20">

        <span className="bg-surface-raised text-text-primary text-xs font-bold px-3 py-1 mb-6 uppercase tracking-wider">
          Limited Time Only
        </span>

                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight tracking-wide">
                    DON’T MISS YOUR FREE<br/>GIFT
                </h2>

                <p className="text-sm text-text-primary mb-8 leading-relaxed max-w-md">
                    Free limited-edition reversible tote with purchase of four (4) select items from the Disney Moana x Pandora Collections. Terms and Conditions apply.
                </p>

                <a
                    href="#"
                    className="text-sm font-bold text-text-primary border-b-[1.5px] border-text-primary pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
                >
                    Shop Now
                </a>
            </div>

        </section>
    );
};

export default PromoBanner;