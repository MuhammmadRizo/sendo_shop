'use client';
import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import Link from 'next/link';

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(FAQ_ITEMS[0].id);

  return (
    <section className="py-16 md:py-20 bg-[#F5F7FC]">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          title="Общие вопросы и ответы"
          subtitle="Ответы на самые частые вопросы наших покупателей"
        />

        <div className="mt-10 grid lg:grid-cols-[1fr_340px] gap-8">

          {/* Accordion */}
          <div className="space-y-3">
            {FAQ_ITEMS.map(item => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-[#0A4BDE]/30 shadow-[0_4px_16px_rgba(10,75,222,0.1)]' : 'border-[#EEF1F8] hover:border-[#D8DCE8]'}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className={`font-semibold text-sm leading-snug ${isOpen ? 'text-[#0A4BDE]' : 'text-[#0D1226]'}`}>
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0A4BDE]' : 'text-[#8E97B0]'}`}
                    />
                  </button>
                  <div className={`faq-content px-5 ${isOpen ? 'open pb-5' : ''}`}>
                    <p className="text-sm text-[#4A5270] leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              );
            })}

            <Link href="/faq"
              className="inline-block text-sm font-semibold text-[#0A4BDE] hover:underline mt-2">
              Все вопросы и ответы →
            </Link>
          </div>

          {/* Sidebar cards */}
          <div className="space-y-4">
            {/* AI helper */}
            <div className="bg-gradient-to-br from-[#0A4BDE] to-[#3A6EFF] rounded-2xl p-6 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-bold text-base mb-2">Онлайн-консультант</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                Наш специалист поможет выбрать подходящую модель и ответит на вопросы по установке.
              </p>
              <button className="w-full bg-white text-[#0A4BDE] font-bold text-sm py-3 rounded-xl hover:bg-[#EEF1F8] transition-colors">
                Начать чат
              </button>
            </div>

            {/* Phone card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EEF1F8] shadow-sm">
              <div className="w-10 h-10 bg-[#EEF1F8] rounded-xl flex items-center justify-center mb-4">
                <Phone size={18} className="text-[#0A4BDE]" />
              </div>
              <h3 className="font-bold text-[#0D1226] text-base mb-1">Нужна консультация?</h3>
              <p className="text-[#8E97B0] text-sm mb-4">Звоните с 9:00 до 21:00 по московскому времени</p>
              <a href="tel:+78005553535"
                className="block w-full border border-[#0A4BDE] text-[#0A4BDE] font-bold text-sm py-3 rounded-xl text-center hover:bg-[#EEF1F8] transition-colors">
                +7 (800) 555-35-35
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
