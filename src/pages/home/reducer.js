import { ARTICLE_ERROR, ARTICLE_PAGE_INIT, ARTICLE_SUCCESS } from "./actions";

// The initial state
export const initialState = {
  loading: false,
  messages: [],
  errors: [],
  articles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_INIT: {
      return { ...state, errors: [], articles: [], loading: true };
    }
    case ARTICLE_SUCCESS: {
      return { ...state, loading: false, articles: [...action.payload] };
    }
    case ARTICLE_ERROR: {
      return { ...state, loading: false, articles: [...action.payload] };
    }
    default:
      return state;
  }
};

export default reducer;
