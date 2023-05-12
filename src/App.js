import React from "react";
import "./App.css";
import {
  Blog,
  Header,
  Features,
  Possibility,
  WhatGPT3,
  Footer,
} from "./container";
import { Cta, Brand, Navbar } from "./component";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
