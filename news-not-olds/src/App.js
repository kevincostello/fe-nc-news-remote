import React from "react";
import Header from "./components/Header";
import "./styles/global.css";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import About from "./components/About";
import Footer from "./components/Footer";
import ArticleById from "./components/ArticleById";
import ErrorHandler from "./components/ErrorHandler";

class App extends React.Component {
  state = { username: "jessjelly" };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav />
        <Router>
          <About path="/about" />
          <ArticleList path="/" />
          <ArticleList path="/topics/:slug" />
          <ArticleById path="/articles/:article_id" username={username} />
          <ErrorHandler default status={404} msg={"Page not found"} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
