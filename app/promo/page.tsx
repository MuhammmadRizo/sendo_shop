"use client";
import { ProductCard } from "@/components/product/ProductCard";
import PromoMarketplace from "@/components/Promo/PromoMarketplace";
import { PROMO_PRODUCTS } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <div className="bg-white border-b border-[#EEF1F8]">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <h2
          className={`text-2xl md:text-3xl font-extrabold leading-tight tracking-tight`}
        >
          Акции
        </h2>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8E97B0] mt-3">
          <a href="/" className="hover:text-[#0A4BDE]">
            Главная
          </a>
          <span>/</span>
          <span className="text-[#0D1226] font-medium">Каталог</span>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto py-8">
          {PROMO_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} variant="promo" />
          ))}
        </div>
      </div>

      <PromoMarketplace />
    </div>
  );
};

export default page;
