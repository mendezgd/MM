import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Methodology } from "./components/methodology";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
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
