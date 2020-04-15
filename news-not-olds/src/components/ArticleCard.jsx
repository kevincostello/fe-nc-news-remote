import React from "react";
import { Link } from "@reach/router";

export default function ArticleCard({
  article_id,
  title,
  author,
  topic,
  created_at,
  votes,
  comment_count,
}) {
  return (
    <Link to={`/articles/${article_id}`}>
      <article>
        <h2>{article_id}</h2>
        <h3>{topic}</h3>
        <h3>{title}</h3>
      </article>
    </Link>
  );
}
