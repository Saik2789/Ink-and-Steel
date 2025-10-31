import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Download, Eye, Zap } from "lucide-react";
import collectionMain from "@/assets/collection-main.jpg";
import collectionThumb1 from "@/assets/collection-thumb-1.jpg";
import collectionThumb2 from "@/assets/collection-thumb-2.jpg";
import collectionThumb3 from "@/assets/collection-thumb-3.jpg";
import polygonQr from "@/assets/polygon_qr.jpg";
import bscQr from "@/assets/bsc_qr.jpg";

// Monedas Personalizadas
import coinUsdt from "@/assets/coin_usdt.jpeg";
import coinBch from "@/assets/coin_bch.jpeg";
import coinLtc from "@/assets/coin_ltc.jpeg";
import coinSol from "@/assets/coin_sol.jpeg";
import coinAda from "@/assets/coin_ada.jpeg";
import coinXrp from "@/assets/coin_xrp.jpeg";
import coinUsdc from "@/assets/coin_usdc.jpeg";
import coinDoge from "@/assets/coin_doge.jpeg";
import coinShib from "@/assets/coin_shib.jpeg";

// Iconos Oficiales
import iconUsdt from "@/assets/icon_usdt.png";
import iconBch from "@/assets/icon_bch.png";
import iconLtc from "@/assets/icon_ltc.png";
import iconSol from "@/assets/icon_sol.png";
import iconAda from "@/assets/icon_ada.png";
import iconXrp from "@/assets/icon_xrp.png";
import iconUsdc from "@/assets/icon_usdc.png";
import iconDoge from "@/assets/icon_doge.png";
import iconShib from "@/assets/icon_shib.png";
import { useTranslation } from 'react-i18next';

const CollectionSection = () => {
  const { t } = useTranslation();
  
  const cryptoOptions = [
    { id: 'usdt-polygon', name: 'USDT (Polygon)', icon: iconUsdt, coin: coinUsdt, network: 'Polygon', address: '0x695353289c863184c44933145e3da4a8c2b64025', qr: polygonQr, amount: '15.00 USDT' },
    { id: 'usdt-bsc', name: 'USDT (BSC)', icon: iconUsdt, coin: coinUsdt, network: 'BNB Smart Chain', address: '0x695353289c863184c44933145e3da4a8c2b64025', qr: bscQr, amount: '15.00 USDT' },
    // Las demas criptomonedas se iran añadiendo aqui una a una
    { id: 'solana', name: 'Solana (SOL)', icon: iconSol, coin: coinSol, network: 'Solana', address: 'SOLANA_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=SOL_QR', amount: 'EQUIVALENT_SOL_HERE' },
    { id: 'cardano', name: 'Cardano (ADA)', icon: iconAda, coin: coinAda, network: 'Cardano', address: 'CARDANO_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=ADA_QR', amount: 'EQUIVALENT_ADA_HERE' },
    { id: 'xrp', name: 'XRP (Native)', icon: iconXrp, coin: coinXrp, network: 'XRP', address: 'XRP_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=XRP_QR', amount: 'EQUIVALENT_XRP_HERE' },
    { id: 'xrp-solana', name: 'XRP (Solana)', icon: iconXrp, coin: coinXrp, network: 'Solana', address: 'XRP_SOLANA_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=XRP_SOLANA_QR', amount: 'EQUIVALENT_XRP_HERE' },
    { id: 'usdc-polygon', name: 'USDC (Polygon)', icon: iconUsdc, coin: coinUsdc, network: 'Polygon', address: 'USDC_POLYGON_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=USDC_POLYGON_QR', amount: '15.00 USDC' },
    { id: 'usdc-bsc', name: 'USDC (BSC)', icon: iconUsdc, coin: coinUsdc, network: 'BNB Smart Chain', address: 'USDC_BSC_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=USDC_BSC_QR', amount: '15.00 USDC' },
    { id: 'bch-native', name: 'Bitcoin Cash (Native)', icon: iconBch, coin: coinBch, network: 'Bitcoin Cash', address: 'BCH_NATIVE_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=BCH_NATIVE_QR', amount: 'EQUIVALENT_BCH_HERE' },
    { id: 'bch-bsc', name: 'Bitcoin Cash (BSC)', icon: iconBch, coin: coinBch, network: 'BNB Smart Chain', address: 'BCH_BSC_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=BCH_BSC_QR', amount: 'EQUIVALENT_BCH_HERE' },
    { id: 'ltc', name: 'Litecoin (LTC)', icon: iconLtc, coin: coinLtc, network: 'Litecoin', address: 'LTC_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=LTC_QR', amount: 'EQUIVALENT_LTC_HERE' },
    { id: 'doge-native', name: 'Dogecoin (Native)', icon: iconDoge, coin: coinDoge, network: 'Dogecoin', address: 'DOGE_NATIVE_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=DOGE_NATIVE_QR', amount: 'EQUIVALENT_DOGE_HERE' },
    { id: 'doge-bsc', name: 'Dogecoin (BSC)', icon: iconDoge, coin: coinDoge, network: 'BNB Smart Chain', address: 'DOGE_BSC_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=DOGE_BSC_QR', amount: 'EQUIVALENT_DOGE_HERE' },
    { id: 'shib-bsc', name: 'Shiba Inu (BSC)', icon: iconShib, coin: coinShib, network: 'BNB Smart Chain', address: 'SHIB_BSC_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=SHIB_BSC_QR', amount: 'EQUIVALENT_SHIB_HERE' },
    { id: 'shib-solana', name: 'Shiba Inu (Solana)', icon: iconShib, coin: coinShib, network: 'Solana', address: 'SHIB_SOLANA_ADDRESS_HERE', qr: 'https://via.placeholder.com/150?text=SHIB_SOLANA_QR', amount: 'EQUIVALENT_SHIB_HERE' },
  ];

  return <section id="colecciones" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-gradient mb-4">{t('collection_title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image Carousel Preview */}
          <div className="space-y-4">
            <Card className="p-2 bg-card border-2 border-primary/30 shadow-[var(--shadow-neon)]">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src={collectionMain}
                  alt={t('collection_pack_title')}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 gap-2">
              <Card className="aspect-square bg-muted/50 border border-primary/20 overflow-hidden">
                <img src={collectionThumb1} alt="Preview 1" className="w-full h-full object-cover" />
              </Card>
              <Card className="aspect-square bg-muted/50 border border-primary/20 overflow-hidden">
                <img src={collectionThumb2} alt="Preview 2" className="w-full h-full object-cover" />
              </Card>
              <Card className="aspect-square bg-muted/50 border border-primary/20 overflow-hidden">
                <img src={collectionThumb3} alt="Preview 3" className="w-full h-full object-cover" />
              </Card>
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-heading font-bold mb-4 text-neon">
                {t('collection_pack_title')}
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t('collection_pack_desc')}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[{
              icon: Zap,
              text: t('collection_benefit1')
            }, {
              icon: Eye,
              text: t('collection_benefit2')
            }, {
              icon: Check,
              text: t('collection_benefit3')
            }, {
              icon: Download,
              text: t('collection_benefit4')
            }].map((benefit, index) => <div key={index} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-primary/20">
                  <benefit.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit.text}</span>
                </div>)}
            </div>

            {/* Crypto Payment Section */}
            <div className="mt-8 pt-8 border-t border-primary/20 space-y-6">
              <h4 className="text-3xl font-heading font-bold text-center text-neon">{t('crypto_title')}</h4>
              
              {/* Grid de Opciones de Pago */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cryptoOptions.map((crypto) => (
                  <Accordion type="single" collapsible key={crypto.id} className="w-full">
                    <AccordionItem value={crypto.id} className="bg-secondary/20 rounded-lg border-2 border-transparent hover:border-primary transition-all duration-300 shadow-[var(--shadow-neon-hover)]">
                      <AccordionTrigger className="p-2 font-bold text-lg hover:no-underline flex flex-col items-center justify-center gap-2">
                        <img src={crypto.coin} alt={crypto.name} className="w-20 h-20 object-contain" />
                        <div className="flex items-center gap-2">
                          <img src={crypto.icon} alt={`${crypto.name} icon`} className="w-6 h-6" />
                          <span>{crypto.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 pt-0">
                        <ol className="list-decimal list-inside text-left space-y-2 text-muted-foreground mb-4">
                          <li>{t('crypto_instruction_1')}</li>
                          <li>{t('crypto_instruction_2', { network: crypto.network })}</li>
                          <li>{t('crypto_instruction_3', { currency: crypto.name.split(' ')[0] })}</li>
                          <li>{t('crypto_instruction_4', { amount: crypto.amount })}</li>
                        </ol>
                        <div className="mt-2 flex flex-col items-center gap-4 p-3 bg-background rounded-md border border-border">
                          <img src={crypto.qr} alt={`${crypto.name} QR Code`} className="w-32 h-32 bg-white p-1 rounded-md"/>
                          <div className="text-center">
                            <p className="text-cyan-400 break-all text-sm">{crypto.address}</p>
                            <Button size="sm" className="mt-2" onClick={() => navigator.clipboard.writeText(crypto.address)}>{t('crypto_copy_address')}</Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>

            {/* Confirmation Form */}
            <div className="text-left pt-6 border-t border-primary/20">
              <p className="font-bold text-lg">{t('crypto_step2_title')}</p>
              <p className="text-muted-foreground">{t('crypto_step2_desc')}</p>
              <form action="https://formspree.io/f/mjkpowwj" method="POST" className="mt-4 space-y-4">
                <input type="email" name="email" placeholder={t('crypto_email_placeholder')} required className="w-full p-2 rounded-md bg-background border border-border" />
                <input type="email" name="confirm_email" placeholder={t('crypto_confirm_email_placeholder')} required className="w-full p-2 rounded-md bg-background border border-border" />
                <input type="text" name="txid" placeholder={t('crypto_txid_placeholder')} required className="w-full p-2 rounded-md bg-background border border-border" />
                <Button type="submit" size="lg" className="w-full text-xl py-6 h-auto font-heading bg-gradient-to-r from-accent to-red-600 hover:shadow-[var(--shadow-red)] transition-all duration-300 uppercase tracking-wide">
                  {t('crypto_submit_button')}
                </Button>
              </form>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              {t('crypto_footer_note')}
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default CollectionSection;