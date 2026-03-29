import { ExternalLink } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const MARKETPLACES = [
  { name: 'Яндекс Маркет', color: '#FF0000', bg: '#FFF0F0', label: 'ЯМ', url: 'https://market.yandex.ru' },
  { name: 'OZON',          color: '#005BFF', bg: '#EEF1FF', label: 'OZ', url: 'https://ozon.ru' },
  { name: 'СберМегаМаркет',color: '#21A038', bg: '#EDFAF1', label: 'СМ', url: 'https://megamarket.ru' },
];

export function MarketplaceSection() {
  return (
    <section className="py-14 bg-[#F5F7FC]">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          title="Покупайте удобным способом"
          subtitle="Площадки. Мы представлены на крупнейших маркетплейсах России."
          centered
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {MARKETPLACES.map(({ name, color, bg, label, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border border-[#EEF1F8] flex flex-col items-center gap-3 hover:shadow-[0_6px_24px_rgba(10,75,222,0.12)] hover:border-transparent transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-extrabold" style={{ background: bg, color }}>
                {label}
              </div>
              <span className="font-semibold text-sm text-[#0D1226] text-center">{name}</span>
              <span className="flex items-center gap-1 text-xs text-[#8E97B0] group-hover:text-[#0A4BDE] transition-colors">
                Перейти <ExternalLink size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
