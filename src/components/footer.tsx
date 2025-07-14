import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white" role="contentinfo" aria-label="Pie de página">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a
              href="/"
              className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
              aria-label="Ir al inicio - MM Administración de Consorcios"
            >
              <img
                src="/logo.svg"
                alt="Logo MM Administración"
                className="h-12 w-12 bg-gray-500 rounded-lg"
              />
              <span className="text-xl text-gray-100 font-semibold">
                 Administración Acuña - Lic. Mónica Acuña & Acuña Marcelo
              </span>
            </a>
            <p className="text-gray-300">
              Administración profesional de consorcios con más de 15 años de
              experiencia.
            </p>
          </div>

          <nav aria-labelledby="footer-services">
            <h3 id="footer-services" className="font-semibold mb-4 text-gray-100">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                  aria-label="Ver servicios de gestión financiera"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors" aria-hidden="true"></span>
                  Gestión Financiera
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                  aria-label="Ver servicios de comunicación efectiva"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors" aria-hidden="true"></span>
                  Comunicación Efectiva
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                  aria-label="Ver metodología de trabajo"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors" aria-hidden="true"></span>
                  Metodología de Trabajo
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                  aria-label="Ver servicios adicionales"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors" aria-hidden="true"></span>
                  Servicios Adicionales
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                  aria-label="Ver servicios de cumplimiento normativo"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors" aria-hidden="true"></span>
                  Cumplimiento Normativo
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold mb-4 text-gray-100">Contacto</h3>
            <ul className="space-y-3 text-gray-300" aria-label="Información de contacto">
              <li>
                <a
                  href="https://wa.me/5491163590171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                  aria-label="Contactar por WhatsApp al número 1163590171"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Tel: 1163590171
                </a>
              </li>
              <li>
                <a
                  href="mailto:estudi.ayp@gmail.com"
                  className="text-red-200 hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1"
                  aria-label="Enviar correo electrónico a estudi.ayp@gmail.com"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Email: estudi.ayp@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-100">Síguenos</h3>
            <div className="flex space-x-4" aria-label="Redes sociales">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded p-1"
                aria-label="Seguir en Facebook"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded p-1"
                aria-label="Seguir en Twitter"
              >
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded p-1"
                aria-label="Seguir en Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded p-1"
                aria-label="Seguir en LinkedIn"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Lic. Mónica Acuña & Acuña Marcelo.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
