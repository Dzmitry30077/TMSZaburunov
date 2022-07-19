import { IArticle, IArticlePost } from "../Types/Types";

export const pushArticles = (articlesArray: IArticle[]) => {
  return {
    type: "PUSH_ARTICLES",
    articlesArray
  };
};

export const setArticlePost = (articleData: IArticlePost) => {
  return {
    type: "SET_ARTICLE",
    articleData
  };
};
