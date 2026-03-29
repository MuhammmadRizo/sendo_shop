'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { use, useState } from 'react';
import { ShoppingCart, Heart, Shield, Truck, Star, Check, ChevronRight, Minus, Plus } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '@/lib/data';
import { useCartStore } from '@/store/cartStore';
import { useToast } from '@/components/ui/Toast';
import { formatPrice } from '@/lib/formatters';
import { ProductCard } from '@/components/product/ProductCard';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find(p => p.slug === slug)!;
  if (!product) notFound();

  const [qty, setQty] = useState(1);
  const { addItem, openCart } = useCartStore();
  const { showToast } = useToast();

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) addItem(product);
    showToast(`${product.name} (${qty} шт.) добавлен в корзину`);
    openCart();
  }

  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[1280px] mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-xs text-[#8E97B0]">
            <Link href="/" className="hover:text-[#0A4BDE]">Главная</Link>
            <ChevronRight size={12} />
            <Link href="/catalog" className="hover:text-[#0A4BDE]">Каталог</Link>
            <ChevronRight size={12} />
            <span className="text-[#0D1226] font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Image */}
          <div className="bg-white rounded-3xl p-8 aspect-square flex items-center justify-center border border-[#EEF1F8] relative group">
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#FF4D00] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {product.badge === 'sale' ? 'АКЦИЯ' : product.badge === 'new' ? 'НОВИНКА' : 'ХИТ'}
              </div>
            )}
            <Image src={product.mainImage} alt={product.name} width={420} height={420} className="object-contain" />
            <button className="absolute top-4 right-4 w-9 h-9 bg-[#F5F7FC] rounded-xl flex items-center justify-center text-[#8E97B0] hover:text-[#FF4D00] transition-colors">
              <Heart size={16} />
            </button>
          </div>

          {/* Info */}
          <div className="space-y-5">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={13} className={i <= Math.round(product.rating) ? 'fill-[#F5B800] text-[#F5B800]' : 'fill-[#D8DCE8] text-[#D8DCE8]'} />
                ))}
              </div>
              <span className="text-sm text-[#8E97B0]">{product.rating} · {product.reviewsCount} отзывов</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0D1226] leading-tight">{product.name}</h1>
            <p className="text-[#4A5270] text-sm leading-relaxed">{product.shortDescription}</p>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-[#0D1226]">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <>
                  <span className="text-lg text-[#8E97B0] line-through mb-1">{formatPrice(product.oldPrice)}</span>
                  {product.discountPercent && (
                    <span className="bg-[#FF4D00] text-white text-xs font-bold px-2 py-1 rounded-lg mb-1">
                      −{product.discountPercent}%
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Stock */}
            <div className={`flex items-center gap-2 text-sm font-semibold ${product.stockStatus === 'in_stock' ? 'text-green-600' : 'text-[#FF4D00]'}`}>
              <Check size={14} />
              {product.stockStatus === 'in_stock' ? 'В наличии' : product.stockStatus === 'low_stock' ? 'Осталось мало' : 'Нет в наличии'}
            </div>

            {/* Qty + Add to cart */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-[#D8DCE8] rounded-xl px-3 py-2.5">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="text-[#8E97B0] hover:text-[#0D1226] transition-colors">
                  <Minus size={14} />
                </button>
                <span className="font-bold w-6 text-center text-sm">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="text-[#8E97B0] hover:text-[#0D1226] transition-colors">
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-[#0A4BDE] text-white font-bold py-3 rounded-xl hover:bg-[#072FA0] transition-colors shadow-[0_4px_16px_rgba(10,75,222,0.35)]">
                <ShoppingCart size={16} /> В корзину
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, label: 'Гарантия', value: '24 мес.' },
                { icon: Truck, label: 'Доставка', value: '1-7 дней' },
                { icon: Check, label: 'Сертификат', value: 'РФ' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-[#F5F7FC] rounded-xl p-3 text-center">
                  <Icon size={16} className="text-[#0A4BDE] mx-auto mb-1" />
                  <div className="text-[10px] text-[#8E97B0]">{label}</div>
                  <div className="text-xs font-bold text-[#0D1226]">{value}</div>
                </div>
              ))}
            </div>

            {/* Specs */}
            {(product.filtrationStages || product.installationType) && (
              <div className="border border-[#EEF1F8] rounded-2xl overflow-hidden">
                <div className="bg-[#F5F7FC] px-4 py-3 text-xs font-bold text-[#0D1226] uppercase tracking-wider">
                  Характеристики
                </div>
                {[
                  product.filtrationStages && { key: 'Ступени фильтрации', value: `${product.filtrationStages} ступени` },
                  product.installationType && { key: 'Тип установки', value: product.installationType === 'under_sink' ? 'Под мойку' : 'Настольный' },
                  { key: 'Артикул', value: product.id.padStart(6, '0') },
                  { key: 'Бренд', value: 'SENDO' },
                ].filter(Boolean).map((row, i) => (
                  <div key={i} className={`flex items-center px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FC]'}`}>
                    <span className="text-[#8E97B0] flex-1">{(row as {key:string;value:string}).key}</span>
                    <span className="font-medium text-[#0D1226]">{(row as {key:string;value:string}).value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-3xl border border-[#EEF1F8] p-8 mb-10">
          <h2 className="text-xl font-extrabold text-[#0D1226] mb-6">Отзывы покупателей</h2>
          <div className="space-y-5">
            {REVIEWS.slice(0, 3).map(review => (
              <div key={review.id} className="border-b border-[#EEF1F8] pb-5 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-bold text-sm text-[#0D1226]">{review.authorName}</span>
                    <span className="text-xs text-[#8E97B0] ml-2">· {review.location}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={11} className={i <= review.rating ? 'fill-[#F5B800] text-[#F5B800]' : 'fill-[#D8DCE8] text-[#D8DCE8]'} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#4A5270] leading-relaxed">{review.text}</p>
                <span className="text-xs text-[#8E97B0] mt-2 block">{review.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div>
          <h2 className="text-xl font-extrabold text-[#0D1226] mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
