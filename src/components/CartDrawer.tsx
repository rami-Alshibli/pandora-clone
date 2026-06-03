import React from 'react';
import { X, Trash2 } from 'lucide-react';
// استوردنا CartItem مع useCart لحل مشكلة الأنواع
// استيراد الدالة بشكل عادي
import { useCart } from '../context/CartContext';
// استيراد الواجهة كـ type حصراً
import type { CartItem } from '../context/CartContext';

const CartDrawer: React.FC = () => {
    const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();

    // إذا كانت السلة مغلقة لا نعرض شيئاً
    if (!isCartOpen) return null;

    // الحل هنا: حددنا أن acc هو رقم (number) وأن item هو منتج (CartItem)
    const total = cartItems.reduce((acc: number, item: CartItem) => acc + (item.price * item.quantity), 0);

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* الخلفية السوداء الشفافة */}
            <div className="absolute inset-0 bg-black/40" onClick={closeCart}></div>

            {/* نافذة السلة البيضاء */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-fade-in">

                {/* رأس السلة */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-text-primary">Shopping Bag ({cartItems.length})</h2>
                    <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* قائمة المنتجات */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-center mt-10">Your bag is empty.</p>
                    ) : (
                        cartItems.map((item: CartItem) => (
                            <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover bg-gray-50 rounded" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm text-text-primary">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">Qty: {item.quantity}</p>
                                    <p className="font-bold text-text-primary mt-2">${item.price.toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors h-fit"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* أسفل السلة */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <div className="flex justify-between items-center mb-6 font-bold text-lg text-text-primary">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-text-primary text-white py-4 text-sm font-bold tracking-widest hover:bg-black transition-colors">
                        CHECKOUT
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CartDrawer;