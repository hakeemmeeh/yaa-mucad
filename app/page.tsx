import HeroSlider from "@/components/home/HeroSlider";
import TrustedBand from "@/components/home/TrustedBand";
import StatsStrip from "@/components/home/StatsStrip";
import CategoryCircles from "@/components/home/CategoryCircles";
import PromoBanners from "@/components/home/PromoBanners";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyKenya from "@/components/home/WhyKenya";
import PromiseBlocks from "@/components/home/PromiseBlocks";
import ProcessSteps from "@/components/home/ProcessSteps";
import CertGrid from "@/components/home/CertGrid";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustedBand />
      <StatsStrip />
      <CategoryCircles />
      <PromoBanners />
      <FeaturedProducts />
      <WhyKenya />
      <PromiseBlocks />
      <ProcessSteps />
      <CertGrid />
      <CtaBanner />
    </>
  );
}
