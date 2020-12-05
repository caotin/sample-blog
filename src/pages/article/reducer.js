import { ARTICLE_DETAIL_ERROR, ARTICLE_DETAIL_INIT, ARTICLE_DETAIL_SUCCESS } from "./actions";

// The initial state
export const initialState = {
  loading: false,
  messages: [],
  errors: [],
  article: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_DETAIL_INIT: {
      return { ...state, errors: [], article: null, loading: true };
    }
    case ARTICLE_DETAIL_SUCCESS: {
      return { ...state, loading: false, article: action.payload };
    }
    case ARTICLE_DETAIL_ERROR: {
      return { ...state, loading: false, article: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
