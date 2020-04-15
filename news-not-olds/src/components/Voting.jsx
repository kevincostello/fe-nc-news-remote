import React, { Component } from "react";

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
    this.setState((currentState) => {
      return { inc_votes: currentState.inc_votes + vote };
    });
  };
}
