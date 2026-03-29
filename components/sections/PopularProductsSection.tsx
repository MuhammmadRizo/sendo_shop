import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '@/lib/data';
import { ProductCard } from '@/components/product/ProductCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function PopularProductsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <SectionTitle
            title="Популярные товары"
            subtitle="Самые продаваемые системы очистки воды"
          />
          <Link href="/catalog"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#0A4BDE] hover:text-[#072FA0] transition-colors">
            Весь каталог <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/catalog"
            className="inline-flex items-center gap-2 border border-[#0A4BDE] text-[#0A4BDE] font-semibold px-6 py-3 rounded-xl hover:bg-[#EEF1F8] transition-colors">
            Весь каталог <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
