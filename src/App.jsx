import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Portfolio } from "./components/Portfolio"


function App() {

  return (
    <div className="App container mx-auto">
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
    </div>
  )
}

export default App
