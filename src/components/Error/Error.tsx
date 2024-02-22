import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { clearError } from "@/store/quiz/quizSlice";

type Props = {
  error: any;
};

function Error({ error }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateHomePage = () => {
    dispatch(clearError());
    navigate("/");
  };

  let errorMessage = <></>;

  if (error && error.error["response_code"]) {
    errorMessage = <>429 Too Many Request</>;
  } else {
    errorMessage = <>An Unknown Error Occurred. Sorry.</>;
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["error-screen"]}>{errorMessage}</div>
      <Button text="Home" size="medium" onClick={handleNavigateHomePage} />
    </div>
  );
}

export default Error;
