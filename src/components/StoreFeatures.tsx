import React from 'react';
import { RefreshCw, Truck, Gift, ShieldCheck } from 'lucide-react';

const StoreFeatures: React.FC = () => {
    // مصفوفة تحتوي على بيانات الميزات لتسهيل عرضها وتعديلها
    const features = [
        {
            id: 'returns',
            icon: <RefreshCw size={40} strokeWidth={1} />,
            text: 'Free 30-day returns',
        },
        {
            id: 'shipping',
            icon: <Truck size={40} strokeWidth={1} />,
            text: 'Free standard shipping on orders $75+',
        },
        {
            id: 'packaging',
            icon: <Gift size={40} strokeWidth={1} />,
            text: 'Gift packaging available',
        },
        {
            id: 'warranty',
            icon: <ShieldCheck size={40} strokeWidth={1} />,
            text: 'Complimentary 1-year warranty',
        },
    ];

    return (
        <section className="bg-white border-t border-gray-200">
            <div className="max-w-[1400px] mx-auto py-12 px-6">

                {/* استخدام الشبكة (Grid):
          - عمود واحد على الموبايل
          - عمودين على الشاشات المتوسطة
          - 4 أعمدة على الشاشات الكبيرة
          - divide-x: تقوم برسم الخطوط الرمادية العمودية بين العناصر آلياً
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-gray-200">

                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-center text-center px-4">
                            <div className="mb-5 text-text-primary">
                                {feature.icon}
                            </div>
                            <p className="text-[15px] font-semibold text-text-primary tracking-wide">
                                {feature.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default StoreFeatures;