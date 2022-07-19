import { IState } from "../Types/Types";

const initialState = {
  articles: [],
  article: null
};

export const rootReducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case "PUSH_ARTICLES":
      return Object.assign({ ...state }, { articles: action.articlesArray });
    case "SET_ARTICLE":
      return { ...state, article: action.articleData };
    default:
      return state;
  }
};
