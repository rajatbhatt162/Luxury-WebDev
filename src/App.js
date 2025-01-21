import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner"; 
import "./App.css"; 
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Subscribe from "./components/Subscribe";
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      <Subscribe />
      {/* <VideoSection /> */}
      <Contact />
    </div>
  );
};

export default App;
