import HeroInkSteel from "@/components/HeroInkSteel";
import CollectionSection from "@/components/CollectionSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import GallerySection from "@/components/GallerySection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroInkSteel />
      <CollectionSection />
      <SubscriptionSection />
      <GallerySection />
      <FinalCTA />
    </div>
  );
};

export default Index;