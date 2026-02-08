import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-12 lg:py-20 w-full">
      <div className="mb-16 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Contáctanos</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Experimente lo último en sastrería personalizada. Nuestro equipo está listo para ayudarle a encontrar su ajuste perfecto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8 bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Envíanos un mensaje</h3>
            <p className="text-sm text-slate-500">Normalmente respondemos en menos de 24 horas hábiles.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold opacity-70">Nombre Completo</label>
                <input type="text" placeholder="Juan Pérez" className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold opacity-70">Email</label>
                <input type="email" placeholder="juan@ejemplo.com" className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold opacity-70">Asunto</label>
              <select className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary">
                <option>Estado del Pedido</option>
                <option>Consulta de Producto</option>
                <option>Devoluciones</option>
                <option>Otros</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold opacity-70">Mensaje</label>
              <textarea rows="6" placeholder="¿Cómo podemos ayudarte hoy?" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-xl">send</span>
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-10">
          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="text-lg font-bold">Showroom Principal</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Av. Las Camelias 123, San Isidro<br/>Lima, Perú</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h4 className="text-lg font-bold">Asistencia Telefónica</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Directo: +51 (01) 555-0198<br/>Gratuito: 0800-LUXE</p>
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8123456789!2d-77.028!3d-12.096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzQ1LjYiUyA3N8KwMDEnNDAuOCJX!5e0!3m2!1ses!2spe!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="grayscale invert dark:invert-0 dark:grayscale-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
