"use client";
import { SectionTitle } from "@/components/ui/SectionTitle";
import React, { useState } from "react";
import {
  Phone,
  Send,
  Heart,
  FileCheck,
  MessageCircleQuestion,
  NotebookPen,
} from "lucide-react";
import { FAQSection } from "@/components/sections/FAQSection";
import Image from "next/image";
import { Play, X, Clock, ArrowRight } from "lucide-react";
import { VIDEOS } from "@/lib/data";

const SupportPage = () => {
  const supportMaterials = [
    {
      icon: Phone,
      title: "Телефон",
      subtitle:
        "Наш оператор ответит на ваши вопросы, поможет и проконсультирует вас.",
      url: "tel:+7 777-702-77-77",
      urlName: "+7 777-702-77-77",
      bg: "#116ecc",
      color: "#fff",
    },
    {
      icon: Send,
      title: "Telegram-бот",
      subtitle:
        "Задайте вопрос, на который наш бот ответит вам и  если что, свяжет с оператором. ",
      url: "https://t.me/rizo_adilov",
      urlName: "Перейти",
      bg: "#116ecc",
      color: "#fff",
    },
    {
      icon: Heart,
      title: "Линия горячей поддержки",
      subtitle:
        "Запросы от участников программы лояльности SENDO-FAMILY обрабатываются вне очереди.",
      url: "tel:+7 777-702-77-77",
      urlName: "+7 777-702-77-77",
      bg: "#116ecc",
      color: "#fff",
    },
  ];

  const actionMaterials = [
    {
      icon: FileCheck,
      title: "Заказать установку",
      subtitle:
        "Заполните форму и мастер установит наш фильтр, проконсультирует по любым вопросам и даст рекомендации по использованию.",
      url: "#",
      color: "#116ecc",
      btn: "Заполнить форму",
    },
    {
      icon: MessageCircleQuestion,
      title: "Подбор фильтра",
      subtitle:
        "Заполните форму и наш консультант перезвонит вам, предложит подходящий вам фильтр и предложит скидку на первый заказ.",
      url: "#",
      color: "#116ecc",
      btn: "Заполнить форму",
    },
    {
      icon: NotebookPen,
      title: "Регистрация продукта",
      subtitle:
        "Зарегистрируйте свой продукт заполнив форму и получив доступ к программе лояльности, скидкам и другим бонусам.",
      url: "#",
      color: "#116ecc",
      btn: "Зарегестрировать продукт",
    },
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-8">
      <div style={{ width: "650px" }}>
        <SectionTitle
          title="Поддержка"
          subtitle="Главное преимущество нашей компании - оперативная ответ и помощь клиентам. Ознакомьтесь с полезными материалами или свяжитесь с нами через формы связи"
        />
      </div>
      {/* Breadcrumb */}
      <nav className="pt-3 flex items-center gap-2 text-xs text-[#8E97B0] mt-3">
        <a href="/" className="hover:text-[#0A4BDE]">
          Главная
        </a>
        <span>/</span>
        <span className="text-[#0D1226] font-medium">Поддержка</span>
      </nav>

      <div className="pt-11">
        <div>
          <h2 className="text-xl font-extrabold text-[#0D1226] mb-6">
            Свяжитесь с нами.{" "}
            <span className="text-[#C4C4C4]">
              Выберите наиболее удобный способ для связи.
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {supportMaterials.map(
            ({ icon: Icon, title, subtitle, url, urlName, bg, color }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-[#EEF1F8] hover:shadow-[0_4px_20px_rgba(10,75,222,0.08)] transition-shadow"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                  style={{ background: bg }}
                >
                  <Icon size={20} style={{ color: color }} />
                </div>
                <h3 className="font-bold text-[#0D1226]">{title}</h3>
                <p className="text-xs text-[#8E97B0] mt-1">{subtitle}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-[#4A5270]"></div>
                  <div className="font-bold">
                    <a href={url} className="text-[#0A4BDE] hover:underline">
                      {urlName}
                    </a>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="mt-20 mb-20">
        <div>
          <h2 className="text-xl font-extrabold text-[#0D1226] mb-6">
            Действия
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {actionMaterials.map(
            ({ icon: Icon, title, subtitle, url, btn, color }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-[#EEF1F8] hover:shadow-[0_4px_20px_rgba(10,75,222,0.08)] transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Icon
                    size={150}
                    style={{ color: color, margin: "-40px 0 0 0", top: "0" }}
                  />
                  <div>
                    <h3 className="font-bold text-[#0D1226]">{title}</h3>
                    <p className="text-xs text-[#8E97B0] mt-1">{subtitle}</p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-[#4A5270]"></div>
                      <div className="font-bold">
                        <button className="text-white bg-[#1489FF] py-4 px-7 ">
                          {btn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <FAQSection />
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A4BDE]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 relative">
          <div className="flex  items-end justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#0D1226]">
              Видео с установкой.{" "}
              <span className="text-[#8E97B0]">
                Посмотрите видео-инструкцию, записанную нашим мастером.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setActiveVideo(video.youtubeId)}
              >
                <div className="aspect-video bg-[#1A2340] relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1226]/80 via-transparent to-transparent" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#0A4BDE] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(10,75,222,0.5)] group-hover:scale-110 transition-transform">
                      <Play
                        size={22}
                        fill="white"
                        color="white"
                        className="ml-1"
                      />
                    </div>
                  </div>
                  {/* Duration */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                    <Clock size={10} /> {video.duration}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-xl p-2 transition-colors">
              <X size={20} />
            </button>
            <div
              className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
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
    </div>
  );
};

export default SupportPage;
