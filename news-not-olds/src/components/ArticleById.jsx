import React, { Component } from "react";
import * as api from "./utils/api";
import CommentList from "./CommentList";
import Voting from "./Voting";
import ErrorHandler from "./ErrorHandler";

export default class ArticleById extends Component {
  state = {
    article: {},
    isLoading: true,
    showComments: false,
    err: null,
  };
  render() {
    const { username } = this.props;
    const { article, isLoading, showComments, err } = this.state;
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
    if (err) return <ErrorHandler {...err} />;
    return (
      <main>
        <article className="full-article">
          <h2>
            {title} by {author} on {created_at}
          </h2>
          <h3>Topic: {topic}</h3>
          <p>{body}</p>
          <Voting votes={votes} id={article_id} type={"articles"} />
          <p>Comments: {comment_count}</p>

          <button onClick={this.viewComments}>View Comments</button>
          {showComments ? (
            <CommentList article_id={article_id} username={username} />
          ) : null}
        </article>
      </main>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        // 404 error status is in err.response.data
        let { status, msg } = err.response.data;

        // 400 error status is in err.response
        if (!status) {
          status = err.response.status;
        }

        this.setState({ err: { status, msg }, isLoading: false });
      });
  }

  viewComments = () => {
    this.setState((currentState) => {
      return { showComments: !currentState.showComments };
    });
  };
}
