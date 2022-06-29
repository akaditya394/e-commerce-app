import React from "react";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div>
      <Header />
      <div className={styles.contactCard}>
        <div>
          <p>REACH US AT</p>
        </div>
        <div>
          <Contact
            email="support@kicksup.com"
            for="for any technical support"
          />
          <Contact email="info@kicksup.com" for="for more information" />
          <Contact email="feedback@kicksup.com" for="to send your feedback" />
          <Contact email="jobs@kicksup.com" for="to work with us" />
        </div>
      </div>
      <div className={styles.footer} >
        <p>stay in touch</p>
        <div className={styles.socials}>
          <img src={require("../../assets/twitter.png")} alt="twitter" />
          <img src={require("../../assets/insta.png")} alt="instagram" />
          <img src={require("../../assets/facebook.png")} alt="facebook" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
