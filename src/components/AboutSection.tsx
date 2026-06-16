import { Heart, Users, Clock, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="presentation" className="section-spacing section-warm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30 pointer-events-none" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal animation="animate-slideInUp">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                  Présentation
                </h2>
                <p className="text-xl font-bold text-primary">Dr. Bérété Alpha</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fondée par le Dr. Bérété Alpha, Priorité Santé est une clinique solidaire
                  dédiée à offrir des soins de santé de qualité pour tous, sans exception.
                  Notre mission est de rendre la santé accessible à chaque personne,
                  indépendamment de sa situation financière.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-sm">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Soins de Qualité</h3>
                    <p className="text-sm text-muted-foreground">
                      Une équipe médicale qualifiée et des équipements modernes pour des soins optimaux.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-sm">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Accessibilité</h3>
                    <p className="text-sm text-muted-foreground">
                      Présents dans les principales villes de Guinée pour être proches de vous.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Image */}
          <ScrollReveal animation="animate-scaleIn" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden h-56 md:h-72 shadow-xl border border-border/50 group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663714842432/WUSrQ9vSUBHuPmivm65SYf/patient-care-african-jb9EuPvwMAzKePKDhMNDX3.webp"
                alt="Équipe médicale Priorité Santé"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-bold">Priorité Santé</p>
                <p className="text-red-200 text-sm font-medium">Ensemble pour votre santé</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
