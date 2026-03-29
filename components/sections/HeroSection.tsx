'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingCart, ChevronRight, Shield, Star } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import { useCartStore } from '@/store/cartStore';
import { useToast } from '@/components/ui/Toast';
import { formatPrice } from '@/lib/formatters';

export function HeroSection() {
  const featured = PRODUCTS[0];
  const { addItem, openCart } = useCartStore();
  const { showToast } = useToast();

  function handleAddToCart() {
    addItem(featured);
    showToast(`${featured.name} добавлен в корзину`);
    openCart();
  }

  return (
    <section className="relative bg-[#F5F7FC] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#0A4BDE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00C2FF]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#0A4BDE] rounded-full opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 border-2 border-[#0A4BDE]/20 rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0A4BDE]/10 text-[#0A4BDE] text-xs font-bold px-3 py-1.5 rounded-full border border-[#0A4BDE]/20">
              <Star size={11} className="fill-[#0A4BDE]" />
              Фильтры №1 по соотношению цена/качество
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-[#0D1226]">
              Чистая вода{' '}
              <span className="text-[#0A4BDE] relative">
                дома
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M0 5 Q50 1 100 4 Q150 7 200 3" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>{' '}
              и в офисе
            </h1>

            <p className="text-[#4A5270] text-lg leading-relaxed max-w-md">
              Системы обратного осмоса SENDO Aqua — до 7 ступеней очистки, сертифицированные компоненты, установка за 40 минут.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '8 лет', label: 'средний срок службы без замены корпуса' },
                { value: '830+', label: 'постоянных клиентов в этом месяце' },
              ].map(({ value, label }) => (
                <div key={value} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-[#0A4BDE] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield size={16} color="white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0D1226] text-lg leading-none">{value}</div>
                    <div className="text-xs text-[#8E97B0] mt-0.5 max-w-[120px]">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/catalog"
                className="inline-flex items-center gap-2 bg-[#0A4BDE] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#072FA0] transition-colors shadow-[0_4px_16px_rgba(10,75,222,0.35)]">
                Перейти в каталог <ArrowRight size={16} />
              </Link>
              <Link href="/catalog?quiz=1"
                className="inline-flex items-center gap-2 bg-white text-[#0A4BDE] font-bold px-6 py-3.5 rounded-xl border border-[#D8DCE8] hover:border-[#0A4BDE] hover:bg-[#EEF1F8] transition-colors">
                Подобрать фильтр <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-4 text-xs text-[#8E97B0]">
              <span className="flex items-center gap-1">✓ Гарантия 24 месяца</span>
              <span className="flex items-center gap-1">✓ Доставка по России</span>
              <span className="flex items-center gap-1">✓ Сертификаты РФ</span>
            </div>
          </div>

          {/* Right: Featured product card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_rgba(10,75,222,0.15)] p-6 max-w-[320px] w-full">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#0A4BDE]/10 to-[#00C2FF]/10 rounded-3xl blur-xl -z-10" />

              {/* Badge */}
              <div className="absolute -top-3 left-6">
                <span className="bg-[#F5B800] text-[#0D1226] text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider shadow">
                  ХИТ ПРОДАЖ
                </span>
              </div>

              <Image
                src={featured.mainImage} alt={featured.name}
                width={320}
                className=" object-cover rounded-2xl bg-[#F5F7FC]"
              />

              <div className="mt-4 space-y-3">
                <h3 className="font-bold text-[#0D1226] text-base">{featured.name}</h3>
                <p className="text-xs text-[#8E97B0]">{featured.shortDescription}</p>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-[#0D1226]">{formatPrice(featured.price)}</span>
                  {featured.oldPrice && (
                    <span className="text-sm text-[#8E97B0] line-through">{formatPrice(featured.oldPrice)}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A4BDE] text-white text-xs font-bold py-3 rounded-xl hover:bg-[#072FA0] transition-colors shadow-[0_2px_12px_rgba(10,75,222,0.35)]">
                    <ShoppingCart size={13} /> В корзину
                  </button>
                  <Link href={`/product/${featured.slug}`}
                    className="px-4 py-3 border border-[#D8DCE8] text-xs font-semibold text-[#4A5270] rounded-xl hover:border-[#0A4BDE] hover:text-[#0A4BDE] transition-colors">
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
