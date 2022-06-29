import React from "react";
import styles from "./Member.module.css";

function Member(props) {
  return (
    <div className={styles.member}>
      <div className={styles.image}>
        <img className={styles.img} src={props.src} alt="member" />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.position}>Leadership and Management</p>
      </div>
      <div className={styles.socials}>
          {props.socialA ? <img src={props.socialA} alt="" /> : <div></div>}
          {props.socialB ? <img src={props.socialB} alt="" /> : <div></div>}
          {props.socialC ? <img src={props.socialC} alt="" /> : <div></div>}
      </div>
    </div>
  );
}

export default Member;
