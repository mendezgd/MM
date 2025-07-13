export function Services() {
  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-white to-primary-50 scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ofrecemos una gestión integral y profesional para la administración
            de su consorcio
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-label="Lista de servicios ofrecidos"
        >
          {/* Gestión Financiera */}
          <article className="bg-white p-8 rounded-lg shadow-lg border border-primary-100 hover:border-primary-300 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Gestión Financiera
            </h3>
            <ul
              className="space-y-4"
              aria-label="Servicios de gestión financiera"
            >
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Liquidación de expensas en los primeros 5 días hábiles, envío
                  de liquidaciones por mail.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Envío de expensas en formato papel en el caso que sea
                  requerido por el consorcio.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Análisis financieros mensuales de los fondos y los proyectados
                  a fin de priorizar urgencias.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Cumplimiento de la ordenanza del formato de expensas claras.
                </span>
              </li>
            </ul>
          </article>

          {/* Comunicación */}
          <article className="bg-white p-8 rounded-lg shadow-lg border border-primary-100 hover:border-primary-300 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Comunicación Efectiva
            </h3>
            <ul className="space-y-4" aria-label="Servicios de comunicación">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Grupo de WhatsApp con miembros del consejo, comunicación
                  activa de todo lo que se va realizando
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Grupo de WhatsApp (copropietarios, a fin de comunicar
                  información relevante, si los copropietarios lo desean)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Información mensual detallada de trabajos y financiera.
                </span>
              </li>
            </ul>
          </article>

          {/* Metodología de Trabajo */}
          <article className="bg-white p-8 rounded-lg shadow-lg border border-primary-100 hover:border-primary-300 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Metodología de Trabajo
            </h3>
            <ul className="space-y-4" aria-label="Metodología de trabajo">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Diagnóstico inicial mediante una recorrida de las
                  instalaciones con los profesionales a cada área
                  correspondiente con filmaciones incluidas y fotos para
                  informar en asamblea y consejo más evaluaciones en unidades
                  funcionales en conjunto con los copropietarios
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Análisis económico financiero de la situación inicial
                  realizando una observación de la gestión anterior.
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Informe técnico-administrativo y plan de trabajo en los
                  primeros 30 días.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Gestión de trabajos de mantenimiento y reparaciones con la
                  mayor eficacia con filmaciones de inicio, mediadios y final de
                  cada obra.
                </span>
              </li>
            </ul>
          </article>

          {/* Servicios Adicionales */}
          <article className="bg-white p-8 rounded-lg shadow-lg border border-primary-100 hover:border-primary-300 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Servicios Adicionales
            </h3>
            <ul className="space-y-4" aria-label="Servicios adicionales">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Realización de Asambleas de propietarios semestrales y toda
                  vez que la situación lo amerite.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Atención personalizada a propietarios
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Gestión de pagos a proveedores y personal
                </span>
              </li>
            </ul>
          </article>

          {/* Cumplimiento Normativo */}
          <article className="bg-white p-8 rounded-lg shadow-lg border border-primary-100 hover:border-primary-300 transition-colors">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Cumplimiento Normativo
            </h3>
            <ul
              className="space-y-4"
              aria-label="Servicios de cumplimiento normativo"
            >
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Control de mantenimiento de matafuegos e instalaciones fijas
                  contra incendio.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Control de la eficiencia y normas de la seguridad de los
                  ascensores.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Cumplimiento de Resolución Nº 408 SECGCYAC
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Buenas prácticas consorciales.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">Gestión de ley 257.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2" aria-hidden="true">
                  •
                </span>
                <span className="text-gray-700">
                  Aplicación de Ley 6040 GCBA, y su Decreto 405/18.
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
