import { Button } from "./ui/button";

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestro Equipo Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 15 años de experiencia en administración de consorcios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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

        {/* Experiencia */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Experiencia Profesional
          </h3>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">
                Jefe de Administración y Finanzas
              </h4>
              <p className="text-gray-600 mb-4">
                Constructora (Agosto 2016 - Presente)
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Ibera 1530
                  </h5>
                  <p className="text-gray-600">
                    16 unidades funcionales, pileta, sum laundry, gimnasio,
                    sauna, y espacio guardacoches
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Miller 4423
                  </h5>
                  <p className="text-gray-600">
                    9 unidades funcionales y espacio guardacoches
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Del Temple
                  </h5>
                  <p className="text-gray-600">
                    10 unidades funcionales y 4 cocheras
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Mario Bravo 1071/73/74/75
                  </h5>
                  <p className="text-gray-600">
                    27 unidades funcionales más 4 locales
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Av. Belgrano 3638
                  </h5>
                  <p className="text-gray-600">
                    36 unidades funcionales, pileta, sum, cocheras, laundry
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Acoyte 491
                  </h5>
                  <p className="text-gray-600">12 unidades funcionales</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">
                Consejo de Propietarios
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Sarmiento 2344
                  </h5>
                  <p className="text-gray-600">21 unidades funcionales</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Arenales 2625
                  </h5>
                  <p className="text-gray-600">5 unidades funcionales</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Yerbal 1850/54
                  </h5>
                  <p className="text-gray-600">
                    33 unidades funcionales, 18 cocheras
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Sinclair 3148
                  </h5>
                  <p className="text-gray-600">25 unidades funcionales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Referencias */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Referencias
          </h3>
          <div className="flex justify-center gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-2">
                Sr. Guido Zaccagnini
              </h4>
              <p className="text-gray-600">1157178722</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-2">
                Sra. Patricia Rea
              </h4>
              <p className="text-gray-600">1149284249</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg">Contactar Ahora</Button>
        </div>
      </div>
    </section>
  );
}
