import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const TEAM_STATS = [
  { icon: Users, value: '20 000+', label: 'Довольных клиентов' },
  { icon: Award, value: '3+', label: 'Года на рынке' },
  { icon: TrendingUp, value: '94%', label: 'NPS — индекс лояльности' },
];

const VALUES = [
  { title: 'Качество без компромиссов', desc: 'Мы используем только сертифицированные компоненты, прошедшие санитарный контроль РФ.' },
  { title: 'Честная цена', desc: 'Прямые поставки с завода позволяют нам предлагать лучшие цены без посредников.' },
  { title: 'Поддержка клиентов', desc: 'Специалисты на связи 6 дней в неделю — от выбора модели до обслуживания через годы.' },
  { title: 'Забота о среде', desc: 'Наши фильтры сокращают использование пластиковых бутылок — до 3 000 шт. в год на семью.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      {/* Hero */}
      <div className="bg-[#0D1226] text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">О компании SENDO</h1>
          <p className="text-[#8E97B0] text-lg max-w-2xl mx-auto leading-relaxed">
            Мы делаем чистую воду доступной каждой российской семье — с 2021 года.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            {TEAM_STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon size={24} className="text-[#00C2FF] mx-auto mb-2" />
                <div className="text-3xl font-extrabold text-white">{value}</div>
                <div className="text-xs text-[#8E97B0] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">
        {/* Mission */}
        <div className="bg-white rounded-3xl p-10 border border-[#EEF1F8]">
          <h2 className="text-2xl font-extrabold text-[#0D1226] mb-4">Наша миссия</h2>
          <p className="text-[#4A5270] leading-relaxed text-base max-w-3xl">
            SENDO основана с убеждением: качественная питьевая вода — это базовая потребность, а не роскошь.
            Мы создаём системы очистки, которые сочетают надёжность мировых технологий с доступной ценой.
            Наши фильтры работают в тысячах домов, квартир и офисов по всей России и СНГ.
          </p>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0D1226] mb-8">Наши ценности</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {VALUES.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#EEF1F8] flex gap-4">
                <CheckCircle size={20} className="text-[#0A4BDE] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0D1226] mb-1">{title}</h3>
                  <p className="text-sm text-[#8E97B0] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#0A4BDE] to-[#3A6EFF] rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Стань частью SENDO-family</h2>
          <p className="text-white/75 mb-6 max-w-md mx-auto">Присоединяйтесь к программе лояльности и получайте скидки, бесплатные картриджи и приоритетную поддержку.</p>
          <Link href="/catalog" className="inline-block bg-white text-[#0A4BDE] font-bold px-8 py-3.5 rounded-xl hover:bg-[#EEF1F8] transition-colors">
            Выбрать фильтр
          </Link>
        </div>
      </div>
    </div>
  );
}
