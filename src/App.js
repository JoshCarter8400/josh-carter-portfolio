import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />

      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
