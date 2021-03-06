import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contexts/StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  console.log(user);
  const handleSignOut = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        {/* logo */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header_optionLineOne">
            Hello {user ? user.email.substr(0, 6) : "Guest"}!
          </span>
          {!user ? (
            <Link className="header_optionLineTwo" to="login">
              Sing In
            </Link>
          ) : (
            <span className="header_optionLineTwo" onClick={handleSignOut}>
              Sign Out
            </span>
          )}

          <span className="header_optionLineTwo"></span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header_optionLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
