import { User } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const PRACTITIONERS = [
    { name: "Dr. Bérété Alpha", specialty: "Médecine Générale", role: "Directeur Médical" },
    { name: "Dr. Camara Fatoumata", specialty: "Pédiatrie", role: "Spécialiste" },
    { name: "Dr. Diallo Mamadou", specialty: "Urologie", role: "Spécialiste" },
    { name: "Dr. Keita Aminata", specialty: "Maternité & Gynécologie", role: "Spécialiste" },
    { name: "Dr. Sow Ibrahim", specialty: "Chirurgie Générale", role: "Spécialiste" },
    { name: "Dr. Barry Mariama", specialty: "Cardiologie", role: "Spécialiste" },
    { name: "Dr. Sylla Aboubacar", specialty: "Imagerie Médicale", role: "Spécialiste" },
];

export default function PractitionersSection() {
    return (
        <section id="practitioners" className="section-spacing bg-gradient-to-b from-white via-red-50/10 to-red-50/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-red-100/20 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
            <div className="container">
                <div className="flex flex-col gap-12">
                    <ScrollReveal animation="animate-slideInUp">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Nos praticiens
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Une équipe d'experts dévoués et passionnés, mobilisés pour vous offrir les meilleurs soins en Guinée.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PRACTITIONERS.map((practitioner, index) => (
                            <ScrollReveal key={index} animation="animate-slideInUp" delay={index * 0.1}>
                                <div className="bg-white p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-red-600 shadow-sm">
                                        <User className="text-primary w-7 h-7 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                                        {practitioner.name}
                                    </h3>
                                    <p className="text-sm text-primary font-semibold mb-2">
                                        {practitioner.specialty}
                                    </p>
                                    <div className="w-8 h-0.5 bg-red-200 rounded-full mb-2" />
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                        {practitioner.role}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}