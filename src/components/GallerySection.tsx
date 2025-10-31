import { Card } from "@/components/ui/card";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

import { useTranslation } from 'react-i18next';



const GallerySection = () => {

  const { t } = useTranslation();

  return (

    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">

      <div className="container mx-auto max-w-7xl">

        {/* Section Title */}

        <div className="text-center mb-16">

          <h2 className="text-5xl md:text-7xl font-heading font-bold text-gradient mb-4">

            {t('gallery_title')}

          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">

            {t('gallery_subtitle')}

          </p>

        </div>



        {/* Gallery Grid */}

        <h3 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-neon text-primary">{t('gallery_coming_soon')}</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((imgSrc, i) => (

            <Card

              key={i}

              className="aspect-[3/4] bg-muted/30 border-2 border-primary/20 hover:border-primary/50 card-premium overflow-hidden group"

            >

              <img src={imgSrc} alt={`Gallery Image ${i + 1}`} className="w-full h-full object-cover" />

            </Card>

          ))}

        </div>



        {/* Optional: Testimonials Section */}

        <div className="mt-20">

          <h3 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-neon">

            {t('testimonials_title')}

          </h3>



          <div className="grid md:grid-cols-3 gap-6">

            {[{

                text: "El nivel de detalle es increíble. Vale cada centavo.",

                author: "Cliente Satisfecho"

              },

              {

                text: "La mejor inversión que he hecho en contenido digital premium.",

                author: "Coleccionista VIP"

              },

              {

                text: "Contenido de altísima calidad. No hay nada comparable.",

                author: "Miembro de La Forja"

              }

            ].map((testimonial, i) => (

              <Card key={i} className="p-6 bg-secondary/30 border border-primary/20">

                <p className="text-foreground/90 italic mb-4">"{testimonial.text}"</p>

                <p className="text-primary font-semibold">- {testimonial.author}</p>

              </Card>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

};

export default GallerySection;
