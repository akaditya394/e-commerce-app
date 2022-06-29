import { UserIcon } from "@heroicons/react/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.logo}
          src={require("../../assets/websitelogo.png")}
          alt=""
        />
      </div>
      <div className={styles.links}>
        <NavLink className={styles.link} to="/home">
          <HeaderLink title="HOME" />
        </NavLink>
        <NavLink className={styles.link} to="/thejourney">
          <HeaderLink title="THE JOURNEY" />
        </NavLink>
        <NavLink className={styles.link} to="/team">
          <HeaderLink title="TEAM" />
        </NavLink>
        <NavLink className={styles.link} to="/">
          <HeaderLink title="STORE" />
        </NavLink>
        <NavLink className={styles.link} to="/contact">
          <HeaderLink title="CONTACT" />
        </NavLink>
      </div>
      <div className={styles.account}>
        <UserIcon className={styles.icon} />
        <p>GAGAN</p>
      </div>
    </div>
  );
}

export default Header;
