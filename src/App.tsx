import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Methodology } from "./components/methodology";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { PerformanceMonitor } from "./components/ui/performance-monitor";

function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden" role="application" aria-label="MM Administración de Consorcios">
      <PerformanceMonitor />
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" className="w-full" role="main" aria-label="Contenido principal">
        <Hero />
        <Services />
        <Methodology />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
