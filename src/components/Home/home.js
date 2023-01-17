import { useEffect, useState } from "react";
import mainStyles from "./../App.module.css";
import styles from "./home.module.css";
import Product from "./../ProductCardTemp/productCardTemp";
import { Link } from "react-router-dom";
import { deleteData } from "../DataFetching&ValidationFuncs/dataFuncs";
const Home = (props) => {
  const { products, reFetchData } = props;
  const [checkedProducts, setCkeckedProducts] = useState([]);

  const massDeleteHandler = () => {
    let temp = {
      status: "delete",
      ids: checkedProducts,
    };
    deleteData(temp);
    reFetchData(true);
  };

  const addToDeleteList = (e) => {
    if (e.target.checked) {
      setCkeckedProducts((prev) => {
        return [...prev, e.target.name];
      });
    } else {
      setCkeckedProducts((prev) => {
        return [...prev.filter((p) => p !== e.target.name)];
      });
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={mainStyles.container}>
          <h1>product list</h1>
          <span>
            <button>
              <Link to="/add-product">ADD</Link>
            </button>
            <button className={styles.delete} onClick={massDeleteHandler}>
              MASS DELETE
            </button>
          </span>
        </div>
      </header>

      <section className={styles.products}>
        <div className={mainStyles.container}>
          {!products.length ? (
            <h1>No products to display, try add some</h1>
          ) : (
            products.map((e) => {
              return (
                <>
                  <Product
                    data={e}
                    key={e.sku}
                    toggleHandler={addToDeleteList}
                  />
                </>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
