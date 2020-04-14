import React from "react";
import Header from "./components/Header";
import "./styles/global.css";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <About path="/about" />
        <ArticleList path="/" />
        <ArticleList path="/topics/:slug" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
