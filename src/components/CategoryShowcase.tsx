import React, { useState } from 'react';

// --- Types ---
type CategoryId = 'charm-bracelets' | 'disney' | 'engravable' | 'promise-rings' | 'personalized';

interface CategoryData {
    id: CategoryId;
    label: string;
    mainImage: string;
    subImage: string;
}

// --- Data ---
// تم تحديث البيانات لتطابق صورتك الجديدة
const categoriesData: CategoryData[] = [
    {
        id: 'charm-bracelets',
        label: 'Charm Bracelets',
        mainImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
        subImage: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: 'disney',
        label: 'Disney x Pandora',
        mainImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop',
        subImage: 'https://images.unsplash.com/photo-1573408301145-b98c4af06b58?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: 'engravable',
        label: 'Engravable Jewelry',
        mainImage: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=800&auto=format&fit=crop',
        subImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: 'promise-rings',
        label: 'Heart & Promise Rings',
        mainImage: 'https://images.unsplash.com/photo-1599643478514-4a734d603fb5?q=80&w=800&auto=format&fit=crop',
        subImage: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca0f4b?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: 'personalized',
        label: 'Personalized Jewelry',
        mainImage: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=800&auto=format&fit=crop',
        subImage: 'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?q=80&w=400&auto=format&fit=crop',
    },
];

const CategoryShowcase: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryData>(categoriesData[0]);

    return (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 font-sans text-text-primary bg-white">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                {/* النصف الأيسر: قائمة الفئات */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center pr-8">
                    <p className="text-xs font-semibold mb-8 tracking-wide">Find what speaks to you</p>
                    <ul className="space-y-6">
                        {categoriesData.map((category) => (
                            <li key={category.id}>
                                <button
                                    onMouseEnter={() => setActiveCategory(category)}
                                    onClick={() => setActiveCategory(category)}
                                    className={`text-2xl sm:text-[28px] font-normal transition-all duration-300 text-left pb-1 
                    ${
                                        activeCategory.id === category.id
                                            ? 'border-b border-text-primary text-text-primary'
                                            : 'text-text-primary/70 hover:text-text-primary border-b border-transparent'
                                    }
                  `}
                                >
                                    {category.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* النصف الأيمن: شبكة الصور */}
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* الصورة الرئيسية */}
                    <div className="md:col-span-2 aspect-[4/5] overflow-hidden bg-gray-100 group">
                        <img
                            key={activeCategory.mainImage}
                            src={activeCategory.mainImage}
                            alt={`${activeCategory.label} model`}
                            className="w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* الصورة الفرعية */}
                    <div className="aspect-[4/5] overflow-hidden bg-gray-100 hidden md:block group">
                        <img
                            key={activeCategory.subImage}
                            src={activeCategory.subImage}
                            alt={`${activeCategory.label} products`}
                            className="w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CategoryShowcase;