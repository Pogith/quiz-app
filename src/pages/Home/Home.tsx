import { useNavigate } from "react-router-dom";

import Button from "@/components/Button/Button";

import styles from "./styles.module.scss";

function Home() {
  const navigate = useNavigate();

  const handleNavigateQuestionPage = () => {
    navigate("/quiz");
  };

  return (
    <div className={styles["container"]}>
      <Button
        text="Start Quiz!"
        size="large"
        onClick={handleNavigateQuestionPage}
      />
    </div>
  );
}

export default Home;
