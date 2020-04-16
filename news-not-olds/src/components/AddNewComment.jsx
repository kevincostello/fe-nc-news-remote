import React, { Component } from "react";
import * as api from "./utils/api";

export default class AddNewComment extends Component {
  state = { username: "", body: "" };
  render() {
    return (
      <section>
        <h3>Add your comment here:</h3>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Type some wonderful words!
            <input type="text" onChange={this.handleChange} name="body" />
          </label>

          <button>Add New Comment</button>
        </form>
      </section>
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, addToComments, article_id } = this.props;
    const { body } = this.state;
    api.postComment({ username, body }, article_id).then((newComment) => {
      addToComments(newComment);
    });
  };
}
