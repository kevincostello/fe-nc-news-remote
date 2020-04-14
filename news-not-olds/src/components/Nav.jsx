import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "./utils/api";

export default class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
  };
  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <p>Loading some stuff</p>;
    return (
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }
}
