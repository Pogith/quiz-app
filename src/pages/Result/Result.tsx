import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getQuizResults } from "@/store/quiz/selectors";
import { ChartData, ChartDatasets } from "@/store/quiz/types";
import { clearError, clearQuiz, clearResults } from "@/store/quiz/quizSlice";

import Button from "@/components/Button/Button";
import BarChart from "@/components/Chart/BarChart/BarChart";

import styles from "./styles.module.scss";

function Result() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quizResults = useSelector(getQuizResults);

  useEffect(() => {
    return () => {
      dispatch(clearQuiz());
      dispatch(clearResults());
      dispatch(clearError());
    };
  }, []);

  const { correctAnswersCounts, incorrectAnswersCounts, quizTime } =
    quizResults || {};

  const handleNavigatePage = (path: string) => {
    navigate(path);
  };

  const convertSecondsToHMS = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const convertChartData = (
    correctAnswersCounts: number,
    incorrectAnswersCounts: number
  ) => {
    const totalAnswerCounts = correctAnswersCounts + incorrectAnswersCounts;
    const correctRatio = (correctAnswersCounts / totalAnswerCounts) * 100;
    const incorrectRatio = (incorrectAnswersCounts / totalAnswerCounts) * 100;

    const countsDataset: ChartDatasets = {
      label: "Counts",
      data: [correctAnswersCounts, incorrectAnswersCounts],
      borderColor: "#36A2EB",
      backgroundColor: "#9BD0F5",
    };

    const ratioDataset: ChartDatasets = {
      label: "Ratio",
      data: [correctRatio, incorrectRatio],
      borderColor: "#FF6384",
      backgroundColor: "#FFB1C1",
    };

    const chartData: ChartData = {
      labels: ["Correct Answer", "Incorrect Answer"],
      datasets: [countsDataset, ratioDataset],
    };

    return chartData;
  };

  const chartData = convertChartData(
    correctAnswersCounts,
    incorrectAnswersCounts
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Result!</div>
      <div className={styles["correct-result"]}>
        <p>Correct Answer</p> <p>{correctAnswersCounts}</p>
      </div>
      <div className={styles["incorrect-result"]}>
        <p>Wrong Answer</p> <p>{incorrectAnswersCounts}</p>
      </div>
      <div className={styles["time-result"]}>
        <p>Quiz time </p>
        <p>{convertSecondsToHMS(quizTime)}</p>
      </div>
      {chartData && <BarChart data={chartData} />}
      <div className={styles["button-box"]}>
        <Button
          text="Check My Note"
          size="medium"
          color="secondary"
          onClick={() => handleNavigatePage("/incorrect-answer-note")}
        />
        <Button
          text="Back to Home"
          size="medium"
          color="primary"
          onClick={() => handleNavigatePage("/")}
        />
      </div>
    </div>
  );
}

export default Result;
