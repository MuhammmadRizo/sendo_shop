'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export function UtilityBar() {
  return (
    <div className="bg-[#0D1226] text-[#8E97B0] text-xs font-medium tracking-wide">
      <div className="max-w-[1280px] mx-auto px-6 h-9 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-white font-semibold">
            <Phone size={12} /> +7 (800) 555-35-35
          </span>
          <span className="hidden sm:inline text-[#8E97B0]">Бесплатно по России</span>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          {[
            { href: '/catalog', label: 'В наличии', badge: true },
            { href: '/promo', label: 'Акции' },
            { href: '/blog', label: 'Блог' },
            { href: '/delivery', label: 'Доставка' },
            { href: '/faq', label: 'Как купить' },
            { href: '/service', label: 'Гарантия' },
            { href: '/support', label: 'Поддержка' },
          ].map(({ href, label, badge }) => (
            <Link key={href} href={href} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
              {label}
              {badge && (
                <span className="bg-[#0A4BDE] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  NEW
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
