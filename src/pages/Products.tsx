import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const categoryProducts = [
    { id: 1, name: "Sparkling Infinity Heart Charm", price: 55.00, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Timeless Elegance Ring", price: 85.00, image: "https://images.unsplash.com/photo-1605100804763-247f66150ce8?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Moments Snake Chain Bracelet", price: 65.00, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Elevated Heart Necklace", price: 115.00, image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00de?auto=format&fit=crop&q=80&w=500" },
    { id: 5, name: "Rose Gold Crown Charm", price: 45.00, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500" },
    { id: 6, name: "Silver Hoop Earrings", price: 75.00, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=500" },
];

const Products: React.FC = () => {
    const { addToCart } = useCart();

    return (
        <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-4 text-text-primary uppercase tracking-widest">
                All Jewelry
            </h1>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                Explore our exquisite collection of hand-finished jewelry. Find the perfect piece to tell your story.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {categoryProducts.map((product) => (
                    <div key={product.id} className="group cursor-pointer flex flex-col">
                        <div className="relative overflow-hidden bg-gray-50 aspect-square mb-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    addToCart({ ...product, quantity: 1 });
                                }}
                                className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                            >
                                <ShoppingBag size={20} />
                            </button>
                        </div>
                        <h3 className="text-sm font-semibold text-text-primary mb-1 truncate">{product.name}</h3>
                        <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
