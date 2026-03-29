'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';
import { REVIEWS } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const max = Math.max(0, REVIEWS.length - visible);

  function prev() { setCurrent(c => Math.max(0, c - 1)); }
  function next() { setCurrent(c => Math.min(max, c + 1)); }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <SectionTitle
              title="Отзывы клиентов"
              subtitle="Прочитайте, что говорят о нас покупатели"
            />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={prev} disabled={current === 0}
              className="w-9 h-9 rounded-xl border border-[#D8DCE8] flex items-center justify-center hover:border-[#0A4BDE] hover:text-[#0A4BDE] disabled:opacity-30 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} disabled={current >= max}
              className="w-9 h-9 rounded-xl border border-[#D8DCE8] flex items-center justify-center hover:border-[#0A4BDE] hover:text-[#0A4BDE] disabled:opacity-30 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Desktop: sliding window */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {REVIEWS.slice(current, current + visible).map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Mobile: single */}
        <div className="md:hidden space-y-4">
          {REVIEWS.slice(0, 2).map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 bg-[#F5F7FC] rounded-2xl p-6">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#0D1226]">4.9</div>
            <div className="flex justify-center mt-1 gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#F5B800] text-[#F5B800]" />)}
            </div>
            <div className="text-xs text-[#8E97B0] mt-1">Средняя оценка</div>
          </div>
          <div className="w-px h-12 bg-[#D8DCE8] hidden sm:block" />
          <div className="flex-1 grid grid-cols-5 gap-2">
            {[5,4,3,2,1].map((stars, idx) => {
              const widths = ['80%','12%','5%','2%','1%'];
              return (
                <div key={stars} className="col-span-5 flex items-center gap-2 text-xs">
                  <span className="text-[#8E97B0] w-3">{stars}</span>
                  <Star size={10} className="fill-[#F5B800] text-[#F5B800]" />
                  <div className="flex-1 h-1.5 bg-[#D8DCE8] rounded-full overflow-hidden">
                    <div className="h-full bg-[#F5B800] rounded-full" style={{ width: widths[idx] }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center sm:text-right">
            <div className="text-2xl font-extrabold text-[#0D1226]">838</div>
            <div className="text-xs text-[#8E97B0]">всего отзывов</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="bg-white border border-[#EEF1F8] rounded-2xl p-5 flex flex-col gap-4 hover:shadow-[0_4px_20px_rgba(10,75,222,0.08)] transition-shadow">
      <Quote size={20} className="text-[#0A4BDE]/20" />
      <p className="text-sm text-[#4A5270] leading-relaxed flex-1">{review.text}</p>
      <div className="border-t border-[#EEF1F8] pt-4 flex items-center justify-between">
        <div>
          <div className="font-bold text-sm text-[#0D1226]">{review.authorName}</div>
          <div className="flex items-center gap-1 text-xs text-[#8E97B0] mt-0.5">
            <MapPin size={10} /> {review.location}
          </div>
        </div>
        <div className="text-right">
          <div className="flex gap-0.5 justify-end">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={11} className={i <= review.rating ? 'fill-[#F5B800] text-[#F5B800]' : 'fill-[#D8DCE8] text-[#D8DCE8]'} />
            ))}
          </div>
          <div className="text-xs text-[#8E97B0] mt-1">{review.date}</div>
        </div>
      </div>
    </div>
  );
}
