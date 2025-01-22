import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner"; 
import "./App.css"; 
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
