import Link from 'next/link';
import { Wrench, Droplets, Stethoscope, ChevronRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const SERVICES = [
  { icon: Wrench, color: '#0A4BDE', bg: '#EEF1F8', title: 'Замена картриджей', description: 'Выезд специалиста на дом или самостоятельная замена по видеоинструкции. Доступны все виды картриджей.' },
  { icon: Droplets, color: '#00C2FF', bg: '#E0F7FF', title: 'Промывка состава', description: 'Профессиональная промывка и дезинфекция системы специальными составами. Восстанавливает производительность.' },
  { icon: Stethoscope, color: '#FF4D00', bg: '#FFF0EB', title: 'Диагностика и ремонт', description: 'Полная диагностика системы, замена изношенных компонентов. Гарантия на все виды ремонтных работ.' },
];

export function ServiceSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            title="Обслуживание продукции"
            subtitle="Профессиональный сервис на весь срок эксплуатации фильтра"
          />
          <Link href="/service"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#0A4BDE] hover:text-[#072FA0] transition-colors">
            Все услуги <ChevronRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, color, bg, title, description }) => (
            <div key={title} className="border border-[#EEF1F8] rounded-2xl p-6 hover:shadow-[0_6px_24px_rgba(10,75,222,0.1)] hover:border-transparent transition-all group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: bg }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="font-bold text-[#0D1226] mb-2">{title}</h3>
              <p className="text-sm text-[#8E97B0] leading-relaxed mb-4">{description}</p>
              <Link href="/service" className="text-sm font-semibold transition-colors" style={{ color }}>
                Подробнее →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
