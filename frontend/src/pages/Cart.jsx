import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 py-20 text-center">
        <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 size-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h1 className="text-3xl font-extrabold mb-4">¡Compra Exitosa!</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
          Gracias por tu pedido. Hemos recibido tu orden y pronto recibirás un correo con los detalles del envío.
        </p>
        <a href="/" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-primary/20">
          Volver al Catálogo
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-10 w-full">
      <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
        <a href="/" className="hover:text-primary">Inicio</a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-slate-900 dark:text-white font-medium">Carrito de Compras</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold tracking-tight">Tu Carrito</h1>
            <span className="text-slate-500 font-medium">{totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}</span>
          </div>

          <div className="flex flex-col gap-4">
            {cart.map(item => (
              <div key={item.id} className="group relative flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-slate-900/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all">
                <div className="size-24 md:size-32 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase">Categoría: {item.category}</span>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-semibold transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">delete</span> Eliminar
                  </button>
                </div>
                <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <div className="text-right min-w-[100px]">
                  <p className="text-lg font-bold">${item.price * item.quantity}.00</p>
                  <p className="text-xs text-slate-400">${item.price}.00 c/u</p>
                </div>
              </div>
            ))}
            {cart.length === 0 && (
              <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/20 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">shopping_cart</span>
                <p className="text-slate-500 font-bold">Tu carrito está vacío</p>
                <a href="/" className="inline-block mt-4 text-primary font-bold hover:underline">Ir al catálogo</a>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-bold">${totalPrice}.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Envío</span>
                <span className="text-green-500 font-bold">Gratis</span>
              </div>
              <div className="flex justify-between text-lg font-extrabold border-t border-slate-100 dark:border-slate-800 pt-4">
                <span>Total</span>
                <span className="text-2xl">${totalPrice}.00</span>
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full bg-primary hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-3 transition-all group"
            >
              Proceder al Pago
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
