import axios from "axios";

const request = axios.create({
  baseURL: "https://heroku-my-data.herokuapp.com/api",
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sort_by, order) => {
  return request
    .get("/articles", { params: { topic, sort_by, order } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticle = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotes = (type, inc_votes, id) => {
  return request.patch(`/${type}/${id}`, { inc_votes }).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (newComment, article_id) => {
  return request
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`).then(({ data }) => {});
};
