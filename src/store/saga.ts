import { all } from "redux-saga/effects";

import { quizSaga } from "./quiz/quizSaga";

export function* rootSaga() {
  yield all([quizSaga()]);
}
