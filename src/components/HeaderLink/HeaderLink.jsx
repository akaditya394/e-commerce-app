import React from 'react'
import styles from "./HeaderLink.module.css"

function HeaderLink(props) {
  return (
    <div className={styles.headerLink} >
    <p>{props.title}</p>
  </div>
  )
}

export default HeaderLink