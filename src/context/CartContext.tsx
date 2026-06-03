/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react'; // حل الخطأ الأول: استيراد ReactNode كـ type فقط

// تعريف شكل المنتج داخل السلة
export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    // دالة إضافة منتج
    const addToCart = (item: CartItem) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
        openCart();
    };

    const removeFromCart = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, isCartOpen, openCart, closeCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// حل الخطأ الثاني موجود في أول سطر بالملف (تعليق الـ eslint)
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};