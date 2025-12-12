export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-950 text-cream-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Logo + descrizione */}
          <div>
            <img
              src="/AXS_LAKE_DARKER_VISIBLE_TREES.png"
              alt="AXS LAB Logo"
              className="h-20 w-auto mb-4"
            />
            <p className="text-cream-200">
              Stampa 3D professionale per trasformare le tue idee in realtà
            </p>
          </div>

          {/* Link rapidi */}
          <div>
            <h3 className="text-xl font-bold text-cream-50 mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servizi" className="hover:text-teal-300 transition-colors duration-300">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-teal-300 transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="hover:text-teal-300 transition-colors duration-300">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-teal-300 transition-colors duration-300">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-xl font-bold text-cream-50 mb-4">Contatti</h3>

            <p className="mb-2">
              <a
                href="mailto:axs.favata1@gmail.com"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                axs.favata1@gmail.com
              </a>
            </p>

            <p>
              <a
                href="https://www.instagram.com/axs_lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Instagram: @axs_lab
              </a>
            </p>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="border-t border-teal-800 pt-8 text-center text-cream-200">
          <p>&copy; {currentYear} AXS LAB. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
