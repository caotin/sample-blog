export const ARTICLE_PAGE_INIT = "ARTICLE_PAGE_INIT";
export const ARTICLE_ERROR = "ARTICLE_ERROR";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS";

export const RELEASE_STATE_DATA = "RELEASE_STATE_DATA";

export function articlePageInit(params) {
  return {
    type: ARTICLE_PAGE_INIT,
    params
  };
}

export function articleError(error) {
  return {
    type: ARTICLE_ERROR,
    error
  };
}

export function articleSuccess(payload) {
  return {
    type: ARTICLE_SUCCESS,
    payload
  };
}
