import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Nav />

      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
