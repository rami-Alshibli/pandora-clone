import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
// 1. استيراد اللينك من مكتبة الراوتر
import { Link } from 'react-router-dom';

const VideoBanner: React.FC = () => {
    // مرجع للتحكم بعنصر الفيديو برمجياً
    const videoRef = useRef<HTMLVideoElement>(null);

    // حالات لتتبع تشغيل الفيديو والصوت
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    // دالة تشغيل وإيقاف الفيديو
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // دالة كتم وتفعيل الصوت
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="relative w-full h-[500px] md:h-[650px] mt-16 overflow-hidden bg-surface-base">

            {/* 1. فيديو الخلفية */}
            <video
                ref={videoRef}
                src="/promo.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 2. طبقة تظليل (Gradient) شفافة لضمان وضوح النصوص البيضاء فوق الفيديو */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

            {/* 3. النصوص وزر الإجراء (على اليسار) */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-24 z-10">
                <p className="text-white text-sm font-semibold tracking-wide mb-3">
                    Gifts for every occasion
                </p>
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-wide">
                    PERFECT FOR<br />PROMISES
                </h2>

                {/* 2. تحويل زر الشراء إلى Link وتوجيهه لصفحة المنتجات */}
                <Link
                    to="/products"
                    className="inline-block bg-[#211710] text-white text-xs font-bold px-8 py-4 uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300"
                >
                    Shop Engravable Gifts
                </Link>
            </div>

            {/* 4. أزرار التحكم بالفيديو */}
            <div className="absolute bottom-6 right-6 flex z-10">
                <button
                    onClick={togglePlay}
                    className="bg-[#211710]/90 text-white p-3 hover:bg-black transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    {isPlaying ? <Pause size={20} strokeWidth={1.5} /> : <Play size={20} strokeWidth={1.5} />}
                </button>
                {/* فاصل رفيع بين الزرين */}
                <div className="w-[1px] bg-gray-600"></div>
                <button
                    onClick={toggleMute}
                    className="bg-[#211710]/90 text-white p-3 hover:bg-black transition-colors"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? <VolumeX size={20} strokeWidth={1.5} /> : <Volume2 size={20} strokeWidth={1.5} />}
                </button>
            </div>

        </section>
    );
};

export default VideoBanner;