import React from "react";
import Header from "../../components/Header/Header";
import Member from "../../components/Member/Member";
import styles from "./TeamPage.module.css";

function TeamPage() {
  return (
    <div>
      <Header />
      <div className={styles.team}>
        <div className={styles.top}>
          <h3>
            Without bonding and coordination, every project is a faliure. Look
            at who makes KICKSUP great. ;)
          </h3>
        </div>
        <div className={styles.members}>
          <Member
            name="Zidane"
            src={`${require("../../assets/zidane.jpg")}`}
            socialA={`${require("../../assets/linkedin.png")}`}
            socialB={`${require("../../assets/medium.png")}`}
            socialC={`${require("../../assets/facebook.png")}`}
          />
          <Member
            name="Toni Kroos"
            src={`${require("../../assets/tonikroos.jpg")}`}
            socialA={`${require("../../assets/linkedin.png")}`}
            socialB={`${require("../../assets/medium.png")}`}
          />
          <Member
            name="Iker Casillas"
            src={`${require("../../assets/ikercasillas.jpg")}`}
            socialA={`${require("../../assets/medium.png")}`}
          />
          <Member
            name="James"
            src={`${require("../../assets/james.jpg")}`}
            socialA={`${require("../../assets/medium.png")}`}
            socialB={`${require("../../assets/nba.png")}`}
            socialC={`${require("../../assets/facebook.png")}`}
          />
          <Member
            name="Cristiano"
            src={`${require("../../assets/christiano.jpg")}`}
            socialA={`${require("../../assets/linkedin.png")}`}
            socialB={`${require("../../assets/facebook.png")}`}
          />
        </div>
        <div className={styles.bottom}>
          <h2>and You! ;)</h2>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
