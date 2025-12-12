import { Award, Users, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '100+', label: 'Progetti Completati' },
  { icon: Users, value: '50+', label: 'Clienti Soddisfatti' },
  { icon: Clock, value: '24/48h', label: 'Tempi di Consegna' },
  { icon: TrendingUp, value: '2+', label: 'Anni di Esperienza' }
];

export default function About() {
  return (
    <section id="chi-siamo" className="py-24 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
              Chi Siamo
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-teal-800">AXS LAB</span> è un laboratorio specializzato in stampa 3D professionale,
                nato dalla passione per l'innovazione tecnologica e il design.
              </p>

              <p>
                Utilizziamo le più avanzate tecnologie di stampa 3D per trasformare idee in oggetti concreti,
                offrendo soluzioni su misura per professionisti, aziende e privati.
              </p>

              <p>
                Dal prototipo alla produzione finale, accompagniamo i nostri clienti in ogni fase del progetto,
                garantendo qualità, precisione e rispetto delle tempistiche.
              </p>

              <p className="font-semibold text-teal-800 pt-4">
                La nostra missione è rendere accessibile la tecnologia di stampa 3D,
                trasformando visioni creative in realtà tangibili.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-300 text-center group"
              >
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-teal-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
