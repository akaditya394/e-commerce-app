import React from "react";
import Header from "../../components/Header/Header";
import styles from "./TheJourneyPage.module.css";

function TheJourneyPage() {
  return (
    <div>
      <Header />
      <div className={styles.journey}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>THE JOURNEY</h1>
          </div>
        </div>
        <div className={styles.story}>
          <div className={styles.para}>
            <h3>THE ROOTS</h3>
            <p>
              Our entire life when we shop, we are limited to the choices that
              are there in the store. we are often on the side whre we buy our
              favourite coloured shoes made by someone else but what if we
              designed it? What if we could involve in the making of a show we
              want to buy. This little thought sproutred to become ehat we are
              today, KICKUPS! ;)
            </p>
          </div>
          <div className={styles.para}>
            <h3>CHAPTER I</h3>
            <p>
              Understanding the trends in the industry and what the users think
              when they buy were our top priorities before we moved up further
              in the building. after weeks of fruitfull research, we stepped
              into the users' shoes and lok at what we plan to do. its great joy
              for the users if they are involved in the making. We are heading
              into an era of technology and people prefer online shopping to
              shopping in an outlet.
            </p>
          </div>
          <div className={styles.para}>
            <h3>CHAPTER II</h3>
            <p>
              Every milestone begins with a single step and before KICKSUP
              sprouted, the team manufactured in small scale with two users a
              month. The experience was crucial to our brand as this our first
              practical experience. Interacting with the users was the best
              thing ever. The positive reviews and support from people motivated
              us to further push our limits further.
            </p>
          </div>
          <div className={styles.para}>
            <h3>KICKSUP</h3>
            <p>
              Here we are, made a perfect platform for you to involve in the
              making of a show you want to buy! We have evolved ever since we
              started out. We wish to help you more and make KICKSUP a bigger
              team. Design a shoe and be a part of our journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheJourneyPage;
