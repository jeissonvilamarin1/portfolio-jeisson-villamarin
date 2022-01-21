import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Portfolio } from "./components/Portfolio"


function App() {

  return (
    <div className="App container mx-auto scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App
