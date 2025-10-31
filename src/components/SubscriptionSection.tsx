import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Users, Vote, Video } from "lucide-react";
import { useTranslation } from 'react-i18next';

const SubscriptionSection = () => {
  const { t } = useTranslation();
  return (
    <section id="suscripcion" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-gradient">
            {t('subscription_title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('subscription_subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 bg-card border-2 border-primary/30 card-premium">
            <Crown className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3 text-neon">{t('subscription_benefit1_title')}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {t('subscription_benefit1_desc')}
            </p>
          </Card>

          <Card className="p-8 bg-card border-2 border-accent/30 card-premium">
            <Video className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3 text-accent">{t('subscription_benefit2_title')}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {t('subscription_benefit2_desc')}
            </p>
          </Card>

          <Card className="p-8 bg-card border-2 border-primary/30 card-premium">
            <Vote className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3 text-neon">{t('subscription_benefit3_title')}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {t('subscription_benefit3_desc')}
            </p>
          </Card>

          <Card className="p-8 bg-card border-2 border-accent/30 card-premium">
            <Users className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3 text-accent">{t('subscription_benefit4_title')}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {t('subscription_benefit4_desc')}
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-2xl px-12 py-8 h-auto font-heading bg-gradient-to-r from-primary to-cyan-400 hover:shadow-[var(--shadow-neon-strong)] transition-all duration-300 uppercase tracking-wide"
          >
            {t('subscription_cta_button')}
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            {t('subscription_footer_note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;