import styles from "./styles.module.scss";

type Props = {
  text?: string;
  onClick?: () => void;
};

function Button({ text = "Next", onClick }: Props) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className={styles["button-wrapper"]}>
      <div className={styles["button"]} onClick={handleClick}>
        {text}
      </div>
    </div>
  );
}

export default Button;
