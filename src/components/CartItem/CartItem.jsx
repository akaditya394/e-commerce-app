import React from "react";
import styles from "./CartItem.module.css";


function CartItem(props) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imgDiv}>
        <div onClick={props.onClick} className={styles.delete}>x</div>
        <img className={styles.img} src={props.src} alt="cartItem" />
      </div>
      <div>
        <div className={styles.details}>
          <div className={styles.name}>
            <p>{props.name}</p>
            <p>by KICKSUP and you</p>
          </div>
          <div>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
