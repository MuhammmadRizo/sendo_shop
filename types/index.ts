import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  mainImage: StaticImport;
  rating: number;
  reviewsCount: number;
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock';
  isFeatured?: boolean;
  isPromo?: boolean;
  badge?: 'sale' | 'new' | 'bestseller';
  filtrationStages?: number;
  installationType?: string;
  categoryId: string;
}

export interface Review {
  id: string;
  authorName: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string | StaticImport;
  date: string;
  category: string;
}


export interface Category {
  id: string;
  name: string;
  slug: string;
  image: StaticImport;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: StaticImport;
  youtubeId: string;
  duration: string;
}
