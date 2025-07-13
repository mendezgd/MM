import { useSmoothScroll } from "./ui/smooth-scroll";
import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
        buttonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMenuOpen, closeMenu]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen, closeMenu]);

  return (
    <nav
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
            aria-label="Ir al inicio - MM Administración de Consorcios"
          >
            <img
              src="/logo.svg"
              alt="Logo MM Administración"
              className="h-12 w-12"
            />
            <span className="text-xl font-semibold text-gray-800">
              Lic. Mónica Acuña & Acuña Marcelo
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="md:hidden p-2 bg-gray-200 border-gray-800 rounded-md text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicios"
              className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Ir a sección Servicios"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Ir a sección Nosotros"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Ir a sección Contacto"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-48 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="py-4 space-y-4">
            <a
              href="#servicios"
              className="block text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-label="Ir a sección Servicios"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="block text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-label="Ir a sección Nosotros"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="block text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-label="Ir a sección Contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
