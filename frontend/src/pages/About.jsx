import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY6EGGsy1I3mw08gqR0U7wC-5Fz1ErypQBuzNOIQs8UAEsHlXMziDmzXHWOcTFcAuemvoLVpryCAYBGdv3ct6EoMY1MDSX3GUPjnoNu4TbqUvNpAXAl2HxLUau87bKptnSJ9ymSXlctGlt9dpaVMBF4MknrL3VQ8nEFSwZaYtIe1XbNEtDANr0Q_hIUSxfCAechmNQyunmAI6HG6kUfKZN-WdVT_AbYJ8YRdyE0cuIsXjDEqySw3MqGUCwm8-qISyhAovE26RIaA7N" 
            className="h-full w-full object-cover" 
            alt="Textura de tela premium"
          />
        </div>
        <div className="container relative z-20 px-6 lg:px-20 mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded mb-6">Nuestra Herencia</span>
            <h1 className="text-5xl lg:text-7xl text-white font-serif leading-tight mb-6">Artesanía de excelencia desde 1994.</h1>
            <p className="text-lg lg:text-xl text-slate-300 font-light max-w-xl leading-relaxed">
              Descubra el cruce entre la sastrería tradicional italiana y la innovación textil moderna en nuestra búsqueda de la camisa perfecta.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-serif mb-8 leading-tight">Cada puntada es un <br/><span className="text-primary italic">testimonio de precisión.</span></h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Creemos que una camisa es más que una prenda; es la base de la confianza. Nuestro viaje comenzó en un pequeño taller en Milán, donde pasamos años perfeccionando cada detalle.
              </p>
              <div className="flex gap-12 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div>
                  <p className="text-3xl font-bold text-primary">12k+</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Horas de Diseño</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Algodón GOTS</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuALryNwf7fQQnK46AHyJqU12Txpe5A48ywori3nNaExHDO0mZtvl2-NX0wIoWEAdmCYvxWdEX-jscU99kNmzNCLg-gMhiyYNPNO4RJLP4vdbNPNlXF1_XtmVi5K64N0gXo164jPdPc8erabg2139-HUbLu7ILYiAlZwaiN2U4TMyWXfBgaxAHYAifkdUtZ8bpQx_5BNfS1qw3f5rUw1a-vMT83sU8-cbAIDWUBoTzgvulvMxvKtjlgEtQEf3ovkaRnlC7Ruca2aKKs2" className="rounded-xl shadow-2xl mt-12" alt="Sastre trabajando" />
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuALf4zkho3Mf65wXY5DJznvG4dZbgdI32vRDlFcxK8G_Drm5YRZ6DMb4x77o2I0K8NKs4G2rJTFAEIp0nO_EZGbNvJbN-Q-g51jcVhFAu4lOZhZy79j5ln4vYC__CPMrGXY90tAcOJjhQTiKGw4wekYN1syLsBwY4Vra8WoTz_23L5JJ1Da80JA9bDW5zViBAb1egfXslZ5WbigJO6G4iF1AGdKyoA-tQtx9aazK8oXHMkNWswTL7NF1W5yNdyN_HKZ6ftCUOKRBSqK" className="rounded-xl shadow-2xl" alt="Telas de alta calidad" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
