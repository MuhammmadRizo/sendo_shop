"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, PRODUCTS, PROMO_PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CategoriesSection() {
  const [active, setActive] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>("1");

  const filteredProducts = PRODUCTS.filter(
    (product) => product.categoryId === selectedId,
  );

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 space-y-12">
        {/* Category Cards */}
        <div>
          <SectionTitle
            title="Выберите нужную категорию"
            subtitle="Товары. Широкий ассортимент систем очистки воды."
          />
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedId(category.id)}
                className={`group relative rounded-2xl overflow-hidden aspect-[4/3] block transition-shadow cursor-pointer
                        ${
                          selectedId === category.id
                            ? "shadow-[0_8px_32px_rgba(10,75,222,0.15)]"
                            : "hover:shadow-[0_8px_32px_rgba(10,75,222,0.15)]"
                        }`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  style={{ width: "90%" }}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-bold text-black text-base">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[#000] text-xs">
                      {category.productCount} товаров
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 group-hover:bg-[#0A4BDE] transition-colors">
                      Смотреть <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* {CATEGORIES.map(cat => (
              <Link key={cat.id} href={`/catalog/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] block hover:shadow-[0_8px_32px_rgba(10,75,222,0.15)] transition-shadow"
                >
                <Image src={cat.image} alt={cat.name} style={{"width" : "90%"}} className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-bold text-black text-base">{cat.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[#000] text-xs">{cat.productCount} товаров</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 group-hover:bg-[#0A4BDE] transition-colors">
                      Смотреть <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))} */}
          </div>
        </div>

        {/* Promo products below categories */}
        <div>
          <div className="flex items-end justify-between mb-6">
            <SectionTitle
              title="Товары по акции"
              subtitle="Специальные предложения с ограниченным сроком действия"
            />
            <Link
              href="/promo"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#FF4D00] hover:text-[#CC3D00] transition-colors"
            >
              Все акции <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* {PROMO_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} variant="promo" />
            ))} */}
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="promo" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
