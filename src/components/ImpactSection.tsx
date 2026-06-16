import { useState, useRef, useEffect } from 'react';
import { Heart, Stethoscope, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

/**
 * Impact Section - Minimalisme Médical Moderne
 * Design Philosophy:
 * - Compteurs animés pour impact visuel
 * - Design épuré sur fond blanc/gris clair
 * - Trois métriques clés : Patients, Urgences, Solidarité
 * - Animation au scroll pour engagement
 */

interface Counter {
  id: string;
  value: number;
  label: string;
  suffix: string;
}

function AnimatedCounter({ value, label, suffix }: Counter) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const increment = value / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 p-8 bg-white rounded-2xl border border-border"
    >
      <div className="flex items-baseline gap-1">
        <span className="counter-value">{displayValue.toLocaleString('fr-FR')}</span>
        <span className="text-2xl font-bold text-primary">{suffix}</span>
      </div>
      <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
      <p className="text-sm md:text-base text-muted-foreground text-center font-medium">{label}</p>
    </div>
  );
}

export default function ImpactSection() {
  const counters: Counter[] = [
    {
      id: 'patients',
      value: 10000,
      label: 'Patients soignés',
      suffix: '+',
    },
    {
      id: 'emergency',
      value: 24,
      label: 'Urgences',
      suffix: '/7',
    },
    {
      id: 'solidarity',
      value: 100,
      label: 'Solidaire',
      suffix: '%',
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-red-50/10 via-white to-red-50/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="container">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <ScrollReveal animation="animate-slideInUp">
            <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Notre impact en chiffres
              </h2>
              <p className="text-lg text-muted-foreground">
                Depuis notre création, nous avons mis l'accès aux soins au cœur de notre mission.
              </p>
            </div>
          </ScrollReveal>

          {/* Counters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {counters.map((counter, index) => (
              <ScrollReveal key={counter.id} animation="animate-slideInUp" delay={index * 0.1}>
                <div>
                  <AnimatedCounter {...counter} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional info with Icons — fond noir */}
          <div className="w-full bg-foreground rounded-3xl px-6 md:px-12 py-12 -mx-6 md:-mx-12">
            <div className="w-full h-px bg-white/20 mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <ScrollReveal animation="animate-slideInUp" delay={0.1}>
                <div className="flex flex-col gap-3 text-center items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Heart className="w-7 h-7 text-red-400" />
                  </div>
                  <p className="text-sm font-semibold text-white">ENGAGEMENT</p>
                  <p className="text-white/60">Soins gratuits ou à faible coût pour les plus démunis</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="animate-slideInUp" delay={0.2}>
                <div className="flex flex-col gap-3 text-center items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Stethoscope className="w-7 h-7 text-red-400" />
                  </div>
                  <p className="text-sm font-semibold text-white">QUALITÉ</p>
                  <p className="text-white/60">Équipe médicale qualifiée et équipements modernes</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="animate-slideInUp" delay={0.3}>
                <div className="flex flex-col gap-3 text-center items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-red-400" />
                  </div>
                  <p className="text-sm font-semibold text-white">ACCESSIBILITÉ</p>
                  <p className="text-white/60">Disponible 24h/24, 7j/7 pour les urgences</p>
                </div>
              </ScrollReveal>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
