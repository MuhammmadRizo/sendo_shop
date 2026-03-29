"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      <div className="bg-white border-b border-[#EEF1F8]">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <h1 className="text-3xl font-extrabold text-[#0D1226]">Блог</h1>
          <p className="text-[#8E97B0] mt-2">
            Полезные статьи о воде, фильтрах и здоровье
          </p>
          <nav className="flex items-center gap-2 text-xs text-[#8E97B0] mt-3">
            <Link href="/" className="hover:text-[#0A4BDE]">
              Главная
            </Link>
            <span>/</span>
            <span className="text-[#0D1226] font-medium">Блог</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <h1 className="font-bold text-[#3A3A3A] text-2xl mb-6">
          О нас говорят.{" "}
          <span className="text-[#C4C4C4]">
            Прочитайте статьи СМИ о работе нашей компании.
          </span>
        </h1>
        <Carousel className="w-full height-[10px]">
          <CarouselContent>
            {BLOG_POSTS.map((post) => (
              <CarouselItem key={post.id} className="mb-12">
                <div className="group flex block bg-[#1489FF] overflow-hidden hover:shadow-[0_8px_32px_rgba(10,75,222,0.1)] hover:border-transparent transition-all">
                  <div>
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={560}
                      height={315}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <div className=" text-[#fff] pt-16 pt-16 pr-8 pl-8">
                      <h2 className="font-bold text-2xl mb-6">{post.title}</h2>
                      <p>{post.excerpt}</p>
                    </div>
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group flex block mb-10 mt-6 bg-[#1489FF] overflow-hidden pr-8 pl-8 text-[#fff] hover:shadow-[0_8px_32px_rgba(10,75,222,0.1)] hover:border-transparent transition-all"
                    >
                      Подробнее &#10095;
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white border border-[#EEF1F8] rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(10,75,222,0.1)] hover:border-transparent transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[#F5F7FC]">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={560}
                  height={315}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#8E97B0]">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 bg-[#EEF1F8] text-[#0A4BDE] font-medium px-2 py-0.5 rounded-full">
                    <Tag size={9} />
                    {post.category}
                  </span>
                </div>
                <h2 className="font-bold text-[#0D1226] leading-snug group-hover:text-[#0A4BDE] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-[#8E97B0] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A4BDE] group-hover:gap-2 transition-all">
                  Читать далее <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
