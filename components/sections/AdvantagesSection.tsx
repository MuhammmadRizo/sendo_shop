import Link from 'next/link';
import { Users, Award, ChevronRight } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Award,
    color: '#0A4BDE',
    bg: '#EEF1F8',
    title: 'Партнёрство SENDO-Aqua',
    description: 'Официальный дистрибьютор с прямыми поставками с завода. Никаких посредников — только честная цена.',
    href: '/about',
  },
  {
    icon: Users,
    color: '#00C2FF',
    bg: '#E0F7FF',
    title: 'Программа лояльности SENDO-family',
    description: 'Скидки постоянным клиентам, приоритетная поддержка и бесплатная доставка картриджей при подписке.',
    href: '/service',
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-12 bg-[#F5F7FC]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5">
          {ADVANTAGES.map(({ icon: Icon, color, bg, title, description, href }) => (
            <div key={title} className="bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm hover:shadow-[0_6px_24px_rgba(10,75,222,0.1)] transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                <Icon size={22} style={{ color }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0D1226] text-base mb-1">{title}</h3>
                <p className="text-sm text-[#8E97B0] leading-relaxed">{description}</p>
                <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold mt-3 transition-colors"
                  style={{ color }}>
                  Узнать подробнее <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
