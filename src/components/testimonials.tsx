const testimonials = [
  {
    name: "María González",
    role: "Presidenta del Consorcio",
    content:
      "Excelente servicio y profesionalismo. Han mejorado significativamente la gestión de nuestro edificio.",
    image: "/gente.jpg",
  },
  {
    name: "Carlos Rodríguez",
    role: "Propietario",
    content:
      "La transparencia en la gestión y la rapidez en la resolución de problemas son impresionantes.",
    image: "/gente.jpg",
  },
  {
    name: "Ana Martínez",
    role: "Administradora",
    content:
      "El sistema de reportes y la atención al cliente son excepcionales. Totalmente recomendados.",
    image: "/gente.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para la
            administración de sus consorcios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
