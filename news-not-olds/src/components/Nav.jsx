import React, { Component } from "react";
import { Link } from "@reach/router";

export default class Nav extends Component {
  state = {
    topics: [
      {
        slug: "coding",
        description: "Code is love, code is life",
      },
      {
        slug: "football",
        description: "FOOTIE!",
      },
      {
        slug: "cooking",
        description: "Hey good looking, what you got cooking?",
      },
    ],
    isLoading: true,
  };
  render() {
    const { topics } = this.state;
    return (
      <nav>
        <ul>
          {topics.map((topic) => {
            return (
              <li key={topic.key}>
                <Link to={topic.slug}>{topic.slug}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
