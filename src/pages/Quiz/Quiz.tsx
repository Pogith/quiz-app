import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getIsFetchingQuiz, getQuiz } from "@/store/quiz/selectors";
import { checkQuizAnswer, fetchQuizStart } from "@/store/quiz/quizSlice";

import styles from "./styles.module.scss";
import Button from "@/components/Button/Button";

function Quiz() {
  const dispatch = useDispatch();

  const quiz = useSelector(getQuiz);
  const isFetchingQuiz = useSelector(getIsFetchingQuiz);

  const [quizNum, setQuizNum] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<{
    answer: string;
    answerNumber: number;
  } | null>(null);

  useEffect(() => {
    dispatch(fetchQuizStart());
  }, []);

  if (isFetchingQuiz) {
    return <div>Loading....</div>;
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
    return;
  };

  const activeQuiz = quiz[quizNum];
  const isLastQuiz = quizNum === quiz.length - 1;

  return (
    <div className={styles.container}>
      <div className={styles["quiz-no"]}>
        <span className={styles["active-quiz-no"]}>{quizNum + 1}</span>
        <span className={styles["total-quiz-no"]}>/{quiz?.length}</span>
      </div>
      <div className={styles.title}>
        Q{")"} {activeQuiz?.question}
      </div>
      <div>
        {activeQuiz?.answers?.map((answer, index) => (
          <div
            key={answer}
            className={
              selectedAnswer?.answerNumber === index
                ? `${styles.list} ${styles.selected}`
                : styles.list
            }
            onClick={() => handleAnswerClick(answer, index)}
          >
            {answer}
          </div>
        ))}
      </div>
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
