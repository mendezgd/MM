export function Navbar() {
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
              Consorcio Pro
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-600 hover:text-gray-900">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-600 hover:text-gray-900">
              Nosotros
            </a>
            <a
              href="#testimonios"
              className="text-gray-600 hover:text-gray-900"
            >
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-gray-900">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
