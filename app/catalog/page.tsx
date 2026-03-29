'use client';
import { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import { ProductCard } from '@/components/product/ProductCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

const SORT_OPTIONS = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price_asc', label: 'Цена: по возрастанию' },
  { value: 'price_desc', label: 'Цена: по убыванию' },
  { value: 'rating', label: 'По рейтингу' },
];

const CATEGORIES_FILTER = ['Обратный осмос', 'Картриджи', 'Корпуса для колб', 'Настольные'];
const STAGES_FILTER = ['3 ступени', '5 ступеней', '7 ступеней'];

export default function CatalogPage() {
  const [sort, setSort] = useState('popular');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(30000);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  function toggleCat(cat: string) {
    setActiveCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  }

  const sorted = useMemo(() => {
    let list = [...PRODUCTS].filter(p => p.price >= priceMin && p.price <= priceMax);
    if (sort === 'price_asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price_desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [sort, priceMin, priceMax]);

  const activeSortLabel = SORT_OPTIONS.find(o => o.value === sort)?.label;

  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      {/* Page header */}
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <SectionTitle title="Каталог товаров" subtitle={`${PRODUCTS.length} товаров в наличии`} />
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#8E97B0] mt-3">
            <a href="/" className="hover:text-[#0A4BDE]">Главная</a>
            <span>/</span>
            <span className="text-[#0D1226] font-medium">Каталог</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex gap-7">

          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-[#EEF1F8] p-5 space-y-6 sticky top-24">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0D1226]">Фильтры</span>
                <button className="text-xs text-[#0A4BDE] font-medium hover:underline" onClick={() => { setActiveCategories([]); setPriceMin(0); setPriceMax(30000); }}>
                  Сбросить
                </button>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm font-semibold text-[#0D1226] mb-3">Цена, ₽</h3>
                <div className="flex items-center gap-2">
                  <input type="number" value={priceMin} onChange={e => setPriceMin(Number(e.target.value))}
                    className="w-full border border-[#D8DCE8] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#0A4BDE]" />
                  <span className="text-[#8E97B0]">—</span>
                  <input type="number" value={priceMax} onChange={e => setPriceMax(Number(e.target.value))}
                    className="w-full border border-[#D8DCE8] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#0A4BDE]" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-[#0D1226] mb-3">Категория</h3>
                <div className="space-y-2">
                  {CATEGORIES_FILTER.map(cat => (
                    <label key={cat} className="flex items-center gap-2 text-sm text-[#4A5270] cursor-pointer">
                      <input type="checkbox" checked={activeCategories.includes(cat)} onChange={() => toggleCat(cat)}
                        className="w-4 h-4 accent-[#0A4BDE]" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtration stages */}
              <div>
                <h3 className="text-sm font-semibold text-[#0D1226] mb-3">Ступени очистки</h3>
                <div className="space-y-2">
                  {STAGES_FILTER.map(s => (
                    <label key={s} className="flex items-center gap-2 text-sm text-[#4A5270] cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#0A4BDE]" />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              {/* Stock toggle */}
              <div>
                <h3 className="text-sm font-semibold text-[#0D1226] mb-3">Наличие</h3>
                <label className="flex items-center gap-2 text-sm text-[#4A5270] cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#0A4BDE]" />
                  Только в наличии
                </label>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="text-sm text-[#8E97B0] font-medium">{sorted.length} товаров</span>
              <div className="flex items-center gap-3">
                <button onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-1.5 border border-[#D8DCE8] text-sm font-medium text-[#4A5270] px-3 py-2 rounded-xl hover:border-[#0A4BDE] transition-colors">
                  <SlidersHorizontal size={14} /> Фильтры
                </button>
                {/* Sort dropdown */}
                <div className="relative">
                  <button onClick={() => setSortOpen(o => !o)}
                    className="flex items-center gap-2 border border-[#D8DCE8] text-sm font-medium text-[#4A5270] px-3 py-2 rounded-xl hover:border-[#0A4BDE] transition-colors min-w-[180px] justify-between">
                    <span>{activeSortLabel}</span>
                    <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-[#EEF1F8] rounded-xl shadow-[0_8px_24px_rgba(10,75,222,0.12)] py-1 z-10 min-w-[180px]">
                      {SORT_OPTIONS.map(opt => (
                        <button key={opt.value} onClick={() => { setSort(opt.value); setSortOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${sort === opt.value ? 'text-[#0A4BDE] font-semibold bg-[#EEF1F8]' : 'text-[#4A5270] hover:bg-[#F5F7FC]'}`}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {sorted.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-[200] bg-black/50 lg:hidden" onClick={() => setShowFilters(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-[#0D1226]">Фильтры</span>
              <button onClick={() => setShowFilters(false)}><X size={18} /></button>
            </div>
            <div className="space-y-2">
              {CATEGORIES_FILTER.map(cat => (
                <label key={cat} className="flex items-center gap-2 text-sm text-[#4A5270] cursor-pointer py-1">
                  <input type="checkbox" checked={activeCategories.includes(cat)} onChange={() => toggleCat(cat)} className="w-4 h-4 accent-[#0A4BDE]" />
                  {cat}
                </label>
              ))}
            </div>
            <button onClick={() => setShowFilters(false)}
              className="mt-6 w-full bg-[#0A4BDE] text-white font-bold py-3 rounded-xl">
              Применить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
