import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getIsFetchingQuiz, getQuiz } from "@/store/quiz/selectors";
import {
  checkQuizAnswer,
  checkQuizTime,
  fetchQuizStart,
} from "@/store/quiz/quizSlice";

import { useSetInterval } from "@/hooks/useSetInterval";

import Button from "@/components/Button/Button";
import AnswerOptions from "@/components/AnswerOptions/AnswerOptions";

import styles from "./styles.module.scss";

export type SelectedAnswer = {
  answer: string;
  answerNumber: number;
};

function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quiz = useSelector(getQuiz);
  const isFetchingQuiz = useSelector(getIsFetchingQuiz);

  const [quizNum, setQuizNum] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer | null>(
    null
  );

  const time = useSetInterval();

  useEffect(() => {
    dispatch(fetchQuizStart());
  }, []);

  if (isFetchingQuiz) {
    return <div>Loading....</div>;
  }

  if (quiz.length === 0) {
    return <div className={styles.container}>No Quiz</div>;
  }

  const handleAnswerClick = (answer: string, index: number) => {
    if (selectedAnswer) return;

    setSelectedAnswer({ answer, answerNumber: index });

    dispatch(checkQuizAnswer({ quizNum, answer }));
  };

  const handleNextQuizButtonClick = () => {
    setQuizNum((prev) => prev + 1);
    setSelectedAnswer(null);
  };

  const handleResultButtonClick = () => {
    dispatch(checkQuizTime({ time }));

    navigate("/result");
  };

  const activeQuiz = quiz[quizNum];
  const isLastQuiz = quizNum === quiz.length - 1;

  return (
    <div className={styles["container"]}>
      <div className={styles["quiz-no"]}>
        <span className={styles["active-quiz-no"]}>{quizNum + 1}</span>
        <span className={styles["total-quiz-no"]}>/{quiz?.length}</span>
      </div>
      <div className={styles["title"]}>
        Q{")"} {activeQuiz?.question}
      </div>

      <AnswerOptions
        activeQuiz={activeQuiz}
        selectedAnswer={selectedAnswer}
        onClick={handleAnswerClick}
      />

      {selectedAnswer &&
        (isLastQuiz ? (
          <Button text="Result" onClick={handleResultButtonClick} />
        ) : (
          <Button text="Next" onClick={handleNextQuizButtonClick} />
        ))}
    </div>
  );
}

export default Quiz;
