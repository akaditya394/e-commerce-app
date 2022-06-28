import React from "react";
import Header from "../../components/Header/Header";
import styles from "./StorePage.module.css";
import { FilterIcon } from "@heroicons/react/outline";
import FilterOption from "../../components/FilterOption/FilterOption";

function StorePage() {
  return (
    <div className={styles.store}>
      <Header />
      <div className={styles.main}>
        <div className={styles.filter}>
          <div className={styles.filterMain}>
            <div className={styles.filterTop}>
              <p>FILTERS</p>
              <div>
                <FilterIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.costFilter}>
              <p>Cost</p>
              <div>
              <FilterOption label="Rs. 1500-4000" />
              <FilterOption label="Rs. 4000-7000" />
              <FilterOption label="Rs. 7001+" />
              </div>
            </div>
            <div>
              <div className={styles.colorFilter}>
                <p>Colour</p>
                <div className={styles.colors}>
                  <div className={styles.red}></div>
                  <div className={styles.lightblue}></div>
                  <div className={styles.yellow}></div>
                  <div className={styles.lightgreen}></div>
                  <div className={styles.goldenrod}></div>
                </div>
              </div>
            </div>
            <div className={styles.costFilter}>
              <p>Design templates</p>
              <div>
              <FilterOption label="2" />
              <FilterOption label="3" />
              <FilterOption label="3+" />
              </div>
            </div>
            <div className={styles.costFilter}>
              <p>Type</p>
              <div>
              <FilterOption label="Loafers" />
              <FilterOption label="Sneakers" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shoes}>Hi</div>
        <div className={styles.cart}>Kya haal chaal?</div>
      </div>
    </div>
  );
}

export default StorePage;
