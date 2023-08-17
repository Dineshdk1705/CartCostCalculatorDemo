import { useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";
import cartReducer from "./reducer/cartReducer";
import Products from "./components/products";
import Cart from "./components/cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: [],
  });

  // console.log("state", state);
  const getProducts = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`);

    dispatch({ type: "ADD_PRODUCTS", payload: data.products });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app">
      <div className="products">
        <Products state={state} dispatch={dispatch} />
      </div>
      <div className="cart">
        <Cart state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
