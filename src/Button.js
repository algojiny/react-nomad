import PropTypes from "prop-types";
import styles from "./Botton.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
