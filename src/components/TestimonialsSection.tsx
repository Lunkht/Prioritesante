import { Quote, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aïssatou Diallo',
    role: 'Patient',
    content: "Grâce à Priorité Santé, j'ai pu recevoir des soins de qualité pour ma famille. Le personnel est dévoué et les installations sont modernes. Une véritable bouée de sauvetage pour notre communauté.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Mamadou Bah',
    role: 'Patient',
    content: "Le service d'urgence a sauvé la vie de mon père. L'équipe médicale a réagi rapidement avec professionnalisme. Je recommande vivement cette clinique à tous.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Fatoumata Sylla',
    role: 'Patiente',
    content: "La maternité de Priorité Santé est exceptionnelle. J'ai été suivie tout au long de ma grossesse avec beaucoup d'attention et de bienveillance. Merci à toute l'équipe.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-spacing bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="container">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <ScrollReveal animation="animate-slideInUp">
            <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ce que disent nos patients
              </h2>
              <p className="text-lg text-muted-foreground">
                La satisfaction de nos patients est notre plus belle récompense.
              </p>
            </div>
          </ScrollReveal>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} animation="animate-slideInUp" delay={index * 0.15}>
                <div className="bg-white border border-border rounded-2xl p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-red-50">
                    <Quote className="w-14 h-14" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 text-sm md:text-base italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
