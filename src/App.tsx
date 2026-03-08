import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Wind, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Video, 
  Headphones, 
  ChevronDown, 
  ArrowRight,
  Leaf,
  Sun,
  CloudRain,
  Anchor
} from 'lucide-react';

// --- Components ---

const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-rose-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-serif text-xl md:text-2xl text-sage-800 group-hover:text-sage-600 transition-colors">
          {question}
        </span>
        <ChevronDown className={`w-6 h-6 text-rose-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sage-700 leading-relaxed font-sans">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 font-sans text-sage-900 selection:bg-rose-200 selection:text-sage-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-rose-50/80 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl font-semibold text-sage-700 tracking-tight">
            Audrey Huault - <span className="text-rose-400">Programme RESET</span>
          </div>
          <a 
            href="#pack" 
            className="hidden md:block bg-sage-600 text-white px-6 py-2 rounded-full font-medium hover:bg-sage-700 transition-all hover:shadow-lg hover:shadow-sage-200"
          >
            Découvrir le programme
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-sage-100/40 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-sage-800 mb-6">
              Allégez votre passé pour retrouver le <span className="italic text-rose-400">sens</span> de votre vie.
            </h1>
            <p className="text-xl text-sage-700 mb-10 leading-relaxed max-w-lg">
              Le programme RESET : Une approche douce et profonde par l'hypnose pour poser enfin ce sac à dos émotionnel qui vous freine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pack" 
                className="bg-sage-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:bg-sage-700 transition-all shadow-xl shadow-sage-200 group"
              >
                Commencer ma transformation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Sérénité et nature" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-rose-50">
                <Sparkles className="w-8 h-8 text-rose-400 mb-2" />
                <p className="text-sm font-medium text-sage-800 italic">"La douceur est la plus grande des forces."</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section Problèmes */}
      <Section className="bg-white">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-4">Ce sac à dos que vous portez...</h2>
            <p className="text-sage-600 max-w-2xl mx-auto text-lg">Il est temps de regarder ce qui pèse et de s'autoriser à le poser.</p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: CloudRain, title: "Poids émotionnel", desc: "Des souvenirs ou des émotions qui reviennent sans cesse vous envahir." },
            { icon: Anchor, title: "Blocages invisibles", desc: "Cette sensation de faire du surplace malgré tous vos efforts conscients." },
            { icon: Wind, title: "Fatigue mentale", desc: "Un mental qui tourne en boucle, épuisé par le stress et l'anxiété." },
            { icon: ShieldCheck, title: "Manque de sens", desc: "L'impression d'avoir perdu le fil de ce qui vous anime vraiment." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-100 hover:bg-rose-50 transition-colors h-full">
                <item.icon className="w-10 h-10 text-rose-400 mb-6" />
                <h3 className="font-serif text-2xl text-sage-800 mb-3">{item.title}</h3>
                <p className="text-sage-600 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Transition Empathique */}
      <section className="bg-sage-600 py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <FadeIn>
          <div className="max-w-3xl mx-auto relative z-10">
            <Heart className="w-12 h-12 text-rose-200 mx-auto mb-8 animate-pulse" />
            <p className="font-serif text-3xl md:text-4xl text-rose-50 leading-relaxed italic">
              "Vous n'êtes pas brisée. Vous avez simplement besoin d'un espace de sécurité pour laisser votre esprit se réinitialiser."
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Solution Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1499209974431-9ddd3e6f9405?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hypnose et calme" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-0 right-0 bg-rose-100 p-4 rounded-full shadow-lg">
                <Leaf className="w-6 h-6 text-sage-600" />
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">Le Programme RESET</h2>
            <p className="text-lg text-sage-700 mb-6 leading-relaxed">
              L'hypnose n'est pas une perte de contrôle, c'est au contraire une reconnexion profonde avec vos propres ressources. 
            </p>
            <p className="text-lg text-sage-700 mb-8 leading-relaxed">
              Le programme RESET a été conçu pour vous accompagner pas à pas, avec une douceur infinie, vers la libération de vos vieux schémas. C'est un voyage intérieur sécurisé où chaque séance est une pierre posée sur le chemin de votre renouveau.
            </p>
            <ul className="space-y-4">
              {["Approche personnalisée", "Sécurité émotionnelle garantie", "Résultats durables et profonds"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sage-800 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-rose-400" /> {text}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* Bénéfices */}
      <Section className="bg-sage-100/30">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-4">Ce qui vous attend après...</h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Légèreté", icon: Wind, color: "bg-blue-50" },
            { title: "Liberté", icon: Sparkles, color: "bg-rose-50" },
            { title: "Joie", icon: Sun, color: "bg-amber-50" },
            { title: "Sens", icon: Leaf, color: "bg-emerald-50" }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-center border border-sage-200/50 group">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-serif text-2xl text-sage-800">{item.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Détails du Pack */}
      <Section id="pack">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-rose-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-20 bg-rose-50/30">
              <h2 className="font-serif text-4xl text-sage-800 mb-8">Le contenu de votre accompagnement</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Video className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-800 mb-1">12 Séances en Visio</h4>
                    <p className="text-sage-600">Un suivi hebdomadaire personnalisé de 1h pour travailler en profondeur.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Headphones className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-800 mb-1">2 Audios MP3 Personnalisés</h4>
                    <p className="text-sage-600">Des séances d'auto-hypnose créées spécifiquement pour vos besoins.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <MessageCircle className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-800 mb-1">Suivi WhatsApp Illimité</h4>
                    <p className="text-sage-600">Je reste à vos côtés entre les séances pour répondre à vos doutes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-20 flex flex-col justify-center items-center text-center">
              <div className="mb-8">
                <span className="text-rose-400 font-semibold tracking-widest uppercase text-sm">Investissement pour soi</span>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-serif text-sage-800">1247€</span>
                </div>
                <p className="text-sage-500 mt-2 italic">Possibilité de paiement en 3 fois</p>
              </div>
              <button className="w-full bg-sage-600 text-white px-8 py-5 rounded-full text-xl font-bold hover:bg-sage-700 transition-all shadow-xl shadow-sage-200 mb-6">
                Je réserve mon appel découverte
              </button>
              <p className="text-sm text-sage-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Satisfait ou remboursé sous 14 jours
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* À propos */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Audrey - Hypnothérapeute" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-sage-600 text-white p-8 rounded-3xl shadow-xl max-w-[240px]">
                <p className="font-serif text-xl mb-2">Audrey Huault</p>
                <p className="text-sm opacity-80 leading-relaxed">Psychopraticienne spécialisée en hypnose ericksonienne, NMO issue de l'EMDR et énergétique chinoise.</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-8">Ma mission : votre sécurité.</h2>
            <div className="space-y-6 text-lg text-sage-700 leading-relaxed">
              <p>
                Depuis plus de 10 ans, j'accompagne des femmes et des hommes à retrouver leur boussole intérieure. Mon approche repose sur un pilier fondamental : la <strong>sécurité émotionnelle</strong>.
              </p>
              <p>
                On ne peut pas se libérer si l'on ne se sent pas en totale confiance. C'est pourquoi le programme RESET n'est pas une méthode "brutale" de changement, mais une éclosion douce, respectueuse de votre rythme et de votre histoire.
              </p>
              <p>
                Je suis là pour tenir la lampe pendant que vous explorez votre propre chemin.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-rose-50/50">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-12 text-center">Questions fréquentes</h2>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-rose-100">
              <FAQItem 
                question="L'hypnose en visio est-elle aussi efficace ?" 
                answer="Absolument. L'hypnose repose sur la voix et la relation de confiance. Être dans le confort de votre propre foyer permet souvent une relaxation encore plus profonde et authentique." 
              />
              <FAQItem 
                question="Vais-je perdre le contrôle ?" 
                answer="C'est le mythe le plus courant ! En réalité, l'hypnose est un état de conscience augmentée. Vous entendez tout, vous pouvez parler, et vous ne ferez jamais rien qui aille à l'encontre de vos valeurs." 
              />
              <FAQItem 
                question="Et si je ne suis pas réceptive ?" 
                answer="Tout le monde est réceptif à l'hypnose, car c'est un état naturel que nous traversons tous plusieurs fois par jour (quand on est 'dans la lune'). Mon rôle est simplement de vous aider à retrouver cet état volontairement." 
              />
              <FAQItem 
                question="Comment se passe le paiement ?" 
                answer="Le paiement est sécurisé par Stripe. Vous pouvez régler en une fois ou choisir l'option en 3 mensualités pour plus de souplesse." 
              />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className="bg-sage-900 text-rose-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-serif text-3xl font-semibold mb-6">Audrey Huault - <span className="text-rose-400">Programme RESET</span></div>
            <p className="opacity-60 leading-relaxed">
              Accompagnement par l'hypnose pour une vie plus légère et pleine de sens.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-rose-400">Navigation</h4>
            <ul className="space-y-4 opacity-80">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Accueil</a></li>
              <li><a href="#pack" className="hover:text-rose-400 transition-colors">Le Programme</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-rose-400">Légal</h4>
            <ul className="space-y-4 opacity-80">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 text-center opacity-40 text-sm">
          &copy; {new Date().getFullYear()} Audrey Huault Hypnothérapie. Tous droits réservés.
        </div>
      </footer>

    </div>
  );
}
