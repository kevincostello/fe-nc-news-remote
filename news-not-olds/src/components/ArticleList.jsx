import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "./utils/api";
import ErrorHandler from "./ErrorHandler";

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    isSorted: false,
    err: null,
  };
  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <p>Loading some articles......</p>;
    if (err) return <ErrorHandler {...err} />;
    return (
      <main>
        <section className="button-group">
          Sort by:
          <button name="created_at" onClick={this.sortArticles}>
            Created at
          </button>
          <button name="votes" onClick={this.sortArticles}>
            Votes
          </button>
          <button name="comment_count" onClick={this.sortArticles}>
            Number of comments
          </button>
        </section>
        <section className="flex-container">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </section>
      </main>
    );
  }

  fetchArticles = (slug, sort_by, order) => {
    api
      .getArticles(slug, sort_by, order)
      .then((articles) => {
        this.setState((currentState) => {
          return {
            articles,
            isLoading: false,
            isSorted: !currentState.isSorted,
          };
        });
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
  };

  sortArticles = (event) => {
    const { name } = event.target;
    const { slug } = this.props;
    const { isSorted } = this.state;
    let order;
    if (isSorted) {
      order = "asc";
    }
    this.fetchArticles(slug, name, order);
  };

  componentDidMount() {
    const { slug } = this.props;
    this.fetchArticles(slug);
  }
  componentDidUpdate(prevProps, prevState) {
    const { slug } = this.props;
    if (slug !== prevProps.slug) {
      this.fetchArticles(slug);
    }
  }
}
