import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-lg">
            <span className="material-symbols-outlined block text-2xl">checkroom</span>
          </div>
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            LUXE<span className="text-primary">THREADS</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">Catálogo</Link>
          <Link to="/about" className="text-sm font-semibold hover:text-primary transition-colors">Nosotros</Link>
          <Link to="/contact" className="text-sm font-semibold hover:text-primary transition-colors">Contacto</Link>
        </nav>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <Link to="/cart" className="relative p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary/10 hover:text-primary transition-all">
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white dark:border-background-dark">
              {totalItems}
            </span>
          </Link>
          
          {user ? (
            <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 pl-3 pr-1 py-1 rounded-full border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold whitespace-nowrap hidden md:block">{user.name}</span>
              <button 
                onClick={logout}
                className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                title="Cerrar Sesión"
              >
                <span className="material-symbols-outlined text-lg">logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden cursor-pointer hover:border-primary transition-all shadow-sm">
              <span className="material-symbols-outlined text-slate-500">person</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
