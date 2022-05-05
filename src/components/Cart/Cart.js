import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.items.quantity);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.itemId}
            item={{
              id: item.itemId,
              title: item.title,
              amount: item.amount,
              price: item.price,
              totalPrice: item.totalPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
