import React from "react";

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
      <h3>{title}</h3>
    </article>
  );
}
