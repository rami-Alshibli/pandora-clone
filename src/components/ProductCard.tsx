import React from 'react';

// تعريف هيكل بيانات المنتج بقوة TypeScript
export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    isNew?: boolean;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group cursor-pointer flex flex-col items-center text-center">
            <div className="relative w-full aspect-square bg-[#f8f8f8] mb-4 overflow-hidden flex justify-center items-center">
                {/* علامة "جديد" إذا كان المنتج حديثاً */}
                {product.isNew && (
                    <span className="absolute top-2 left-2 bg-white text-text-primary text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
            New
          </span>
                )}
                {/* صورة المنتج مع تأثير التكبير الخفيف عند الـ Hover */}
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <h3 className="text-sm font-semibold text-text-primary mb-1">{product.name}</h3>
            <p className="text-sm text-text-tertiary">${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;