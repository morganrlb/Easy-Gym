import { LiquidGlassButton } from './ui/liquid-glass-button';
import { BookOpen, Trophy, Users, Star, ArrowRight, FileText, Clock } from 'lucide-react';

export default function CourseSection() {
  return (
    <section className="max-w-6xl mx-auto mb-20 px-4">
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl overflow-hidden border border-neutral-700 relative">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>
        
        <div className="relative p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Contenuto principale */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full px-4 py-2 mb-6">
                <Trophy size={16} className="text-[var(--primary)]" />
                <span className="text-[var(--primary)] text-sm font-medium">Corso Professionale</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-4 text-white">
                Corso Completo di <span className="text-[var(--primary)]">Bodybuilding</span>
              </h2>
              
              <p className="text-neutral-300 mb-6 text-lg">
                Il corso più completo in italiano: 10 moduli specializzati, oltre 25 ore di contenuti 
                e tutto quello che serve per diventare un esperto.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <FileText size={16} />
                  <span>10 Moduli</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <Clock size={16} />
                  <span>1500+ min</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <Star size={16} className="text-yellow-500" />
                  <span>Certificato incluso</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <LiquidGlassButton href="/corso-bodybuilding" variant="primary" >
                  Scopri il Corso
                  <ArrowRight size={16} />
                </LiquidGlassButton>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 line-through">149€</span>
                  <span className="text-[var(--primary)] text-xl font-bold">79€</span>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="bg-black/30 rounded-2xl p-6 border border-neutral-800">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="text-[var(--primary)]" size={20} />
                  <h3 className="text-white font-semibold">Formazione Completa</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Dalla biomeccanica alla psicologia, ogni aspetto del bodybuilding professionale
                </p>
              </div>
              
              <div className="bg-black/30 rounded-2xl p-6 border border-neutral-800">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-[var(--primary)]" size={20} />
                  <h3 className="text-white font-semibold">Supporto Telegram</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Accesso al gruppo privato per domande e supporto continuo
                </p>
              </div>
              
              <div className="bg-black/30 rounded-2xl p-6 border border-neutral-800">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="text-[var(--primary)]" size={20} />
                  <h3 className="text-white font-semibold">Certificato Professionale</h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Certificato di completamento e materiali sempre aggiornati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
