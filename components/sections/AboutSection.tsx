import Link from 'next/link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const POINTS = [
  'Собственное производство с контролем качества на каждом этапе',
  'Сертифицированные компоненты от ведущих мировых производителей',
  'Экологически безопасные материалы, прошедшие санитарный контроль',
  'Техническая поддержка 6 дней в неделю — онлайн и по телефону',
];

export function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F5F7FC]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_32px_rgba(10,75,222,0.1)]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Основана', value: '2021' },
                  { label: 'Городов', value: '45+' },
                  { label: 'Продуктов', value: '3' },
                  { label: 'NPS Score', value: '94%' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#F5F7FC] rounded-2xl p-4 text-center">
                    <div className="text-2xl font-extrabold text-[#0A4BDE]">{value}</div>
                    <div className="text-xs text-[#8E97B0] mt-1 font-medium">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-[#EEF1F8] rounded-2xl p-4 text-center">
                <div className="text-sm font-semibold text-[#4A5270]">
                  🏆 Лучший стартап в категории «Экотехнологии» — 2023
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0A4BDE] text-white rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(10,75,222,0.4)]">
              <div className="text-xs font-medium opacity-80">Клиентов довольны</div>
              <div className="text-xl font-extrabold">20 000+</div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 space-y-6">
            <SectionTitle
              title="О компании SENDO"
              subtitle="Мы делаем чистую воду доступной каждой семье в России и странах СНГ."
            />
            <p className="text-[#4A5270] leading-relaxed text-sm">
              SENDO — российский бренд систем очистки воды, основанный в 2021 году. Мы убеждены, что качество питьевой воды напрямую влияет на здоровье и самочувствие, поэтому сделали нашей миссией создание надёжных и доступных решений для очистки воды.
            </p>
            <ul className="space-y-3">
              {POINTS.map(point => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#4A5270]">
                  <CheckCircle size={16} className="text-[#0A4BDE] flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-[#0A4BDE] font-semibold text-sm hover:gap-3 transition-all">
              Узнать больше о компании <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
