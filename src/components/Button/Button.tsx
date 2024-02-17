import styles from "./styles.module.scss";

type Props = {
  text?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
};

function Button({
  text = "Next",
  size = "small",
  color = "primary",
  onClick,
}: Props) {
  const handleClick = () => {
    onClick && onClick();
  };

  const buttonClassname = `${styles["button"]} ${styles[`${size}`]} ${
    styles[`${color}`]
  }`;

  return (
    <div className={styles["button-wrapper"]}>
      <div className={buttonClassname} onClick={handleClick}>
        {text}
      </div>
    </div>
  );
}

export default Button;
