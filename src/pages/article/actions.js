export const ARTICLE_DETAIL_INIT = "ARTICLE_DETAIL_INIT";
export const ARTICLE_DETAIL_ERROR = "ARTICLE_DETAIL_ERROR";
export const ARTICLE_DETAIL_SUCCESS = "ARTICLE_DETAIL_SUCCESS";

export function articleDetailInit(id) {
  return {
    type: ARTICLE_DETAIL_INIT,
    id
  };
}

export function articleDetailError(error) {
  return {
    type: ARTICLE_DETAIL_ERROR,
    error
  };
}

export function articleDetailSuccess(payload) {
  return {
    type: ARTICLE_DETAIL_SUCCESS,
    payload
  };
}
