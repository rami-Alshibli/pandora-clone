import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const FeaturedProducts: React.FC = () => {
    // بيانات وهمية للمنتجات (Mock Data)
    const products: Product[] = [
        {
            id: 1,
            name: "Sparkling Infinity Heart Charm",
            price: 65.00,
            imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop", // استبدلها بصور مجوهرات بخلفية بيضاء لاحقاً
            isNew: true
        },
        {
            id: 2,
            name: "Pandora Moments Snake Chain Bracelet",
            price: 70.00,
            imageUrl: "https://images.unsplash.com/photo-1599643478514-4a734d603fb5?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Clear Three-Stone Ring",
            price: 95.00,
            imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=400&auto=format&fit=crop",
            isNew: true
        },
        {
            id: 4,
            name: "Family Tree Heart Dangle Charm",
            price: 55.00,
            imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop",
        }
    ];

    return (
        <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary uppercase tracking-wide">
                    New Arrivals
                </h2>
                <a href="#" className="text-sm font-bold underline underline-offset-4 hover:text-gray-500 transition-colors">
                    Shop All
                </a>
            </div>

            {/* شبكة العرض: عمودين للموبايل، 4 أعمدة للشاشات الكبيرة */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;