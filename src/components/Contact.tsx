import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contatti" className="py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/AXS_LAKE_DARKER_VISIBLE_TREES.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Contattaci
          </h2>
          <p className="text-xl text-cream-100 max-w-2xl mx-auto">
            Hai un progetto in mente? Parliamone insieme
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <Mail className="h-12 w-12 text-teal-300 mb-4" />
                <h3 className="text-xl font-semibold text-cream-50 mb-2">Email</h3>
                <a
                  href="mailto:axs.favata1@gmail.com"
                  className="text-teal-300 hover:text-teal-200 text-lg transition-colors duration-300 break-all"
                >
                  axs.favata1@gmail.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <MessageSquare className="h-12 w-12 text-teal-300 mb-4" />
                <h3 className="text-xl font-semibold text-cream-50 mb-2">Richiedi un Preventivo</h3>
                <p className="text-cream-100">
                  Inviaci una mail con i dettagli del tuo progetto
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:axs.favata1@gmail.com?subject=Richiesta Informazioni - Stampa 3D"
                className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Send className="h-6 w-6" />
                Invia una Email
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 text-center">
              <p className="text-cream-100 text-sm">
                Rispondiamo a tutte le richieste entro 24 ore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
