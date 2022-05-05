import React from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Fragment } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./redux-store/cartActions";
import { fetchCartData } from "./redux-store/cartActions";
let isInitial = true;

function App() {
  const toggleCart = useSelector((state) => state.toggleUI.showCart);
  const cart = useSelector((state) => state.items);
  const notification = useSelector((state) => state.toggleUI.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
