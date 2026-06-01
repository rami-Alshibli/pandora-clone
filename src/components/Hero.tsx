import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    // مصفوفة بتحتوي على روابط الصور (تقدر تبدلها بصور باندورا لاحقاً)
    const slides = [
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
    ];

    // حالة (State) لتتبع أي صورة هي المعروضة حالياً
    const [currentIndex, setCurrentIndex] = useState(0);

    // تشغيل مؤقت يقلب الصورة كل 5 ثواني
    useEffect(() => {
        const timer = setInterval(() => {
            // ننتقل للصورة التالية، ولما نوصل للآخر نرجع للصفر
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // 5000 ميلي ثانية = 5 ثواني

        // تنظيف المؤقت لما يتسكر المكون (أفضل ممارسة لتجنب الـ Memory Leaks)
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-screen w-full flex items-center overflow-hidden bg-surface-base">

            {/* عرض الصور فوق بعضها مع التحكم بالشفافية (Opacity) لعمل تأثير انتقال ناعم */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url('${slide}')` }}
                >
                    {/* طبقة شفافة لتوضيح النصوص */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            ))}

            {/* محتوى الـ Hero (النصوص والزر) ثابت فوق الصور اللي عم تتبدل */}
            <div className="relative z-10 pl-10 md:pl-20 max-w-2xl text-white mt-20">
                <p className="text-sm md:text-base font-semibold mb-4 tracking-wide uppercase">
                    Dive into our new collection
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    MAKE WAVES WITH<br />PANDORA<br />MOMENTS
                </h1>
                <button className="bg-text-tertiary text-white px-8 py-3 text-sm font-bold tracking-widest hover:bg-gray-600 transition-colors duration-300">
                    SHOP NEW ARRIVALS
                </button>
            </div>

            {/* نقاط سفلية (Indicators) لتبين للمستخدم كم صورة فيه وأي صورة عم تنعرض */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;