import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./StorePage.module.css";
import {
  CalendarIcon,
  FilterIcon,
  LocationMarkerIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import FilterOption from "../../components/FilterOption/FilterOption";
import Shoe from "../../components/Shoe/Shoe";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartSlice";
import { data1 } from "../../Data/data";
import { data2 } from "../../Data/data";
import CartItem from "../../components/CartItem/CartItem";

function StorePage() {
  const [shoes1, setShoes1] = useState(data1);
  const [shoes2, setShoes2] = useState(data2);

  const filterByType = (type) => {
    const results1 = data1.filter((shoe) => {
      return shoe.type === type;
    });
    setShoes1(results1);

    const results2 = data2.filter((shoe) => {
      return shoe.type === type;
    });
    setShoes2(results2);
  };

  const filterByTemplate = (template) => {
    const results1 = data1.filter((shoe) => {
      return shoe.template === template;
    });
    setShoes1(results1);

    const results2 = data2.filter((shoe) => {
      return shoe.template === template;
    });
    setShoes2(results2);
  };

  const filterByCost = (cost) => {
    const results1 = data1.filter((shoe) => {
      return shoe.costRange === cost;
    });
    setShoes1(results1);

    const results2 = data2.filter((shoe) => {
      return shoe.costRange === cost;
    });
    setShoes2(results2);
  };

  const filterByColor = (color) => {
    const results1 = data1.filter((shoe) => {
      return shoe.color === color;
    });
    setShoes1(results1);

    const results2 = data2.filter((shoe) => {
      return shoe.color === color;
    });
    setShoes2(results2);
  };

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

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
          <button className={styles.filterButton}>apply</button>
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
              {shoes1.map((shoe, index) => (
                <Shoe
                  src={shoe.src}
                  key={shoe.id}
                  name={shoe.name}
                  price={shoe.price}
                  rating={shoe.rating}
                  onClick={() => dispatch(addItem(data1[index]))}
                />
              ))}
            </div>
            <div className={styles.shoerack}>
              {shoes2.map((shoe, index) => (
                <Shoe
                  src={shoe.src}
                  key={shoe.id}
                  name={shoe.name}
                  price={shoe.price}
                  rating={shoe.rating}
                  onClick={() => dispatch(addItem(data2[index]))}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartMain}>
            <div className={styles.cartTop}>
              <p>CART</p>
              <div>
                <ShoppingBagIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.cartMiddle}>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  src={item.src}
                  onClick={() => dispatch(removeItem(item.id))}
                />
              ))}
            </div>
            <div className={styles.cartBottom}>
              <div className={styles.address}>
                <div>
                  <LocationMarkerIcon className={styles.addressIcon} />
                  <p>Home</p>
                </div>
                <div>
                  <CalendarIcon className={styles.addressIcon} />
                  <p>Select date</p>
                </div>
              </div>
              <div className={styles.button}>
                <button
                  disabled={cartItems.length === 0}
                  className={styles.orderButton}
                >
                  order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorePage;
