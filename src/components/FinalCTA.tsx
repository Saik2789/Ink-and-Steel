import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Music } from "lucide-react";
import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
  const { t } = useTranslation();
  const scrollToCollections = () => {
    const element = document.getElementById('colecciones');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSubscription = () => {
    const element = document.getElementById('suscripcion');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gradient">
            {t('final_cta_title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('final_cta_subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToCollections}
              className="text-lg px-10 py-7 h-auto font-heading bg-gradient-to-r from-accent to-red-600 hover:shadow-[var(--shadow-red)] transition-all duration-300 uppercase tracking-wide"
            >
              {t('final_cta_button_collections')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToSubscription}
              className="text-lg px-10 py-7 h-auto font-heading border-2 border-primary hover:bg-primary/10 hover:shadow-[var(--shadow-neon)] transition-all duration-300 uppercase tracking-wide"
            >
              {t('final_cta_button_forge')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="pt-12 border-t border-border mt-12">
            <p className="text-muted-foreground mb-6">{t('final_cta_socials_title')}</p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:shadow-[var(--shadow-neon)]"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:shadow-[var(--shadow-neon)]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:shadow-[var(--shadow-neon)]"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>{t('final_cta_footer_copyright')}</p>
            <p className="mt-2">{t('final_cta_footer_disclaimer')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;