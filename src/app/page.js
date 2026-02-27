import HeroSection from '@/components/home/hero-section';
import BrandStrip from '@/components/home/brand-strip';
import CategoryList from '@/components/category/category-list';
import FeaturedProducts from '@/components/home/featured-products';
import WhyChooseUs from '@/components/home/why-choose-us';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSection from '@/components/home/about-section';
import CTASection from '@/components/home/cta-section';

export const metadata = {
  title: 'LTTN Electric - Chuyên biến tần, HMI, PLC, Cảm biến Nhật Bản',
  description:
    'LTTN Electric chuyên kinh doanh biến tần, HMI, PLC, cảm biến Mitsubishi, Fuji chính hãng. Tư vấn, cung cấp và thi công lắp đặt tại TPHCM.',
  openGraph: {
    title: 'LTTN Electric - Chuyên biến tần, HMI, PLC, Cảm biến Nhật Bản',
    description:
      'Chuyên kinh doanh biến tần, HMI, PLC, cảm biến Mitsubishi, Fuji chính hãng tại TPHCM.',
  },
};

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <BrandStrip />
      <CategoryList />
      <FeaturedProducts />
      <WhyChooseUs />
      <FeaturedProjects />
      <AboutSection />
      <CTASection />
    </main>
  );
}
