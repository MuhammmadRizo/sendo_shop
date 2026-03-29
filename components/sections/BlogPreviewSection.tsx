import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function BlogPreviewSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            title="Блог"
            subtitle="Полезные статьи о воде, фильтрах и здоровье"
          />
          <Link href="/blog"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#0A4BDE] hover:text-[#072FA0] transition-colors">
            Все статьи <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`}
              className="group block bg-white border border-[#EEF1F8] rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(10,75,222,0.1)] hover:border-transparent transition-all">
              <div className="aspect-[16/9] overflow-hidden bg-[#F5F7FC]">
                <Image src={post.thumbnail} alt={post.title} width={560} height={315}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#8E97B0]">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                  <span className="flex items-center gap-1 bg-[#EEF1F8] text-[#0A4BDE] font-medium px-2 py-0.5 rounded-full">
                    <Tag size={9} /> {post.category}
                  </span>
                </div>
                <h3 className="font-bold text-[#0D1226] leading-snug group-hover:text-[#0A4BDE] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#8E97B0] leading-relaxed line-clamp-2">{post.excerpt}</p>
                <span className="text-xs font-semibold text-[#0A4BDE] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Читать далее <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
