import React from "react";
import Voting from "./Voting";

export default function CommentCard({
  comment_id,
  author,
  article_id,
  votes,
  created_at,
  body,
}) {
  return (
    <li>
      <h4>
        Comment by: {author} on {created_at}, Comment number: {comment_id}
      </h4>
      <p>{body}</p>
      <Voting votes={votes} id={comment_id} type={"comments"} />
    </li>
  );
}
