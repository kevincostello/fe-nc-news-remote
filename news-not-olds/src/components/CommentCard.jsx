import React from "react";
import Voting from "./Voting";
import * as api from "./utils/api";

export default function CommentCard({
  comment_id,
  author,
  article_id,
  votes,
  created_at,
  body,
  username,
  removeComment,
}) {
  const upDateComments = () => {
    api.deleteComment(comment_id).then((status) => {
      removeComment(comment_id);
    });
  };

  return (
    <li>
      <h4>
        Comment by: {author} on {created_at}, Comment number: {comment_id}
      </h4>
      <p>{body}</p>
      <Voting votes={votes} id={comment_id} type={"comments"} />
      {username === author ? (
        <label>
          <button onClick={() => upDateComments()}>Delete Comment</button>
        </label>
      ) : null}
    </li>
  );
}
