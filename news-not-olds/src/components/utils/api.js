import axios from "axios";

const request = axios.create({
  baseURL: "https://heroku-my-data.herokuapp.com/api",
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic) => {
  return request.get("/articles", { params: { topic } }).then(({ data }) => {
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
