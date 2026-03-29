'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/formatters';
import { ChevronRight, Check } from 'lucide-react';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const cartTotal = total();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '', street: '', apartment: '', payment: 'card',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    clearCart();
    setPlaced(true);
  }

  if (placed) {
    return (
      <div className="min-h-screen bg-[#F5F7FC] flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center border border-[#EEF1F8] shadow-[0_8px_32px_rgba(10,75,222,0.1)]">
          <div className="w-16 h-16 bg-[#EEF1F8] rounded-full flex items-center justify-center mx-auto mb-5">
            <Check size={32} className="text-[#0A4BDE]" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#0D1226] mb-2">Заказ принят!</h2>
          <p className="text-[#8E97B0] text-sm mb-2">Номер заказа: <span className="font-bold text-[#0D1226]">SENDO-2025-00{Math.floor(Math.random()*900+100)}</span></p>
          <p className="text-[#8E97B0] text-sm mb-7">Мы отправим подтверждение на ваш email и свяжемся для уточнения деталей доставки.</p>
          <Link href="/" className="block w-full bg-[#0A4BDE] text-white font-bold py-3.5 rounded-xl hover:bg-[#072FA0] transition-colors">
            На главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[1280px] mx-auto px-6 py-6">
          <nav className="flex items-center gap-2 text-xs text-[#8E97B0]">
            <Link href="/" className="hover:text-[#0A4BDE]">Главная</Link>
            <ChevronRight size={12} />
            <Link href="/cart" className="hover:text-[#0A4BDE]">Корзина</Link>
            <ChevronRight size={12} />
            <span className="text-[#0D1226] font-medium">Оформление</span>
          </nav>
          <h1 className="text-2xl font-extrabold text-[#0D1226] mt-3">Оформление заказа</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_360px] gap-8">

          {/* Left */}
          <div className="space-y-6">
            {/* Contact */}
            <div className="bg-white rounded-2xl border border-[#EEF1F8] p-6">
              <h2 className="font-bold text-[#0D1226] mb-5">Контактные данные</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: 'name', label: 'Имя', type: 'text', placeholder: 'Иван Иванов' },
                  { id: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'ivan@email.com', full: true },
                ].map(({ id, label, type, placeholder, full }) => (
                  <div key={id} className={full ? 'sm:col-span-2' : ''}>
                    <label className="text-xs font-semibold text-[#4A5270] block mb-1.5">{label}</label>
                    <input type={type} placeholder={placeholder} required
                      value={form[id as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                      className="w-full border border-[#D8DCE8] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A4BDE] transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery */}
            <div className="bg-white rounded-2xl border border-[#EEF1F8] p-6">
              <h2 className="font-bold text-[#0D1226] mb-5">Адрес доставки</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: 'city', label: 'Город', placeholder: 'Москва' },
                  { id: 'street', label: 'Улица и дом', placeholder: 'ул. Примерная, д. 1' },
                  { id: 'apartment', label: 'Квартира / офис', placeholder: '42' },
                ].map(({ id, label, placeholder }) => (
                  <div key={id}>
                    <label className="text-xs font-semibold text-[#4A5270] block mb-1.5">{label}</label>
                    <input type="text" placeholder={placeholder} required
                      value={form[id as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                      className="w-full border border-[#D8DCE8] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A4BDE] transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl border border-[#EEF1F8] p-6">
              <h2 className="font-bold text-[#0D1226] mb-5">Способ оплаты</h2>
              <div className="space-y-3">
                {[
                  { value: 'card', label: 'Банковская карта онлайн' },
                  { value: 'sbp', label: 'СБП (QR-код)' },
                  { value: 'cash', label: 'Наличными при получении' },
                ].map(({ value, label }) => (
                  <label key={value} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${form.payment === value ? 'border-[#0A4BDE] bg-[#EEF1F8]' : 'border-[#EEF1F8] hover:border-[#D8DCE8]'}`}>
                    <input type="radio" name="payment" value={value} checked={form.payment === value}
                      onChange={e => setForm(f => ({ ...f, payment: e.target.value }))}
                      className="accent-[#0A4BDE]" />
                    <span className="text-sm font-medium text-[#0D1226]">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right: summary */}
          <div className="bg-white rounded-2xl border border-[#EEF1F8] p-6 h-fit sticky top-24">
            <h2 className="font-bold text-[#0D1226] mb-5">Ваш заказ</h2>
            <div className="space-y-3 text-sm mb-5">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between gap-2">
                  <span className="text-[#4A5270] line-clamp-1 flex-1">{product.name} ×{quantity}</span>
                  <span className="font-semibold text-[#0D1226] flex-shrink-0">{formatPrice(product.price * quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#EEF1F8] pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-[#4A5270]">
                <span>Доставка</span>
                <span className="text-green-600 font-semibold">Бесплатно</span>
              </div>
              <div className="flex justify-between font-extrabold text-[#0D1226] text-base pt-1">
                <span>К оплате</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>
            <button type="submit"
              className="mt-5 w-full bg-[#0A4BDE] text-white font-bold py-4 rounded-xl hover:bg-[#072FA0] transition-colors shadow-[0_4px_16px_rgba(10,75,222,0.35)]">
              Подтвердить заказ
            </button>
            <p className="text-center text-xs text-[#8E97B0] mt-3">Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных</p>
          </div>
        </form>
      </div>
    </div>
  );
}
