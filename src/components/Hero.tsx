import { Printer, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950" />

  

      {/* watermark logo gigante (sotto) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage: "url('/AXS_LAKE_DARKER_VISIBLE_TREES.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 78%',
          backgroundSize: '1200px auto',
        }}
      />

      {/* contenuto */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <img
            src="/AXS_LAKE_DARKER_VISIBLE_TREES.png"
            alt="AXS LAB Logo"
            className="h-32 w-auto mx-auto mb-6 drop-shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-cream-50 mb-6 tracking-tight">
          Trasforma le tue <span className="text-teal-300">idee</span> in realtà
        </h1>

        <p className="text-xl md:text-2xl text-cream-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stampa 3D professionale per prototipazione, produzione e design personalizzato
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#servizi"
            className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Scopri i servizi
          </a>
          <a
            href="#contatti"
            className="bg-cream-50 hover:bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contattaci
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <Printer className="h-12 w-12 text-teal-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-cream-50 mb-2">Alta Precisione</h3>
            <p className="text-cream-100">Tecnologie avanzate per risultati impeccabili</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <Zap className="h-12 w-12 text-teal-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-cream-50 mb-2">Consegna Rapida</h3>
            <p className="text-cream-100">Tempi di produzione ottimizzati</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <Shield className="h-12 w-12 text-teal-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-cream-50 mb-2">Qualità Garantita</h3>
            <p className="text-cream-100">Materiali certificati e controllo accurato</p>
          </div>
        </div>
      </div>
    </section>
  );
}
