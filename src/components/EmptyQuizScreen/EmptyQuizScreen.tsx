import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Button from "../Button/Button";

function EmptyQuizScreen() {
  const navigate = useNavigate();

  const handleNavigateHomePage = () => {
    navigate("/");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["empty-screen"]}>There is No Quiz!</div>
      <Button text="Home" size="medium" onClick={handleNavigateHomePage} />
    </div>
  );
}

export default EmptyQuizScreen;
