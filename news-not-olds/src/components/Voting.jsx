import React, { Component } from "react";
import * as api from "./utils/api";

export default class Voting extends Component {
  state = { inc_votes: 0 };
  render() {
    const { votes } = this.props;
    const { inc_votes } = this.state;
    return (
      <section>
        <button onClick={() => this.votesUpdate(1)}>Love</button>
        <p>Number of likes: {votes + inc_votes}</p>
        <button onClick={() => this.votesUpdate(-1)}>Loathe</button>
      </section>
    );
  }

  votesUpdate = (vote) => {
    const { id, type } = this.props;
    this.setState((currentState) => {
      return { inc_votes: currentState.inc_votes + vote };
    });
    api.patchVotes(type, vote, id);
  };
}
