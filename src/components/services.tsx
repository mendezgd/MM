import { Button } from "./ui/button";

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gestión integral y profesional para la administración
            de su consorcio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Metodología de Trabajo */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Metodología de Trabajo
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Diagnóstico inicial mediante recorrida de instalaciones y
                  evaluación de unidades funcionales
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Informe técnico-administrativo y plan de trabajo en los
                  primeros 30 días
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Gestión de trabajos de mantenimiento y reparaciones con
                  transparencia
                </span>
              </li>
            </ul>
          </div>

          {/* Comunicación */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comunicación Efectiva
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Grupo de WhatsApp con el Consejo para comunicación diaria y
                  seguimiento de trabajos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Informes mensuales detallados por correo electrónico
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Grupo de WhatsApp para propietarios con información relevante
                </span>
              </li>
            </ul>
          </div>

          {/* Gestión Financiera */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Gestión Financiera
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Liquidación de expensas en los primeros 5 días hábiles
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Envío de liquidaciones por correo electrónico
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Gestión de pagos mediante depósito o transferencia bancaria
                </span>
              </li>
            </ul>
          </div>

          {/* Servicios Adicionales */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Servicios Adicionales
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Realización de Asambleas de propietarios
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Atención personalizada a propietarios
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Gestión de pagos a proveedores y personal
                </span>
              </li>
            </ul>
          </div>

          {/* Cumplimiento Normativo */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cumplimiento Normativo
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Control de mantenimiento de matafuegos y ascensores
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Gestión de seguros obligatorios
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Cumplimiento de la Resolución Nro. 408 SECGCYAC
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="bg-blue-600 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-semibold mb-4">
              ¿Necesita más información?
            </h3>
            <p className="mb-6">
              Contáctenos para conocer más sobre nuestros servicios y cómo
              podemos ayudarle a gestionar su consorcio de manera eficiente.
            </p>
            <Button variant="secondary" className="w-full">
              Contactar Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
