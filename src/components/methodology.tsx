import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Methodology() {
  return (
    <section id="metodologia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestra Metodología de Trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso transparente y eficiente para la gestión de su consorcio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Diagnóstico Inicial */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Diagnóstico Inicial
            </h3>
            <p className="text-gray-600 mb-4">
              Realizamos una evaluación exhaustiva que incluye:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Recorrida completa por las instalaciones del edificio
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Evaluación de las partes comunes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Consulta a los moradores sobre inconvenientes en las unidades
                  funcionales
                </span>
              </li>
            </ul>
          </div>

          {/* Informe y Plan de Trabajo */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Informe y Plan de Trabajo
            </h3>
            <p className="text-gray-600 mb-4">
              En los primeros 30 días de administración:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Presentación del informe técnico-administrativo
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Desarrollo del plan de trabajo para los meses siguientes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Realización de asamblea con el Consejo de Propietarios
                </span>
              </li>
            </ul>
          </div>

          {/* Mantenimiento y Reparaciones */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Mantenimiento y Reparaciones
            </h3>
            <p className="text-gray-600 mb-4">
              Para trabajos importantes o cambios de proveedores:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Solicitud de alternativas a los copropietarios
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Fomento de competencia entre ofertas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Garantía de transparencia en la selección
                </span>
              </li>
            </ul>
          </div>

          {/* Comunicación y Seguimiento */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comunicación y Seguimiento
            </h3>
            <p className="text-gray-600 mb-4">
              Mantenemos una comunicación constante:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Grupo de WhatsApp con el Consejo para comunicación diaria
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Envío de fotos y videos de trabajos realizados
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">
                  Informes mensuales detallados por correo electrónico
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="mailto:estudi.ayp@gmail.com?subject=Solicitud de Información"
            className="inline-flex"
          >
            <Button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 text-lg flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Solicitar Información
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
