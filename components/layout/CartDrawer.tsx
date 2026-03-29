'use client';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/formatters';
import Image from 'next/image';
import Link from 'next/link';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total } = useCartStore();
  const cartTotal = total();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-[150] backdrop-blur-sm" onClick={closeCart} />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[200] shadow-2xl flex flex-col cart-drawer ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EEF1F8]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#0A4BDE]" />
            <h2 className="font-bold text-[#0D1226] text-lg">Корзина</h2>
            {items.length > 0 && (
              <span className="bg-[#0A4BDE] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            )}
          </div>
          <button onClick={closeCart} className="p-2 rounded-xl hover:bg-[#EEF1F8] transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <ShoppingBag size={40} className="text-[#D8DCE8] mb-3" />
              <p className="text-[#8E97B0] font-medium">Корзина пуста</p>
              <p className="text-[#8E97B0] text-sm mt-1">Добавьте товары из каталога</p>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 p-3 rounded-xl bg-[#F5F7FC]">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#EEF1F8] flex-shrink-0">
                  <Image src={product.mainImage} alt={product.name} width={64} height={64} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-[#0D1226] truncate">{product.name}</p>
                  <p className="text-[#0A4BDE] font-bold text-sm mt-0.5">{formatPrice(product.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQty(product.id, quantity - 1)} className="w-6 h-6 rounded-md bg-white border border-[#D8DCE8] flex items-center justify-center hover:border-[#0A4BDE] transition-colors">
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-bold w-5 text-center">{quantity}</span>
                    <button onClick={() => updateQty(product.id, quantity + 1)} className="w-6 h-6 rounded-md bg-white border border-[#D8DCE8] flex items-center justify-center hover:border-[#0A4BDE] transition-colors">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(product.id)} className="p-1.5 text-[#8E97B0] hover:text-[#FF4D00] transition-colors self-start">
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#EEF1F8] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#4A5270] font-medium">Итого:</span>
              <span className="text-xl font-extrabold text-[#0D1226]">{formatPrice(cartTotal)}</span>
            </div>
            <Link href="/checkout" onClick={closeCart}
              className="block w-full bg-[#0A4BDE] text-white text-center font-bold py-3.5 rounded-xl hover:bg-[#072FA0] transition-colors shadow-[0_4px_16px_rgba(10,75,222,0.35)]">
              Оформить заказ
            </Link>
            <button onClick={closeCart} className="block w-full text-center text-sm text-[#8E97B0] hover:text-[#0A4BDE] transition-colors py-1">
              Продолжить покупки
            </button>
          </div>
        )}
      </div>
    </>
  );
}
