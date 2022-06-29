import React from "react";
import Header from "../../components/Header/Header";
import styles from "./StorePage.module.css";
import { FilterIcon, SearchIcon } from "@heroicons/react/outline";
import FilterOption from "../../components/FilterOption/FilterOption";
import Shoe from "../../components/Shoe/Shoe";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartSlice";

function StorePage() {
  // const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

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
                <FilterOption label="Running Shoes" />
                <FilterOption label="Sneakers" />
              </div>
            </div>
            <button className={styles.applyButton}>apply</button>
          </div>
        </div>
        <div className={styles.shoes}>
          <div className={styles.shoesTop}>
            <p>SHOES</p>
            <div className={styles.sortShoes}>
              <SearchIcon className={styles.icon} />
              <button className={styles.sortButton}>sort by</button>
            </div>
          </div>
          <div className={styles.shoesMiddle}>
            <div className={styles.shoerack}>
              <Shoe
                src={require("../../assets/shoe.png")}
                name="KSL 01"
                price="Rs. 2000"
                rating="⭐⭐⭐⭐"
                onClick={() =>
                  dispatch(
                    addItem({
                      id: 1,
                      name: "KSL 01",
                      price: "Rs. 2000",
                      rating: "⭐⭐⭐⭐",
                    })
                  )
                }
              />
              <Shoe
                src={require("../../assets/shoe2.png")}
                name="KSW 01"
                price="Rs. 2500"
                rating="⭐⭐⭐"
              />
              <Shoe
                src={require("../../assets/shoe2.png")}
                name="Royal S 01"
                price="Rs. 6000"
                rating="⭐⭐"
              />
            </div>
            <div className={styles.shoerack}>
              <Shoe
                src={require("../../assets/shoe.png")}
                name="KSL 01"
                price="Rs. 2000"
                rating="⭐⭐⭐⭐"
              />
              <Shoe
                src={require("../../assets/shoe2.png")}
                name="KSW 01"
                price="Rs. 2500"
                rating="⭐⭐⭐"
              />
              <Shoe
                src={require("../../assets/shoe2.png")}
                name="Royal S 01"
                price="Rs. 6000"
                rating="⭐⭐"
              />
            </div>
          </div>
        </div>
        <div className={styles.cart}>Kya haal chaal?</div>
      </div>
    </div>
  );
}

export default StorePage;
