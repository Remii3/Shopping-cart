import { toggleUIActions } from "./cartUI";
import { cartItemsActions } from "./cartItems";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reacttraining-908b8-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartItemsActions.replaceCart({
          quantity: cartData.quantity || [],
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (err) {
      dispatch(
        toggleUIActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleUIActions.showNotification({
        status: "sending",
        title: "sending",
        message: "sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://reacttraining-908b8-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
    };

    try {
      await sendRequest();
      dispatch(
        toggleUIActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (err) {
      dispatch(
        toggleUIActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed",
        })
      );
    }
  };
};
