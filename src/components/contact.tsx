import { Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-b from-white to-primary-50 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-700">
              ¿Tienes alguna consulta? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">WhatsApp</h4>
                  <a
                    href="https://wa.me/5491163590171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 transition-colors"
                  >
                    1163590171
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a
                    href="mailto:estudi.ayp@gmail.com"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    estudi.ayp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Dirección</h4>
                  <p className="text-gray-600">
                    Av. Federico Lacroze 2827, 8° "E"
                  </p>
                  <p className="text-gray-600">Av. Belgrano 3638 5C</p>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895464!2d-58.4082!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaec0c1f3ef9%3A0x1c2b5c5c5c5c5c5c!2sAv.%20Federico%20Lacroze%202827%2C%20C1426%20CABA!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
