import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[860px] mx-auto px-6 py-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#8E97B0] hover:text-[#0A4BDE] transition-colors mb-4">
            <ArrowLeft size={14} /> Все статьи
          </Link>
          <div className="flex items-center gap-3 text-xs text-[#8E97B0] mb-4">
            <span className="flex items-center gap-1"><Calendar size={10} />{post.date}</span>
            <span className="flex items-center gap-1 bg-[#EEF1F8] text-[#0A4BDE] font-medium px-2 py-0.5 rounded-full">
              <Tag size={9} />{post.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0D1226] leading-tight">{post.title}</h1>
          <p className="text-[#8E97B0] mt-3 leading-relaxed">{post.excerpt}</p>
        </div>
      </div>

      <div className="max-w-[860px] mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl overflow-hidden border border-[#EEF1F8] mb-8">
          <Image src={post.thumbnail} alt={post.title} width={860} height={480} className="w-full object-cover aspect-video" />
          <div className="p-8 prose prose-sm max-w-none text-[#4A5270]">
            <p className="text-base leading-relaxed">
              Этот материал поможет вам разобраться в теме и принять правильное решение при выборе системы очистки воды.
              Мы собрали все ключевые моменты, которые необходимо учитывать.
            </p>
            <h2 className="text-lg font-bold text-[#0D1226] mt-6 mb-3">Введение</h2>
            <p className="leading-relaxed">
              Качество питьевой воды — один из важнейших факторов, влияющих на здоровье всей семьи.
              По данным Роспотребнадзора, более 40% россиян используют воду из источников, не отвечающих всем санитарным нормам.
              Именно поэтому выбор правильной системы очистки — это инвестиция в ваше здоровье.
            </p>
            <h2 className="text-lg font-bold text-[#0D1226] mt-6 mb-3">Основные критерии</h2>
            <p className="leading-relaxed">
              При выборе фильтра важно учитывать: тип установки (под мойку или настольный), количество ступеней очистки,
              производительность системы в литрах в сутки, а также стоимость обслуживания — замены картриджей.
            </p>
            <p className="leading-relaxed mt-3">
              Системы обратного осмоса SENDO Aqua обеспечивают до 7 ступеней очистки, что позволяет удалить 99,9%
              загрязнений, включая тяжёлые металлы, хлор, бактерии и вирусы.
            </p>
          </div>
        </div>

        {/* Related */}
        {others.length > 0 && (
          <div>
            <h2 className="text-xl font-extrabold text-[#0D1226] mb-5">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {others.map(p => (
                <Link key={p.id} href={`/blog/${p.slug}`}
                  className="group bg-white border border-[#EEF1F8] rounded-2xl overflow-hidden hover:shadow-[0_4px_20px_rgba(10,75,222,0.1)] hover:border-transparent transition-all">
                  <Image src={p.thumbnail} alt={p.title} width={400} height={220} className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-[#0D1226] group-hover:text-[#0A4BDE] transition-colors line-clamp-2">{p.title}</h3>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A4BDE] mt-2">
                      Читать <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
