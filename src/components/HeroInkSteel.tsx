import { Button } from "@/components/ui/button";
import heroPagan from "@/assets/hero-pagan-final.jpeg";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'; // Importar el nuevo componente

const HeroInkSteel = () => {
  const { t } = useTranslation();
  const scrollToCollections = () => {
    const element = document.getElementById('colecciones');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToSubscription = () => {
    const element = document.getElementById('suscripcion');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LanguageSwitcher /> {/* Añadir el componente aquí */}
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${heroPagan})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} />

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />

      {/* Content */}
      <div className="container max-w-6xl px-4 relative z-10 mx-0 my-0 pt-[200px] pb-[80px]">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-heading font-black text-gradient animate-fade-in tracking-wider mx-0 px-0 py-0 mt-0 mb-[56px]">
            {t('hero_title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero_subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="default" size="lg" onClick={scrollToCollections} className="text-lg px-10 py-7 h-auto font-heading bg-gradient-to-r from-primary to-cyan-400 hover:shadow-[var(--shadow-neon-strong)] transition-all duration-300 uppercase tracking-wide">
              {t('hero_cta_collections')}
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToSubscription} className="text-lg px-10 py-7 h-auto font-heading border-2 border-primary hover:bg-primary/10 hover:shadow-[var(--shadow-neon)] transition-all duration-300 uppercase tracking-wide">
              {t('hero_cta_forge')}
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroInkSteel;