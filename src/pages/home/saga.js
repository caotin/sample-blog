import { request } from "@helpers/request";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { articleError, articleSuccess, ARTICLE_PAGE_INIT } from "./actions";

// Article API calls
function articleCall(payload) {
  const string = new URLSearchParams(payload).toString();
  return request("get", "/blogs" + (string ? `?${string}` : ""));
}

// Article Workers
function* articleWorker(payload) {
  try {
    const response = yield call(articleCall, payload.params);
    yield put(articleSuccess(response.data));
  } catch (err) {
    yield put(articleError(err));
  }
}

const saga = function* () {
  yield all([takeLatest(ARTICLE_PAGE_INIT, articleWorker)]);
};

export default saga;
