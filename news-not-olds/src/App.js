import React from "react";
import Header from "./components/Header";
import "./styles/global.css";
import { Router } from "@reach/router";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router></Router>
    </div>
  );
}

export default App;
