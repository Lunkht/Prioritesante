import { Calendar, Phone, ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function PracticalSection() {
    return (
        <section className="section-spacing section-light relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-50 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-40 pointer-events-none" />
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="w-36 h-36 md:w-48 md:h-48 rounded-[2rem] overflow-hidden bg-gradient-to-br from-red-50 to-red-100 border-2 border-primary/10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <ImageIcon className="w-20 h-20 md:w-24 md:h-24 text-primary/40" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            <span className="text-primary">Pratique</span>
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3 bg-white p-6 rounded-xl shadow-sm border border-border/40">
                                <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                                    <Calendar className="text-primary w-5 h-5" />
                                    Prendre rendez-vous
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Pour prendre rendez-vous en ligne, c'est simple et rapide cliquez sur le lien ci-dessous et laissez-vous guider.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 bg-white p-6 rounded-xl shadow-sm border border-border/40">
                                <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                                    <Phone className="text-primary w-5 h-5" />
                                    Téléphone
                                </h3>
                                <p className="text-primary font-bold text-2xl">+224 621-21-41-76</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <div className="bg-gradient-to-br from-primary to-red-700 p-8 md:p-10 rounded-[2rem] flex flex-col items-center text-center gap-6 hover:-translate-y-1 transition-all duration-500 w-full shadow-xl hover:shadow-2xl">
                            <div className="space-y-5">
                                <button className="w-full py-4 px-8 text-lg font-bold bg-white text-primary rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-3">
                                    Prendre mon rendez-vous
                                </button>
                                <button className="flex items-center justify-center gap-2 text-white/90 hover:text-white font-semibold w-full">
                                    <a
                                        href="#clinics"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#clinics')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-white/90 hover:text-white"
                                    >
                                        Voir plus <ArrowRight className="w-4 h-4 inline" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}