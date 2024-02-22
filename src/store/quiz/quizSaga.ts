import { call, put, takeEvery } from "redux-saga/effects";

import { QuizResponse } from "./types";
import { fetchQuizError, fetchQuizStart, fetchQuizSuccess } from "./quizSlice";

import * as api from "@/api/fetchQuiz";

export function* watchFetchQuizSuccess() {
  try {
    const response: QuizResponse = yield call(api.fetchQuiz);

    if (response["response_code"] === 0) {
      yield put({
        type: fetchQuizSuccess.type,
        payload: { quiz: response.results },
      });
    } else {
      yield put({ type: fetchQuizError.type, payload: { error: response } });
    }
  } catch (err) {
    yield put({ type: fetchQuizError.type, payload: { error: err } });
  }
}

export function* quizSaga() {
  yield takeEvery(fetchQuizStart, watchFetchQuizSuccess);
}
