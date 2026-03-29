'use client';
import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/data';
import Link from 'next/link';

const ALL_CATEGORIES = ['Все', 'Обслуживание', 'Установка', 'Выбор модели', 'Гарантия', 'Доставка'];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('Все');
  const [search, setSearch] = useState('');

  const filtered = FAQ_ITEMS.filter(item => {
    const matchCat = activeCategory === 'Все' || item.category === activeCategory;
    const matchSearch = !search || item.question.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      {/* Hero */}
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[860px] mx-auto px-6 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D1226] mb-3">
            Вопросы и ответы
          </h1>
          <p className="text-[#8E97B0] mb-8">Всё, что нужно знать о наших фильтрах и обслуживании</p>
          {/* Search */}
          <div className="flex items-center gap-3 bg-[#F5F7FC] border border-[#EEF1F8] rounded-2xl px-5 py-3 max-w-lg mx-auto">
            <Search size={16} className="text-[#8E97B0] flex-shrink-0" />
            <input
              type="text"
              placeholder="Найти вопрос..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent text-sm w-full outline-none placeholder-[#8E97B0]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[860px] mx-auto px-6 py-10">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ALL_CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-[#0A4BDE] text-white shadow-[0_2px_8px_rgba(10,75,222,0.3)]'
                  : 'bg-white border border-[#EEF1F8] text-[#4A5270] hover:border-[#0A4BDE] hover:text-[#0A4BDE]'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-12 text-[#8E97B0]">
              <p className="font-medium">Ничего не найдено</p>
              <p className="text-sm mt-1">Попробуйте изменить запрос или выберите другую категорию</p>
            </div>
          )}
          {filtered.map(item => {
            const isOpen = open === item.id;
            return (
              <div key={item.id}
                className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${isOpen ? 'border-[#0A4BDE]/30 shadow-[0_4px_16px_rgba(10,75,222,0.1)]' : 'border-[#EEF1F8]'}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className={`font-semibold text-sm leading-snug ${isOpen ? 'text-[#0A4BDE]' : 'text-[#0D1226]'}`}>
                    {item.question}
                  </span>
                  <ChevronDown size={18}
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0A4BDE]' : 'text-[#8E97B0]'}`} />
                </button>
                <div className={`faq-content px-5 ${isOpen ? 'open pb-5' : ''}`}>
                  <p className="text-sm text-[#4A5270] leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#0A4BDE] to-[#3A6EFF] rounded-3xl p-8 text-center text-white">
          <h2 className="text-xl font-extrabold mb-2">Не нашли ответ?</h2>
          <p className="text-white/75 text-sm mb-5">Наши специалисты ответят на любой вопрос</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+78005553535"
              className="bg-white text-[#0A4BDE] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#EEF1F8] transition-colors">
              Позвонить
            </a>
            <Link href="/support"
              className="border border-white/40 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-colors">
              Написать нам
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
