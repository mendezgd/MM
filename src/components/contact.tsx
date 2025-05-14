import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
            <p className="text-gray-600">
              ¿Tienes alguna consulta? Estamos aquí para ayudarte
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <Input type="text" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="tu@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Asunto</label>
              <Input type="text" placeholder="¿En qué podemos ayudarte?" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <Textarea
                placeholder="Escribe tu mensaje aquí..."
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full">Enviar Mensaje</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
