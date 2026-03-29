'use client';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/formatters';

export default function CartPage() {
  const { items, removeItem, updateQty, total } = useCartStore();
  const cartTotal = total();
  const shipping = cartTotal >= 5000 ? 0 : 490;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5F7FC] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={56} className="text-[#D8DCE8] mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-[#0D1226] mb-2">Корзина пуста</h2>
          <p className="text-[#8E97B0] mb-6">Добавьте товары из нашего каталога</p>
          <Link href="/catalog" className="inline-flex items-center gap-2 bg-[#0A4BDE] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#072FA0] transition-colors">
            Перейти в каталог <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <h1 className="text-2xl font-extrabold text-[#0D1226]">Корзина</h1>
          <nav className="flex items-center gap-2 text-xs text-[#8E97B0] mt-2">
            <Link href="/" className="hover:text-[#0A4BDE]">Главная</Link>
            <span>/</span>
            <span className="text-[#0D1226] font-medium">Корзина</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8">

          {/* Items */}
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="bg-white rounded-2xl border border-[#EEF1F8] p-5 flex gap-5">
                <div className="w-20 h-20 bg-[#F5F7FC] rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={product.mainImage} alt={product.name} width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/product/${product.slug}`} className="font-bold text-[#0D1226] hover:text-[#0A4BDE] transition-colors">
                    {product.name}
                  </Link>
                  <p className="text-xs text-[#8E97B0] mt-1">{product.shortDescription}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2 border border-[#D8DCE8] rounded-lg px-2.5 py-1.5">
                      <button onClick={() => updateQty(product.id, quantity - 1)} className="text-[#8E97B0] hover:text-[#0D1226]">
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-bold w-5 text-center">{quantity}</span>
                      <button onClick={() => updateQty(product.id, quantity + 1)} className="text-[#8E97B0] hover:text-[#0D1226]">
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="font-extrabold text-[#0D1226]">{formatPrice(product.price * quantity)}</span>
                  </div>
                </div>
                <button onClick={() => removeItem(product.id)} className="text-[#8E97B0] hover:text-[#FF4D00] transition-colors self-start">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl border border-[#EEF1F8] p-6 h-fit sticky top-24">
            <h2 className="font-bold text-[#0D1226] mb-5">Итого</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-[#4A5270]">
                <span>Товары ({items.length})</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-[#4A5270]">
                <span>Доставка</span>
                <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>{shipping === 0 ? 'Бесплатно' : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-[#8E97B0]">Бесплатная доставка при заказе от {formatPrice(5000)}</p>
              )}
              <div className="border-t border-[#EEF1F8] pt-3 flex justify-between">
                <span className="font-bold text-[#0D1226]">К оплате</span>
                <span className="font-extrabold text-[#0D1226] text-lg">{formatPrice(cartTotal + shipping)}</span>
              </div>
            </div>
            <Link href="/checkout"
              className="block w-full bg-[#0A4BDE] text-white text-center font-bold py-3.5 rounded-xl mt-5 hover:bg-[#072FA0] transition-colors shadow-[0_4px_16px_rgba(10,75,222,0.35)]">
              Оформить заказ
            </Link>
            <Link href="/catalog" className="block w-full text-center text-sm text-[#8E97B0] hover:text-[#0A4BDE] transition-colors mt-3">
              Продолжить покупки
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
