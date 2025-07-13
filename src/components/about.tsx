import { Carousel } from "./carousel";

export function About() {
  const aboutImages = [
    "/10.webp",
    "/11.webp",
    "/12.webp",
    "/14.webp",
    "/15.webp",
    "/16.webp",
    "/17.webp",
    "/18.webp",
  ];

  return (
    <section id="nosotros" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestro Equipo Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 15 años de experiencia en administración de consorcios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mónica Acuña */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Mónica Noemí Acuña
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Formación Académica
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>MBA con orientación en proyectos digitales</li>
                  <li>Licenciada en Administración</li>
                  <li>Ingeniero Industrial (en curso)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Certificaciones
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    Administradora de consorcios - Consejo Profesional Cs Ec
                  </li>
                  <li>
                    Matriculada en el consejo de ciencias económicas (LA 048
                    Folio 139)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Marcelo Acuña */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Marcelo Martin Acuña
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Certificaciones
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    Administrador de Consorcios - Gobierno de la Ciudad de Bs As
                  </li>
                  <li>Inspector</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Contacto</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Tel: 1163590171</li>
                  <li>Email: estudi.ayp@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Segundo Carousel - Galería de Trabajos */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestros Trabajos y Proyectos
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce algunos de nuestros proyectos más destacados en
              administración de consorcios
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel images={aboutImages} autoPlay={true} interval={5000} />
          </div>
        </div>
      </div>
    </section>
  );
}
