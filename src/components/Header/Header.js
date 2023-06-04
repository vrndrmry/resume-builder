import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Create your Resume
        </p>
      </div>
      <div className={styles.right}>
        <img src={`https://cdn2.iconfinder.com/data/icons/head-hunting-flaticon/64/PERSONAL_PROFILE-CV-curriculum-browser-resume-1024.png`} alt="Resume" />
      </div>
      <div>
      
      </div>
    </div>
    
  );
}

export default Header;
