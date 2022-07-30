import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../contexts/StateProvider";

const ItemList = (props) => {
  const { id, title, price, image, rating } = props.item;

  const [state, dispatch] = useStateValue();

  const handleItemRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>
        <button onClick={handleItemRemove}>Remove</button>
      </div>
    </div>
  );
};
export default ItemList;
