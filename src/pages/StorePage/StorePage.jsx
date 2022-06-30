import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./StorePage.module.css";
import { FilterIcon, SearchIcon } from "@heroicons/react/outline";
import FilterOption from "../../components/FilterOption/FilterOption";
import Shoe from "../../components/Shoe/Shoe";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartSlice";
import shoe1 from "../../assets/shoe.png";
import shoe2 from "../../assets/shoe2.png";
import { data } from "../../Data/data";

function StorePage() {
  const [shoes, setShoes] = useState(data);

  const filterByType = (type) => {
    const results = data.filter((shoe) => {
      return shoe.type === type;
    });
    setShoes(results);
  };

  const filterByTemplate = (template) => {
    const results = data.filter((shoe) => {
      return shoe.template === template;
    });
    setShoes(results);
  };

  const filterByCost = (cost) => {
    const results = data.filter((shoe) => {
      return shoe.costRange === cost;
    });
    setShoes(results);
  };

  const filterByColor = (color) => {
    const results = data.filter((shoe) => {
      return shoe.color === color;
    });
    setShoes(results);
  };

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
                <FilterOption
                  onClick={() => {
                    filterByCost("Rs. 1500-4000");
                  }}
                  label="Rs. 1500-4000"
                />
                <FilterOption
                  onClick={() => {
                    filterByCost("Rs. 4000-7000");
                  }}
                  label="Rs. 4000-7000"
                />
                <FilterOption
                  onClick={() => {
                    filterByCost("Rs. 7000+");
                  }}
                  label="Rs. 7001+"
                />
              </div>
            </div>
            <div>
              <div className={styles.colorFilter}>
                <p>Colour</p>
                <div className={styles.colors}>
                  <div
                    onClick={() => {
                      filterByColor("black");
                    }}
                    className={styles.black}
                  ></div>
                  <div
                    onClick={() => {
                      filterByColor("whitesmoke");
                    }}
                    className={styles.whitesmoke}
                  ></div>
                  <div
                    onClick={() => {
                      filterByColor("yellow");
                    }}
                    className={styles.yellow}
                  ></div>
                  <div
                    onClick={() => {
                      filterByColor("lightgreen");
                    }}
                    className={styles.lightgreen}
                  ></div>
                  <div
                    onClick={() => {
                      filterByColor("goldenrod");
                    }}
                    className={styles.goldenrod}
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.costFilter}>
              <p>Design templates</p>
              <div>
                <FilterOption
                  onClick={() => {
                    filterByTemplate("2");
                  }}
                  label="2"
                />
                <FilterOption
                  onClick={() => {
                    filterByTemplate("3");
                  }}
                  label="3"
                />
                <FilterOption
                  onClick={() => {
                    filterByTemplate("3+");
                  }}
                  label="3+"
                />
              </div>
            </div>
            <div className={styles.costFilter}>
              <p>Type</p>
              <div>
                <FilterOption
                  onClick={() => {
                    filterByType("Running Shoe");
                  }}
                  label="Running Shoes"
                />
                <FilterOption
                  onClick={() => {
                    filterByType("Sneakers");
                  }}
                  label="Sneakers"
                />
              </div>
            </div>
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
              {shoes.map((shoe, index) => (
                <Shoe
                  src={shoe.src}
                  key={shoe.id}
                  name={shoe.name}
                  price={shoe.price}
                  rating={shoe.rating}
                  onClick={() => dispatch(addItem(data[index]))}
                />
              ))}
            </div>
            <div className={styles.shoerack}>
              {shoes.map((shoe, index) => (
                <Shoe
                  src={shoe.src}
                  key={shoe.id}
                  name={shoe.name}
                  price={shoe.price}
                  rating={shoe.rating}
                  onClick={() => dispatch(addItem(data[index]))}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.cart}>Kya haal chaal?</div>
      </div>
    </div>
  );
}

export default StorePage;
