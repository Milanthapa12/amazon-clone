import { useStateValue } from "../../contexts/StateProvider";
import "./checkout.css";

export default function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="checkout__container">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Your shopping cart</h2>
          {/* item */}
          {cart.length > 0 &&
            cart.map((item, index) => <li key={index}>{item.title}</li>)}
        </div>
      </div>
      <div className="checkout__right">
        <div className="subtotal">
          <p>
            Subtotal (0 items): <strong>0</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
