import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom/dist";

function linkButton({ to, text }) {
  return <Link className={styles.btn} to={to}>
  
  {text}
  
  </Link>;
}

export default linkButton;
