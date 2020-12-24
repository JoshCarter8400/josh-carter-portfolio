import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [itemSelected, setItemSelected] = useState(false);
  return (
    <div>
      <Nav itemSelected={itemSelected} setItemSelected={setItemSelected}></Nav>
      <Footer />
      <main>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
