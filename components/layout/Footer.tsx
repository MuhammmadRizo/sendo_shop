import Link from 'next/link';
import { Droplets, Phone, MapPin, Mail, Send } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Компания',
    links: [
      { label: 'О компании', href: '/about' },
      { label: 'Наши партнёры', href: '/about#partners' },
      { label: 'Карьера', href: '/about#career' },
      { label: 'Новости', href: '/blog' },
      { label: 'Контакты', href: '/contacts' },
    ],
  },
  {
    title: 'Покупателям',
    links: [
      { label: 'Доставка и оплата', href: '/delivery' },
      { label: 'Гарантия и возврат', href: '/service' },
      { label: 'Как купить', href: '/faq' },
      { label: 'Акции', href: '/promo' },
      { label: 'Программа лояльности', href: '/service#loyalty' },
    ],
  },
  {
    title: 'Каталог',
    links: [
      { label: 'Все товары', href: '/catalog' },
      { label: 'Обратный осмос', href: '/catalog/FiltrOsmosa' },
      { label: 'Корпуса для колб', href: '/catalog/korpus-dlya-kolb' },
      { label: 'Картриджи', href: '/catalog/kartridzhi' },
      { label: 'Акционные товары', href: '/promo' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1226] text-[#8E97B0]">
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#0A4BDE] rounded-xl flex items-center justify-center">
                <Droplets size={18} color="white" />
              </div>
              <span className="text-xl font-extrabold tracking-[-0.03em] text-white">SENDO</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Системы очистки воды методом обратного осмоса. Чистая вода для вашей семьи.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+78005553535" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-[#0A4BDE]" /> +7 (800) 555-35-35
              </a>
              <a href="mailto:hello@sendo.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-[#0A4BDE]" /> hello@sendo.ru
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#0A4BDE] flex-shrink-0 mt-0.5" />
                <span>г. Москва, ул. Примерная, д. 1, офис 301</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Send, label: 'Telegram', href: "https://t.me/rizo_adilov" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-[#0A4BDE] rounded-xl flex items-center justify-center transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {COLUMNS.map(col => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#4A5270]">
          <span>© 2021–2025 SENDO. Все права защищены.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#8E97B0] transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-[#8E97B0] transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
