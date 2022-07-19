import "./product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../contexts/StateProvider";

const Product = ({ id, title, price, image, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small> <strong>29.99</strong>
        </p>
        <div className="product__rating">
          <p>
            {Array(5)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} />
              ))}
          </p>
        </div>
      </div>
      <div className="image__container">
        <img
          src="https://m.media-amazon.com/images/I/71y8rPagzDL._AC_UL480_FMwebp_QL65_.jpg"
          alt=""
        />
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};
export default Product;
