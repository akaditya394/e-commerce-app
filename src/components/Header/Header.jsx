import { UserIcon } from "@heroicons/react/outline";
import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logo} src={require("../../assets/websitelogo.png")} alt="" />
      </div>
      <div className={styles.links}>
      <HeaderLink title="HOME" />
      <HeaderLink title="THE JOURNEY" />
      <HeaderLink title="TEAM" />
      <HeaderLink title="STORE" />
      <HeaderLink title="CONTACT" />
      </div>
      <div className={styles.account}>
      <UserIcon className={styles.icon} />
        <p>GAGAN</p>
      </div>
    </div>
  );
}

export default Header;
