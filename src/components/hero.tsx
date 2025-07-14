// src/components/Hero.tsx
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { Carousel } from "./carousel";

export function Hero() {
  const heroImages = [
    "/21.webp",
    "/11.webp",
    "/10.webp",
    "/12.webp",
    "/15.webp",
    "/16.webp",
    "/17.webp",
    "/18.webp",
    "/19.webp",
    "/20.webp",
    "/22.webp",
  ];

  return (
    <section
      className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white"
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1
              id="hero-heading"
              className="text-5xl font-bold leading-tight text-gray-900"
            >
              Administración de Consorcios y Auditorías
            </h1>
            <p className="text-xl text-gray-700">
              Gestionamos tu consorcio con eficiencia y compromiso. Más de 15
              años de experiencia en la administración de la propiedad horizontal y realizamos auditoría de gestión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="mailto:estudi.ayp@gmail.com?subject=Solicitud de Información"
                className="inline-flex w-full sm:w-auto justify-center"
                aria-label="Enviar correo electrónico para solicitar información"
              >
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 text-lg flex items-center gap-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Solicitar Información
                </Button>
              </a>
              <a
                href="#servicios"
                className="inline-flex w-full sm:w-auto justify-center"
                aria-label="Ir a la sección de servicios"
              >
                <Button
                  variant="secondary"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 text-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Conocer Más
                </Button>
              </a>
            </div>
          </div>
          <div
            className="flex-1"
            aria-label="Galería de imágenes de administración de consorcios"
          >
            <Carousel images={heroImages} autoPlay={true} interval={4000} />
          </div>
        </div>
      </div>
    </section>
  );
}
