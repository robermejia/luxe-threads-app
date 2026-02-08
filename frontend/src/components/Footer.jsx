import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-12 mt-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary text-white p-2 rounded-lg">
              <span className="material-symbols-outlined block text-xl">checkroom</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
              LUXE<span className="text-primary">THREADS</span>
            </h1>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            Redefiniendo la elegancia profesional desde 1998. Nuestras camisas están confeccionadas con el mejor algodón y diseñadas para el ejecutivo moderno.
          </p>
          <div className="flex gap-4">
            <a href="#" className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">language</span>
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Enlaces Rápidos</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-primary transition-colors">Colección Hombre</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Ropa Formal</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Estilo Casual</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Accesorios</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Soporte</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-primary transition-colors">Envío</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Devoluciones</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Guía de Tallas</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Boletín</h4>
          <p className="text-sm text-slate-500 mb-4">Recibe acceso exclusivo a ofertas y lanzamientos.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm px-4 focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm">Unirse</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
        <p>© 2024 LuxeThreads Premium Apparel. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary">Política de Privacidad</a>
          <a href="#" className="hover:text-primary">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
