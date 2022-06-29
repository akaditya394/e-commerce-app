import React from "react";
import styles from "./Contact.module.css";

function Contact(props) {
  return (
    <div className={styles.contact}>
      <p className={styles.email}>{props.email}</p>
      <p className={styles.for}>{props.for}</p>
    </div>
  );
}

export default Contact;
