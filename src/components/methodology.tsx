import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Methodology() {
  return (
    <section id="metodologia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Cumplimientos Normativas Obligatorias G.C.B.A
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso transparente y eficiente para la gestión de su consorcio
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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
                  Control de matafuegos e instalaciones fijas contra incendio
                  ISO 9001:2015 ISO 14001:2015 OHSAS 18001:2007 más los controles
                  trimestrales obligatorios
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
                  Garantía de eficiencia en la selección
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
                  Todos los meses con las expensas se envían los trabajos
                  realizados más los trabajos pendientes
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
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 text-lg flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Solicitar Información
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
