import { request } from "@helpers/request";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { articleDetailError, articleDetailSuccess, ARTICLE_DETAIL_INIT } from "./actions";

// Article API calls
function articleCall(id) {
  return request("get", "/blogs/" + id);
}

// Article Workers
function* articleWorker(payload) {
  try {
    const response = yield call(articleCall, payload.id);
    yield put(articleDetailSuccess(response.data));
  } catch (err) {
    yield put(articleDetailError(err));
  }
}

const saga = function* () {
  yield all([takeLatest(ARTICLE_DETAIL_INIT, articleWorker)]);
};

export default saga;
