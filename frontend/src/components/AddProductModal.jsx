import React, { useState } from 'react';

const AddProductModal = ({ isOpen, onClose, onProductAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Casual',
    image: '',
    description: '',
    tag: '',
    stock: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock) || 0,
          oldPrice: null // Can be added later if needed
        }),
      });

      if (!response.ok) {
        throw new Error('Error al añadir el producto');
      }

      onProductAdded();
      onClose();
      setFormData({
        name: '',
        price: '',
        category: 'Casual',
        image: '',
        description: '',
        tag: '',
        stock: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-primary/5">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Añadir Nuevo Producto</h2>
            <p className="text-xs text-slate-500 mt-1">Completa los detalles de la nueva prenda</p>
          </div>
          <button onClick={onClose} className="size-10 rounded-full hover:bg-white dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {error && (
            <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre</label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Camisa Lino"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Precio ($)</label>
              <input
                required
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1.5 col-span-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Categoría</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="Formal">Formal</option>
                <option value="Casual">Casual</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <div className="space-y-1.5 col-span-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Tag</label>
              <input
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                placeholder="Ej. Nuevo"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-1.5 col-span-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Stock</label>
              <input
                required
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="0"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">URL de Imagen</label>
            <input
              required
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Descripción</label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe el producto..."
              rows="3"
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary transition-all resize-none"
            />
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-4 rounded-2xl text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-[2] bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl text-sm font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="material-symbols-outlined animate-spin">sync</span>
              ) : (
                <span className="material-symbols-outlined">add_circle</span>
              )}
              {loading ? 'Guardando...' : 'Añadir Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
