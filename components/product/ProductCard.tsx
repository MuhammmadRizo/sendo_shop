"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Zap } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/formatters";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/components/ui/Toast";

const BADGE_STYLES: Record<string, string> = {
  sale: "bg-[#FF4D00] text-white",
  new: "bg-[#00C2FF] text-white",
  bestseller: "bg-[#F5B800] text-[#0D1226]",
};
const BADGE_LABELS: Record<string, string> = {
  sale: "АКЦИЯ",
  new: "НОВИНКА",
  bestseller: "ХИТ",
};

interface Props {
  product: Product;
  variant?: "default" | "promo" | "compact";
}

export function ProductCard({ product, variant = "default" }: Props) {
  const { addItem, openCart } = useCartStore();
  const { showToast } = useToast();

  function handleAddToCart() {
    addItem(product);
    showToast(`${product.name} добавлен в корзину`);
    openCart();
  }

  const outOfStock = product.stockStatus === "out_of_stock";

  return (
    <div className="group relative bg-white rounded-2xl border border-[#EEF1F8] hover:border-[#0A4BDE]/30 hover:shadow-[0_8px_32px_rgba(10,75,222,0.12)] transition-all duration-300 flex flex-col overflow-hidden">
      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute top-3 left-3 z-10 text-[10px] font-extrabold px-2 py-1 rounded-md tracking-wider ${BADGE_STYLES[product.badge]}`}
        >
          {BADGE_LABELS[product.badge]}
        </span>
      )}

      {/* Wishlist */}
      <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#FF4D00] text-[#8E97B0]">
        <Heart size={15} />
      </button>

      {/* Image */}
      <Link
        href={`/product/${product.slug}`}
        className="block aspect-square bg-[#F5F7FC] overflow-hidden"
      >
        <Image
          src={product.mainImage}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={11}
                className={
                  i <= Math.round(product.rating)
                    ? "fill-[#F5B800] text-[#F5B800]"
                    : "fill-[#D8DCE8] text-[#D8DCE8]"
                }
              />
            ))}
          </div>
          <span className="text-xs text-[#8E97B0] font-medium">
            {product.rating} ({product.reviewsCount})
          </span>
        </div>

        {/* Name */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-bold text-[#0D1226] text-sm leading-snug hover:text-[#0A4BDE] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-[#8E97B0] leading-relaxed line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-lg font-extrabold text-[#0D1226]">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <>
              <span className="text-sm text-[#8E97B0] line-through">
                {formatPrice(product.oldPrice)}
              </span>
              {product.discountPercent && (
                <span className="text-xs font-bold text-[#FF4D00]">
                  −{product.discountPercent}%
                </span>
              )}
            </>
          )}
        </div>

        {/* Stock */}
        {product.stockStatus === "low_stock" && (
          <div className="flex items-center gap-1.5 text-[#FF4D00] text-xs font-semibold">
            <Zap size={11} /> Осталось мало
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleAddToCart}
            disabled={outOfStock}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A4BDE] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-[#072FA0] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_2px_8px_rgba(10,75,222,0.3)]"
          >
            <ShoppingCart size={13} />
            {outOfStock ? "Нет в наличии" : "В корзину"}
          </button>
          <Link
            href={`/product/${product.slug}`}
            className="px-3 py-2.5 border border-[#D8DCE8] text-xs font-semibold text-[#4A5270] rounded-xl hover:border-[#0A4BDE] hover:text-[#0A4BDE] transition-colors"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
