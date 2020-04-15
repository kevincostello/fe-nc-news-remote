import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "./utils/api";

export default class CommentList extends Component {
  state = {
    comments: [
      {
        comment_id: 306,
        author: "weegembump",
        article_id: 33,
        votes: 0,
        created_at: "2020-02-28T08:30:44.024Z",
        body:
          "When I order Salmon I want Salmon, not any old common or garden trout for me! Only the best will do!",
      },
      {
        comment_id: 305,
        author: "weegembump",
        article_id: 33,
        votes: 0,
        created_at: "2020-02-28T08:29:07.051Z",
        body: "This will work!",
      },
    ],
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
