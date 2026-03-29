'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactsPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <h1 className="text-3xl font-extrabold text-[#0D1226]">Контакты</h1>
          <p className="text-[#8E97B0] mt-2">Мы всегда рады помочь вам</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_420px] gap-8">

          {/* Info */}
          <div className="space-y-5">
            {[
              { icon: Phone, title: 'Телефон', value: '+7 (800) 555-35-35', sub: 'Бесплатно по России', href: 'tel:+78005553535', color: '#0A4BDE', bg: '#EEF1F8' },
              { icon: Mail, title: 'Email', value: 'hello@sendo.ru', sub: 'Отвечаем в течение 2 часов', href: 'mailto:hello@sendo.ru', color: '#00C2FF', bg: '#E0F7FF' },
              { icon: MapPin, title: 'Адрес', value: 'г. Москва, ул. Примерная, д. 1, офис 301', sub: 'Самовывоз ежедневно 9:00–19:00', href: '#', color: '#FF4D00', bg: '#FFF0EB' },
              { icon: Clock, title: 'Часы работы', value: 'Пн–Сб: 9:00–21:00', sub: 'Воскресенье — выходной', href: '#', color: '#F5B800', bg: '#FFFBE0' },
            ].map(({ icon: Icon, title, value, sub, href, color, bg }) => (
              <a key={title} href={href}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-[#EEF1F8] hover:shadow-[0_4px_20px_rgba(10,75,222,0.08)] transition-shadow">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-[#8E97B0] font-medium">{title}</div>
                  <div className="font-bold text-[#0D1226] mt-0.5">{value}</div>
                  <div className="text-xs text-[#8E97B0] mt-0.5">{sub}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-[#EEF1F8] p-6">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#EEF1F8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-[#0A4BDE]" />
                </div>
                <h3 className="font-bold text-[#0D1226] text-lg mb-2">Сообщение отправлено!</h3>
                <p className="text-[#8E97B0] text-sm">Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-[#0D1226] text-lg mb-5">Написать нам</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: 'name', label: 'Имя', type: 'text', placeholder: 'Ваше имя' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'example@email.com' },
                    { id: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label className="text-xs font-semibold text-[#4A5270] block mb-1.5">{label}</label>
                      <input
                        type={type} placeholder={placeholder}
                        value={form[id as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                        className="w-full border border-[#D8DCE8] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A4BDE] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs font-semibold text-[#4A5270] block mb-1.5">Сообщение</label>
                    <textarea
                      rows={4} placeholder="Ваш вопрос или сообщение..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full border border-[#D8DCE8] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A4BDE] transition-colors resize-none"
                    />
                  </div>
                  <button type="submit"
                    className="w-full bg-[#0A4BDE] text-white font-bold py-3.5 rounded-xl hover:bg-[#072FA0] transition-colors shadow-[0_4px_16px_rgba(10,75,222,0.3)]">
                    Отправить
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
