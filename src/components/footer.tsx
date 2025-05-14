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
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a
              href="/"
              className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
              <span className="text-xl text-gray-100 font-semibold">
                Lic. Mónica Acuña & Acuña Marcelo
              </span>
            </a>
            <p className="text-gray-300">
              Administración profesional de consorcios con más de 15 años de
              experiencia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Gestión Financiera
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Comunicación Efectiva
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Metodología de Trabajo
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Servicios Adicionales
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Cumplimiento Normativo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="https://wa.me/5491163590171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Tel: 1163590171
                </a>
              </li>
              <li>
                <a
                  href="mailto:estudi.ayp@gmail.com"
                  className="text-red-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Email: estudi.ayp@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
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
