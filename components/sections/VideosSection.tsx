'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Play, X, Clock, ArrowRight } from 'lucide-react';
import { VIDEOS } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import Link from 'next/link';

export function VideosSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-20 bg-[#0D1226] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A4BDE]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            title="Видео с установкой"
            subtitle="Посмотрите как установить наши фильтры"
            light
          />
          <Link href="/videos"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#8E97B0] hover:text-white transition-colors">
            Все видео <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {VIDEOS.map(video => (
            <div key={video.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setActiveVideo(video.youtubeId)}>
              <div className="aspect-video bg-[#1A2340] relative">
                <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1226]/80 via-transparent to-transparent" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#0A4BDE] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(10,75,222,0.5)] group-hover:scale-110 transition-transform">
                    <Play size={22} fill="white" color="white" className="ml-1" />
                  </div>
                </div>
                {/* Duration */}
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                  <Clock size={10} /> {video.duration}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}>
          <button className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-xl p-2 transition-colors">
            <X size={20} />
          </button>
          <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Installation video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
