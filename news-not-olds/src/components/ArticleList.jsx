import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "./utils/api";

export default class ArticleList extends Component {
  state = {
    articles: [
      {
        article_id: 33,
        author: "weegembump",
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        created_at: "2018-05-30T15:59:13.341Z",
        votes: 9,
        comment_count: 12,
        total_count: "36",
      },
      {
        article_id: 28,
        author: "happyamy2016",
        title: "High Altitude Cooking",
        topic: "cooking",
        created_at: "2018-05-27T03:32:28.514Z",
        votes: 0,
        comment_count: 5,
        total_count: "36",
      },
    ],
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
