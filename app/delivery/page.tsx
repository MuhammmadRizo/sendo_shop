import { Truck, Clock, CreditCard, Shield, MapPin } from 'lucide-react';

const DELIVERY_OPTIONS = [
  { icon: Truck, title: 'Курьерская доставка', subtitle: 'Москва и СПб', time: '1–2 рабочих дня', price: 'Бесплатно от 5 000 ₽', color: '#0A4BDE', bg: '#EEF1F8' },
  { icon: MapPin, title: 'СДЭК / Почта России', subtitle: 'По всей России', time: '3–7 рабочих дней', price: 'От 290 ₽', color: '#00C2FF', bg: '#E0F7FF' },
  { icon: Clock, title: 'Самовывоз', subtitle: 'г. Москва, ул. Примерная, д. 1', time: 'Ежедневно 9:00–19:00', price: 'Бесплатно', color: '#FF4D00', bg: '#FFF0EB' },
];

const PAYMENT_METHODS = [
  { title: 'Банковская карта онлайн', desc: 'Visa, Mastercard, МИР — безопасная оплата на сайте' },
  { title: 'СБП (Система быстрых платежей)', desc: 'Оплата по QR-коду без комиссии' },
  { title: 'При получении', desc: 'Наличными или картой курьеру/в пункте выдачи' },
  { title: 'Яндекс Пэй / SberPay', desc: 'Быстрая оплата через привязанную карту' },
];

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <h1 className="text-3xl font-extrabold text-[#0D1226]">Доставка и оплата</h1>
          <p className="text-[#8E97B0] mt-2">Доставляем по всей России и странам СНГ</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-12">
        {/* Delivery options */}
        <div>
          <h2 className="text-xl font-extrabold text-[#0D1226] mb-6">Способы доставки</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {DELIVERY_OPTIONS.map(({ icon: Icon, title, subtitle, time, price, color, bg }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#EEF1F8] hover:shadow-[0_4px_20px_rgba(10,75,222,0.08)] transition-shadow">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: bg }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-bold text-[#0D1226]">{title}</h3>
                <p className="text-xs text-[#8E97B0] mt-1">{subtitle}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-[#4A5270]">
                    <Clock size={13} className="text-[#8E97B0]" />{time}
                  </div>
                  <div className="font-bold" style={{ color }}>{price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div>
          <h2 className="text-xl font-extrabold text-[#0D1226] mb-6 flex items-center gap-2">
            <CreditCard size={22} className="text-[#0A4BDE]" /> Способы оплаты
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {PAYMENT_METHODS.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-[#EEF1F8] flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0A4BDE] flex-shrink-0 mt-2" />
                <div>
                  <h3 className="font-semibold text-[#0D1226] text-sm">{title}</h3>
                  <p className="text-xs text-[#8E97B0] mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security note */}
        <div className="bg-[#0A4BDE] rounded-2xl p-6 flex gap-4 items-start text-white">
          <Shield size={22} className="flex-shrink-0 mt-0.5 text-[#00C2FF]" />
          <div>
            <h3 className="font-bold mb-1">Безопасность платежей</h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Все транзакции защищены SSL-шифрованием. Мы не храним данные банковских карт.
              Оплата проходит через сертифицированный платёжный шлюз ЮKassa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
