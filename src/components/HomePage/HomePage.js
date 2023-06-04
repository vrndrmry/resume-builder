import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <h1>Welcome to Resume Builder Application</h1>
        <Link to="/resumebuilder">
            <button className={styles.ResumeBuilderButton}>Click here to make resume</button>
        </Link>
      </header>
    </div>
  );
}
