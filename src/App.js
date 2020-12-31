import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";

function App() {
  const [nav] = useState(["About", "Portfolio", "Resume", "Contact"]);

  const [currentNav, setCurrentNav] = useState(nav[0]);
  return (
    <div>
      <Header />
      <Nav
        nav={nav}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      ></Nav>
      <Footer />
      <main>
        {currentNav === "About" ? (
          <About />
        ) : currentNav === "Portfolio" ? (
          <Portfolio />
        ) : currentNav === "Resume" ? (
          <Resume />
        ) : currentNav === "Contact" ? (
          <Contact />
        ) : (
          <About />
        )}
      </main>
    </div>
  );
}

export default App;
