import styles from "./styles.module.scss";

type Props = {
  error: any;
};

function Error({ error }: Props) {
  let errorMessage = <></>;

  if (error && error.error["response_code"]) {
    errorMessage = <>429 Too Many Request</>;
  } else {
    errorMessage = <>An Unknown Error Occurred. Sorry.</>;
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["error-screen"]}>{errorMessage}</div>
    </div>
  );
}

export default Error;
