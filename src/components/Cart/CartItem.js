import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartItemsActions } from "../../redux-store/cartItems";
const CartItem = (props) => {
  const { title, price, amount, id, totalPrice } = props.item;
  const dispatch = useDispatch();
  const incrementDispatchHandler = () => {
    dispatch(cartItemsActions.increment({ id, price }));
  };
  const decrementDispatchHandler = () => {
    dispatch(cartItemsActions.decrement({ id, price }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementDispatchHandler}>-</button>
          <button onClick={incrementDispatchHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
