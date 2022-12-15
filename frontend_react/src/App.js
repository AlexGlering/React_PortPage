import React from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components/";
import "./App.scss";
import KommunicateChat from "./chat";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      <KommunicateChat />  
    </div>
  );
};

export default App;
