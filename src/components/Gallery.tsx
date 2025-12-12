import { Box } from 'lucide-react';

const projects = [
  // {
  //   title: 'Prototipi Meccanici',
  //   category: 'Ingegneria',
  //   description: 'Componenti meccanici ad alta precisione'
  // },
  {
    title: 'Design Personalizzato',
    category: 'Arte & Design',
    description: 'Oggetti unici e sculture moderne'
  },
  // {
  //   title: 'Modelli Architettonici',
  //   category: 'Architettura',
  //   description: 'Plastici dettagliati per presentazioni'
  // },
  {
    title: 'Gadget Tecnologici',
    category: 'Tecnologia',
    description: 'Custodie e accessori personalizzati'
  },
  {
    title: 'Ricambi Auto',
    category: 'Automotive',
    description: 'Componenti di ricambio su misura'
  },
  // {
  //   title: 'Modelli Medici',
  //   category: 'Medicale',
  //   description: 'Modelli anatomici e protesi'
  // }
];

export default function Gallery() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Realizzazioni
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Progetti che dimostrano la versatilità della stampa 3D
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square flex items-center justify-center p-8">
                <Box className="h-24 w-24 text-teal-200 group-hover:rotate-12 transition-transform duration-300" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-teal-300 text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Questi sono solo alcuni esempi. Ogni progetto è unico e personalizzato.
          </p>
          <a
            href="#contatti"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Inizia il tuo progetto
          </a>
        </div>
      </div>
    </section>
  );
}
