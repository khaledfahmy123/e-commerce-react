import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./addProduct.module.css";
import mainStyles from "./../App.module.css";
import homeStyles from "./../Home/home.module.css";
import Types from "./types";
import {
  postData,
  isFormValid,
} from "./../DataFetching&ValidationFuncs/dataFuncs";

const AddProductForm = (props) => {
  const { products, reFetchData } = props;
  const [type, setType] = useState("noValue");
  const [notification, setNotification] = useState("");

  const submitBtn = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    let dataFields = e.target.elements;
    let description = "";

    // check form validity
    const [error, msg] = isFormValid(products, dataFields);

    if (error) {
      setNotification({ txt: msg, ok: 0 });
      return;
    } else {
      setNotification({ txt: "Added Successfully", ok: 1 });
      description = msg;
    }

    // formating data in a template to store in the database

    let temp = {
      status: "",
      sku: dataFields.sku.value,
      name: dataFields.name.value,
      price: dataFields.price.value,
      description: description,
    };

    // clear fields
    for (let x in dataFields) {
      if (dataFields[x].tagName === "INPUT") {
        dataFields[x].value = "";
      }
    }

    // post data to the server
    postData(temp);
    reFetchData(true);
  };

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <header className={`${homeStyles.header} ${styles.header}`}>
        <div className={mainStyles.container}>
          <h1>product add</h1>
          <span>
            <button>
              <Link to="/">Cancel</Link>
            </button>
            <button
              type="submit"
              className={styles.save}
              onClick={() => submitBtn.current.click()}
            >
              Save
            </button>
          </span>
        </div>
      </header>

      <form id="product_form" onSubmit={submitHandler}>
        <div className={mainStyles.container}>
          <span>
            <label htmlFor="sku">SKU</label>
            <input
              type="text"
              required="required"
              name="sku"
              id="sku"
              placeholder="#sku"
            />
          </span>
          <span>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required="required"
              name="name"
              id="name"
              placeholder="#name"
            />
          </span>
          <span>
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              step="0.01"
              required="required"
              name="price"
              id="price"
              placeholder="#price"
              min={0}
            />
          </span>

          <span>
            <label htmlFor="types">Type Switcher</label>
            <select
              name="types"
              value={type}
              onChange={typeChangeHandler}
              id="productType"
            >
              {Object.keys(Types).map((key, index) => {
                return (
                  <option
                    value={key}
                    key={key}
                    disabled={index == 0 ? "disabled" : ""}
                  >
                    {Types[key].title}
                  </option>
                );
              })}
            </select>
          </span>
          <article>
            <h3>{Types[type]["txt"]}</h3>
            {Types[type]["compo"]}
          </article>
          <h3
            className={styles.notify}
            style={
              notification.ok === 1
                ? { color: "#788e41" }
                : { color: "#b9354d" }
            }
          >
            {notification.txt}
          </h3>
        </div>

        <button
          type="submit"
          ref={submitBtn}
          style={{ display: "none" }}
        ></button>
      </form>
    </>
  );
};

export default AddProductForm;
