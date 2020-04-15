import React, { Component } from "react";
import * as api from "./utils/api";
import CommentList from "./CommentList";

export default class ArticleById extends Component {
  state = {
    article: {},
    isLoading: true,
    showComments: true,
  };
  render() {
    const { article, isLoading, showComments } = this.state;
    const {
      article_id,
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
    } = article;
    if (isLoading) return <p>Loading article {this.props.article_id}......</p>;
    return (
      <main>
        <article>
          <h2>
            {title} by {author} on {created_at}
          </h2>
          <h3>Topic: {topic}</h3>
          <p>{body}</p>
          <p>
            Number of likes: {votes}, Comments: {comment_count}
          </p>
          <button>View Comments</button>
          {showComments ? <CommentList /> : null}
        </article>
      </main>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }
}
