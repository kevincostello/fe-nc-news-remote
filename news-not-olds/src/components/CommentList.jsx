import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "./utils/api";

export default class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
  };
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Loading comments......</p>;
    return (
      <>
        <h2>Comments: </h2>
        <ul>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }
}
