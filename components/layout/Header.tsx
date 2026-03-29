'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Droplets } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { UtilityBar } from './UtilityBar';

const NAV_LINKS = [
  { href: '/catalog', label: 'Каталог' },
  { href: '/promo', label: 'Акции' },
  { href: '/delivery', label: 'Доставка' },
  { href: '/blog', label: 'Блог' },
  { href: '/service', label: 'Гарантия' },
  { href: '/support', label: 'Поддержка' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openCart } = useCartStore();
  const cartCount = count();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_12px_rgba(10,75,222,0.08)]">
      <UtilityBar />
      <div className="max-w-[1280px] mx-auto px-6 h-[70px] flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-9 h-9 bg-[#0A4BDE] rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(10,75,222,0.35)] group-hover:bg-[#072FA0] transition-colors">
            <Droplets size={18} color="white" />
          </div>
          <span className="text-xl font-extrabold tracking-[-0.03em] text-[#0D1226]">
            SENDO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href} href={href}
              className="px-3 py-2 text-sm font-medium text-[#4A5270] hover:text-[#0A4BDE] hover:bg-[#EEF1F8] rounded-lg transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Search */}
          <div className={`hidden md:flex items-center gap-2 bg-[#F5F7FC] rounded-xl px-4 transition-all duration-300 ${searchOpen ? 'w-64' : 'w-40'}`}>
            <Search size={15} className="text-[#8E97B0] flex-shrink-0" />
            <input
              type="text"
              placeholder="Поиск товаров..."
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              className="bg-transparent text-sm py-2.5 w-full outline-none placeholder-[#8E97B0] text-[#0D1226]"
            />
          </div>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 bg-[#0A4BDE] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#072FA0] transition-colors shadow-[0_4px_12px_rgba(10,75,222,0.3)]"
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Корзина</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#FF4D00] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-[#EEF1F8] transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#EEF1F8] bg-white px-6 py-4">
          <div className="flex items-center gap-2 bg-[#F5F7FC] rounded-xl px-4 mb-4">
            <Search size={15} className="text-[#8E97B0]" />
            <input type="text" placeholder="Поиск товаров..." className="bg-transparent text-sm py-2.5 w-full outline-none placeholder-[#8E97B0]" />
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#4A5270] hover:text-[#0A4BDE] hover:bg-[#EEF1F8] rounded-lg transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
