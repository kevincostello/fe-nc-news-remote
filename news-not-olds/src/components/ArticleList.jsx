import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "./utils/api";

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    isSorted: false,
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading some articles......</p>;
    return (
      <main>
        <button name="created_at" onClick={this.sortArticles}>
          Sort by: Created at
        </button>
        <button name="votes" onClick={this.sortArticles}>
          Sort by: Votes
        </button>
        <button name="comment_count" onClick={this.sortArticles}>
          Sort by: Number of comments
        </button>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }

  fetchArticles = (slug, sort_by, order) => {
    api.getArticles(slug, sort_by, order).then((articles) => {
      this.setState((currentState) => {
        return {
          articles,
          isLoading: false,
          isSorted: !currentState.isSorted,
        };
      });
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
      api.getArticles(slug).then((articles) => {
        this.setState({ articles, isLoading: false });
      });
    }
  }
}
