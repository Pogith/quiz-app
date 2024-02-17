import { SelectedAnswer } from "@/pages/Quiz/Quiz";
import { Quiz } from "@/store/quiz/types";

import styles from "./styles.module.scss";

type Props = {
  activeQuiz: Quiz;
  selectedAnswer: SelectedAnswer | null;
  onClick: (answer: string, index: number) => void;
};

function AnswerOptions({ activeQuiz, selectedAnswer, onClick }: Props) {
  return (
    <div>
      {activeQuiz?.answers?.map((answer, index) => {
        const isSelected = selectedAnswer?.answerNumber === index;
        const isCorrectAnswer =
          activeQuiz["correct_answer"] === selectedAnswer?.answer;
        const selectedClassName = isCorrectAnswer
          ? styles["selected-correct-answer"]
          : styles["selected-incorrect-answer"];

        return (
          <div
            key={answer}
            className={isSelected ? selectedClassName : styles["list"]}
            onClick={() => onClick(answer, index)}
          >
            {answer}
            {isSelected && (
              <>
                {isCorrectAnswer ? (
                  <div className={styles["correct-answer-badge"]}>Correct</div>
                ) : (
                  <div className={styles["incorrect-answer-badge"]}>Wrong</div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AnswerOptions;
