import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const WaveCharmsVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

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

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="relative w-full h-[600px] flex flex-col justify-between overflow-hidden my-16">

            {/* فيديو الخلفية الخاص بهذا القسم */}
            <video
                ref={videoRef}
                src="/crab-video.mp4"// سمي الفيديو الخاص بهاد القسم باسم مختلف في مجلد public
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* تظليل لضمان وضوح النصوص */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />

            {/* النصوص */}
            <div className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-16 max-w-[1400px] mx-auto w-full">
                <p className="text-white text-sm font-semibold tracking-wide mb-3">
                    Command the current
                </p>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight max-w-lg">
                    DISCOVER A NEW<br />WAVE OF CHARMS
                </h2>
            </div>

            {/* الشريط السفلي */}
            <div className="relative z-20 flex justify-between items-end px-6 md:px-16 pb-8 max-w-[1400px] mx-auto w-full">

                <button className="bg-[#241d18] text-white text-xs font-bold px-10 py-4 uppercase tracking-widest hover:bg-black transition-colors duration-300">
                    SHOP NOW
                </button>

                <div className="flex bg-[#241d18] text-white">
                    <button
                        onClick={togglePlay}
                        className="p-4 hover:bg-black transition-colors"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        {isPlaying ? <Pause size={20} strokeWidth={1.5} /> : <Play size={20} strokeWidth={1.5} />}
                    </button>

                    <div className="w-[1px] bg-white/20 my-2" />

                    <button
                        onClick={toggleMute}
                        className="p-4 hover:bg-black transition-colors"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                        {isMuted ? <VolumeX size={20} strokeWidth={1.5} /> : <Volume2 size={20} strokeWidth={1.5} />}
                    </button>
                </div>

            </div>
        </section>
    );
};

export default WaveCharmsVideo;