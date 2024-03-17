import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Services,
  Contact,
  Footer,
} from "./home/index.js";

function App() {
  return (
    <div className="bg-blue-light">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
