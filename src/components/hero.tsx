// src/components/Hero.tsx
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Auditorías y Administración de Consorcios
            </h1>
            <p className="text-xl text-gray-700">
              Gestionamos tu consorcio con eficiencia, transparencia y
              compromiso. Más de 15 años de experiencia en la administración de
              propiedades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="mailto:estudi.ayp@gmail.com?subject=Solicitud de Información"
                className="inline-flex w-full sm:w-auto justify-center"
              >
                <Button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 text-lg flex items-center gap-2 w-full sm:w-auto">
                  <Mail className="h-5 w-5" />
                  Solicitar Información
                </Button>
              </a>
              <a
                href="#servicios"
                className="inline-flex w-full sm:w-auto justify-center"
              >
                <Button
                  variant="secondary"
                  className="bg-secondary-100 hover:bg-secondary-200 text-secondary-900 px-6 py-3 text-lg w-full sm:w-auto"
                >
                  Conocer Más
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/edificio.jpg"
              alt="Edificio moderno"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
