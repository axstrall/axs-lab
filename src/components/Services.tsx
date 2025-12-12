import { Box, Lightbulb, Layers, Package } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Prototipazione Rapida',
    description: 'Trasforma i tuoi concept in prototipi funzionali in tempi record. Ideale per validare design e testare funzionalità.',
    features: ['Iterazioni veloci', 'Vari materiali', 'Geometrie complesse']
  },
  {
    icon: Package,
    title: 'Produzione su Misura',
    description: 'Produzione di pezzi personalizzati e su richiesta. Perfetto per piccole serie e produzioni limitate.',
    features: ['Personalizzazione totale', 'Piccole e medie serie', 'Finiture professionali']
  },
  {
    icon: Layers,
    title: 'Design e Modellazione',
    description: 'Supporto completo dalla progettazione CAD alla realizzazione finale. Ottimizziamo i tuoi modelli per la stampa 3D.',
    features: ['Consulenza tecnica', 'Ottimizzazione modelli', 'File pronti per stampa']
  },
  {
    icon: Box,
    title: 'Ricambi e Componenti',
    description: 'Produzione di pezzi di ricambio difficili da trovare o fuori produzione. Reverse engineering e riproduzione accurata.',
    features: ['Scansione 3D', 'Reverse engineering', 'Ricambi su misura']
  }
];

export default function Services() {
  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluzioni complete di stampa 3D per ogni esigenza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 hover:border-teal-300 group"
            >
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-teal-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
