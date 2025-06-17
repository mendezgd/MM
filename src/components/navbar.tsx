import { useSmoothScroll } from "./ui/smooth-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
            <span className="text-xl font-semibold text-gray-800">
              Lic. Mónica Acuña & Acuña Marcelo
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 bg-gray-200 border-gray-800 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicios"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-48 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-4 space-y-4">
            <a
              href="#servicios"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={toggleMenu}
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={toggleMenu}
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
