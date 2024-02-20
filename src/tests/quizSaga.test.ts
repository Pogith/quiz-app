import { put, takeEvery } from "redux-saga/effects";
import { describe, expect, it } from "vitest";

import { mockData } from "@/api/mock";
import { quizSaga, watchFetchQuizSuccess } from "@/store/quiz/quizSaga";
import { fetchQuizStart, fetchQuizSuccess } from "@/store/quiz/quizSlice";

describe("quizSaga Test", () => {
  it("should dispatch action fetchQuizStart", () => {
    const generator = quizSaga();

    expect(generator.next().value).toEqual(
      takeEvery(fetchQuizStart, watchFetchQuizSuccess)
    );

    expect(generator.next().done).toBeTruthy();
  });

  it("should dispatch action fetchQuizSuccess with quiz results from fetch Api", () => {
    const mockResponse = mockData;
    const generator = watchFetchQuizSuccess();

    generator.next();

    expect(generator.next(mockResponse).value).toEqual(
      put({
        type: fetchQuizSuccess.type,
        payload: { quiz: mockResponse.results },
      })
    );

    expect(generator.next().done).toBeTruthy();
  });
});
