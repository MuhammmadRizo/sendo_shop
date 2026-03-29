import { HeroSection } from '@/components/sections/HeroSection';
import { PopularProductsSection } from '@/components/sections/PopularProductsSection';
import { AdvantagesSection } from '@/components/sections/AdvantagesSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { VideosSection } from '@/components/sections/VideosSection';
import { ServiceSection } from '@/components/sections/ServiceSection';
import { MarketplaceSection } from '@/components/sections/MarketplaceSection';
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularProductsSection />
      <AdvantagesSection />
      <ReviewsSection />
      <AboutSection />
      <StatsSection />
      <CategoriesSection />
      <FAQSection />
      <VideosSection />
      <ServiceSection />
      <MarketplaceSection />
      <BlogPreviewSection />
    </>
  );
}
