import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 px-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <header className="mb-10 flex flex-col items-center text-center">
          <div className="size-16 text-primary mb-4 p-3 bg-primary/10 rounded-2xl">
            <span className="material-symbols-outlined text-4xl">lock_person</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Bienvenido de nuevo</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Ingresa tus credenciales para acceder a tu cuenta.</p>
        </header>

        <div className="glass-panel p-8 lg:p-10 rounded-2xl shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs py-3 px-4 rounded-xl text-center font-bold">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1" htmlFor="email">
                Correo Electrónico
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-slate-500 text-[20px]">mail</span>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@empresa.com" 
                  required
                  className="w-full bg-slate-900/50 dark:bg-charcoal border border-slate-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider" htmlFor="password">
                  Contraseña
                </label>
                <a href="#" className="text-xs text-primary hover:underline font-medium">¿Olvidaste tu contraseña?</a>
              </div>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-slate-500 text-[20px]">lock</span>
                <input 
                  type="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required
                  className="w-full bg-slate-900/50 dark:bg-charcoal border border-slate-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-12 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-500"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="login-glow w-full bg-primary hover:bg-primary/90 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
            >
              <span>{loading ? 'Cargando...' : 'Iniciar Sesión'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
          {/* ... rest of the component ... */}

          <div className="mt-10">
            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-slate-200 dark:border-white/5"></div>
              <span className="flex-shrink mx-4 text-xs font-medium text-slate-400 uppercase tracking-widest text-[10px]">O continuar con</span>
              <div className="flex-grow border-t border-slate-200 dark:border-white/5"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm font-medium py-3 rounded-xl transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="size-5" alt="Google" />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm font-medium py-3 rounded-xl transition-colors">
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="size-5 dark:invert" alt="GitHub" />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-500 text-sm">
          ¿No tienes una cuenta? <a href="#" className="text-primary font-bold hover:underline">Regístrate gratis</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
