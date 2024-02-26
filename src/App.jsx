import "./app.scss"

import Navbar from "./components/navbar/Navbar.jsx"
import Hero from "./components/hero/Hero.jsx"
import Paralax from "./components/paralax/Paralax.jsx"
import Services from "./components/services/Services.jsx"
import Portofolio from "./components/portofolio/Portofolio.jsx"
import Contact from "./components/contact/Contact.jsx"
import Cursor from "./components/cursor/Cursor.jsx"

const App =()=> {
  return <div>
    <Cursor/>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Paralax type="services"/>
    </section>
    <section>
      <Services/>
    </section>
    <section id="Portofolio">
      <Paralax type="portofolio"/>
    </section>
    <Portofolio/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>
}

export default App;