import React from "react";
import styles from "./Shoe.module.css";

function Shoe(props) {
  return (
    <div onClick={props.onClick} className={styles.shoe}>
      <div>
        <img className={styles.shoeImg} src={props.src} alt="shoe" />
      </div>
      <div className={styles.about}>
        <div className={styles.name}>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.details}>
          <p>{props.price}</p>
          <p>{props.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Shoe;
