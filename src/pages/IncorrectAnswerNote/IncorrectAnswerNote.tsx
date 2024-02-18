import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getIncorrectQuiz } from "@/store/quiz/selectors";
import { clearError, clearIncorrectQuiz } from "@/store/quiz/quizSlice";

import Button from "@/components/Button/Button";

import styles from "./styles.module.scss";

function IncorrectAnswerNote() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incorrectQuiz = useSelector(getIncorrectQuiz);

  useEffect(() => {
    return () => {
      dispatch(clearIncorrectQuiz());
      dispatch(clearError());
    };
  }, []);

  const handleHomePageNavigate = () => {
    navigate("/");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Incorrect Answers Note</div>

      {incorrectQuiz?.map((quiz) => (
        <div key={quiz.question}>
          <div className={styles["quiz-no-wrapper"]}>
            <span className={styles["quiz-no"]}>{quiz.quizNum + 1}.</span>
          </div>
          <div className={styles["quiz-question"]}>
            Q{")"} {quiz.question}
          </div>
          <div className={styles["selected-answer"]}>
            <p>Your Selected Answer:</p>
            <p>{quiz.selectedAnswer}</p>
          </div>
          <div className={styles["correct-answer"]}>
            <p>Correct Answer:</p>
            <p>{quiz["correct_answer"]}</p>
          </div>
          <div className={styles["divider"]} />
        </div>
      ))}
      <div className={styles["button-wrapper"]}>
        <Button text="Home" onClick={handleHomePageNavigate} />
      </div>
    </div>
  );
}

export default IncorrectAnswerNote;
