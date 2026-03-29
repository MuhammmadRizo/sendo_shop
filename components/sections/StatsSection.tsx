'use client';
import { useEffect, useRef, useState } from 'react';

interface Stat { value: number; suffix: string; label: string; description: string; }

const STATS: Stat[] = [
  { value: 20000, suffix: '+', label: 'Счастливых клиентов', description: 'Довольных качеством воды по всей России' },
  { value: 6,     suffix: '',  label: 'Моделей фильтров',    description: 'Для любого типа жилья и бюджета' },
  { value: 3,     suffix: '+', label: 'Года на рынке',        description: 'Стабильный рост и доверие покупателей' },
  { value: 24,    suffix: ' мес', label: 'Гарантия',          description: 'На корпус и все механические части' },
];

function Counter({ value, suffix, running }: { value: number; suffix: string; running: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!running) return;
    const duration = 1800;
    const steps = 60;
    const step = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current >= value) { setDisplay(value); clearInterval(interval); }
      else { setDisplay(Math.floor(current)); }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [running, value]);

  return (
    <span>
      {display.toLocaleString('ru-RU')}{suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRunning(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-20 bg-[#0D1226] relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A4BDE]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C2FF]/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">SENDO в цифрах</h2>
          <p className="text-[#8E97B0] text-sm">Миссия компании — доступная чистая вода в каждом доме</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map(stat => (
            <div key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 hover:border-[#0A4BDE]/40 transition-all">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} running={running} />
              </div>
              <div className="text-[#00C2FF] font-bold text-sm mb-2">{stat.label}</div>
              <div className="text-[#8E97B0] text-xs leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
