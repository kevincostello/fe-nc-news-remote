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
