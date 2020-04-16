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
    <article>
      <h2>{article_id}</h2>
      <h3>{topic}</h3>

      <Link to={`/articles/${article_id}`}>
        <h3>
          {title} by {author} on {created_at}
        </h3>
      </Link>
      <p>Votes: {votes}</p>
      <p>Number of comments: {comment_count}</p>
    </article>
  );
}
