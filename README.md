# MM - Administración de Consorcios y Auditorías

Sitio web profesional para administración de consorcios y auditorías con más de 15 años de experiencia en gestión de propiedades.

## 🚀 Características

- **Rendimiento Optimizado**: Core Web Vitals optimizados
- **SEO Avanzado**: Meta tags, structured data, y sitemap
- **Accesibilidad**: WCAG 2.1 AA compliant
- **Responsive Design**: Mobile-first approach
- **PWA Ready**: Service worker y manifest
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Framework CSS utility-first

## 📊 Métricas de Rendimiento

### Lighthouse Scores (Objetivos)
- **Performance**: 90+ (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🛠️ Tecnologías

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Build**: Vite con optimizaciones avanzadas
- **Performance**: Service Worker, Image optimization
- **SEO**: Meta tags, Structured data, Sitemap

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/your-username/mm-administracion.git
cd mm-administracion

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run dev:clean        # Limpiar cache y iniciar

# Build
npm run build           # Build de producción
npm run build:analyze   # Build con análisis de bundle
npm run build:preview   # Build y preview

# Calidad de Código
npm run lint            # ESLint
npm run lint:fix        # ESLint con auto-fix
npm run type-check      # TypeScript check
npm run format          # Prettier
npm run format:check    # Verificar formato

# Testing
npm run test            # Vitest
npm run test:ui         # Vitest UI
npm run test:coverage   # Coverage report

# Optimización
npm run optimize:images # Optimizar imágenes
npm run analyze         # Analizar bundle
```

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes React
│   ├── ui/           # Componentes UI reutilizables
│   └── ...           # Componentes de página
├── hooks/            # Custom hooks
├── lib/              # Utilidades y configuraciones
├── assets/           # Assets estáticos
└── main.tsx          # Punto de entrada

public/
├── images/           # Imágenes optimizadas
├── sw.js            # Service Worker
├── manifest.json    # PWA manifest
└── ...

config/
├── vite.config.ts   # Configuración de Vite
├── tailwind.config.js # Configuración de Tailwind
└── ...
```

## 🎯 Optimizaciones Implementadas

### 1. **Build Optimizations**
- Code splitting manual por vendor y componentes
- Tree shaking agresivo
- Minificación con Terser
- Compresión Gzip y Brotli
- Source maps deshabilitados en producción

### 2. **Image Optimizations**
- Lazy loading con Intersection Observer
- Componente OptimizedImage personalizado
- Formatos WebP y optimización automática
- Priority loading para imágenes críticas

### 3. **Performance Monitoring**
- Core Web Vitals tracking
- Performance Observer integration
- Bundle size monitoring
- Runtime performance metrics

### 4. **SEO & Accessibility**
- Meta tags completos
- Structured data (JSON-LD)
- Semantic HTML
- ARIA labels y roles
- Keyboard navigation

### 5. **Caching Strategy**
- Service Worker con estrategias múltiples
- Cache-first para assets estáticos
- Network-first para contenido dinámico
- Background sync capabilities

## 🔧 Configuración de Desarrollo

### Requisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Variables de Entorno
```env
NODE_ENV=development
VITE_APP_TITLE=MM Administración
VITE_APP_URL=https://mm-administracion.com
```

## 📈 Monitoreo de Rendimiento

El proyecto incluye monitoreo automático de:
- Core Web Vitals (LCP, FID, CLS)
- Page load times
- Bundle sizes
- Runtime performance

Los logs aparecen en la consola del navegador en desarrollo.

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# Configuración automática con vercel.json
npm run build
```

### Otros Plataformas
```bash
npm run build
# Subir contenido de /dist
```

## 📝 Licencia

MIT License - ver [LICENSE](LICENSE) para detalles.

## 👥 Autores

- **Lic. Mónica Acuña** - Administradora de Consorcios
- **Acuña Marcelo** - Inspector

## 📞 Contacto

- **Teléfono**: +54-11-6359-0171
- **Email**: estudi.ayp@gmail.com
- **Sitio Web**: https://mm-administracion.com

---

**Desarrollado con ❤️ para la administración profesional de consorcios**
