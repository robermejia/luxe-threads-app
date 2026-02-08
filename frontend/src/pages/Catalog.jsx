import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import AddProductModal from '../components/AddProductModal';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('Todas');
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');

  const fetchProducts = () => {
    setLoading(true);
    let url = `${import.meta.env.VITE_API_URL}/api/products?category=${category}&search=${search}`;
    if (priceRange[0] > 0) url += `&minPrice=${priceRange[0]}`;
    if (priceRange[1] < 1000) url += `&maxPrice=${priceRange[1]}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [category, search, priceRange]);

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 px-6 lg:px-20 py-8">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-64 shrink-0 space-y-8">
        <div>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">tune</span> Filtros
          </h2>
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Categoría</p>
            {['Todas', 'Formal', 'Casual', 'Accesorios', 'Premium'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                  category === cat
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Talla</p>
          <div className="grid grid-cols-3 gap-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button 
                key={size} 
                onClick={() => setSelectedSize(size)}
                className={`py-2 text-xs font-bold rounded-lg border transition-all ${selectedSize === size ? 'bg-primary text-white border-primary' : 'border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Buscar</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2 px-10 text-sm focus:ring-2 focus:ring-primary transition-all"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
          </div>
        </div>
      </aside>

      {/* Product Grid Area */}
      <section className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Colección Premium</h2>
            <p className="text-slate-500 text-sm">Mostrando {products.length} productos en "{category}"</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            {user?.role === 'ADMIN' && (
              <button 
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all transform active:scale-95 shadow-lg shadow-emerald-500/20 whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-lg">add_box</span> Nuevo Producto
              </button>
            )}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-400 whitespace-nowrap">Ordenar por:</span>
              <select className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold focus:ring-primary py-2 px-3 outline-none">
                <option>Más recientes</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.tag && (
                  <div className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded uppercase ${product.tag === 'Oferta' ? 'bg-red-500' : 'bg-primary'}`}>
                    {product.tag}
                  </div>
                )}
                <button className="absolute top-3 right-3 h-9 w-9 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">{product.category}</p>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-tight group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-tight font-medium">Stock disponible: {product.stock || 0}</p>
                <div className="mt-auto flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    {product.oldPrice && <span className="text-xs text-slate-400 line-through">${product.oldPrice}.00</span>}
                    <span className={`text-lg font-extrabold ${product.oldPrice ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>
                      ${product.price}.00
                    </span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                  >
                    <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AddProductModal 
        isOpen={showAddModal} 
        onClose={() => setShowAddModal(false)}
        onProductAdded={fetchProducts}
      />
    </div>
  );
};

export default Catalog;
