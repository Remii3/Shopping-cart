import classes from "./CartButton.module.css";
import { toggleUIActions } from "../../redux-store/cartUI";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
  const dispatch = useDispatch();
  const itemsAmount = useSelector((state) => state.items.totalAmount);

  const toggleHandler = () => {
    dispatch(toggleUIActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsAmount}</span>
    </button>
  );
};

export default CartButton;
