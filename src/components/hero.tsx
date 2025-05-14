// src/components/Hero.tsx
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-gray-800">
              Auditorías y Administración de Consorcios
            </h1>
            <p className="text-xl text-gray-600">
              Gestionamos tu consorcio con eficiencia, transparencia y
              compromiso. Más de 15 años de experiencia en la administración de
              propiedades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Solicitar Presupuesto</Button>
              <Button variant="secondary">Conocer Más</Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/edificio.jpg"
              alt="Edificio moderno"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
