"use client";

import React from "react";
import { toast } from "sonner";
import { SectionTitle } from "../ui/SectionTitle";
import ya from "../../assets/yam.png";
import oz from "../../assets/oz.png";
import Image from "next/image";

const PromoMarketplace = () => {

  const copyPromo = (code: string) => {
  navigator.clipboard.writeText(code);

  toast.success("Промокод успешно скопирован в буфер обмена");
};

  const marketplaces = [
    {
      name: "Яндекс Маркет",
      image: ya,
      promo: "15GH9FL",
      spantext: "Скидка 15% ",
      desc: "на всю продукцию SENDO",
      btn: "Перейти",
      btn1: "Скопировать",
      imageStyle: { width: "235px", height: "120px", objectFit: "contain" },
    },
    {
      name: "OZON",
      image: oz,
      promo: "LK3AHB",
      spantext: "Скидка 5% ",
      desc: "на всю продукцию SENDO",
      btn: "Перейти",
      btn1: "Скопировать",
      imageStyle: { width: "120px", height: "120px", objectFit: "contain" },
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-4 md:py-10 relative overflow-hidden">
      <SectionTitle title="Акции на других площадках" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-7">
        {marketplaces.map(
          ({ image, name, promo, desc, btn, btn1, imageStyle, spantext }) => (
            <div
              key={name}
              className="group pb-6 bg-white rounded-2xl border border-[#EEF1F8] flex flex-col items-center gap-3 hover:shadow-[0_6px_24px_rgba(10,75,222,0.12)] hover:border-transparent transition-all"
            >
              <Image src={image} alt={name} style={imageStyle} />

              <h1 className="font-bold text-lg text-[#2D2D2D] -mt-6 text-6xl">
                {promo}
              </h1>

              <p className="text-sm text-[#000] font-normal pb-3">
                <span className="text-[#1489ff] font-semibold">
                  {spantext}
                </span>{" "}
                {desc}
              </p>

              <div className="flex gap-3">
                <button className="bg-[#005BFF] text-white py-4 px-20 rounded-lg hover:bg-[#0048CC] transition-colors">
                  {btn}
                </button>

                <button
                  onClick={() => copyPromo(promo)}
                  className="border border-[#3A3A3A] text-[#0D1226] py-4 px-20 rounded-lg hover:bg-[#DDE1EB] transition-colors"
                >
                  {btn1}
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PromoMarketplace;