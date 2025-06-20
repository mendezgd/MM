import { Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-b from-white to-primary-50 scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="contact-heading"
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Contáctanos
            </h2>
            <p className="text-xl text-gray-700">
              ¿Tienes alguna consulta? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8" aria-label="Información de contacto">
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-green-700 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-gray-800">WhatsApp</h3>
                  <a
                    href="https://wa.me/5491163590171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-1"
                    aria-label="Contactar por WhatsApp al número 1163590171"
                  >
                    1163590171
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <a
                    href="mailto:estudi.ayp@gmail.com"
                    className="text-gray-600 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
                    aria-label="Enviar correo electrónico a estudi.ayp@gmail.com"
                  >
                    estudi.ayp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-gray-800">Dirección</h3>
                  <address className="text-gray-600 not-italic">
                    <p>Av. Federico Lacroze 2827, 8° "E"</p>
                    <p>Av. Belgrano 3638 5C</p>
                  </address>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="sr-only">Ubicación en el mapa</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895464!2d-58.4082!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaec0c1f3ef9%3A0x1c2b5c5c5c5c5c5c!2sAv.%20Federico%20Lacroze%202827%2C%20C1426%20CABA!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                  title="Ubicación de MM Administración de Consorcios en Google Maps"
                  aria-label="Mapa mostrando la ubicación de nuestras oficinas en Av. Federico Lacroze 2827"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
