import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "./utils/api";

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading some articles......</p>;
    return (
      <main>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }

  fetchArticles = (slug) => {
    api.getArticles(slug).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
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
