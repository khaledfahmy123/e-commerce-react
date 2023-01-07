import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.module.css";
import Home from "./Home/home";
import AddProductForm from "./AddProductForm/addProduct";
import { fetchData } from "./DataFetching&ValidationFuncs/dataFuncs";

const App = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  const reloadHandler = (status) => {
    setReload(status);
  };

  const reFetchData = () => {
    fetchData().then((d) => setProducts(d));
    setReload(false);
  };

  useEffect(() => {
    reFetchData();
  }, [products, reload]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home products={products} reFetchData={reloadHandler} />}
          />
          <Route
            exact
            path="/add-product"
            element={
              <AddProductForm products={products} reFetchData={reloadHandler} />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
