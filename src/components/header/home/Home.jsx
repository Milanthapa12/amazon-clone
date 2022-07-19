import MultBox from "../boxes/MultBox";
import Box from "../boxes/Box";
import "./home.css";
// import SignIn from "../boxes/SignIn";
import Product from "../../product/Product";

const accessories = [
  {
    title: "headsets",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
  },
  {
    title: "keyboard",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
    title: "computer mices",
  },
  {
    title: "chairs",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
  },
];

const categories = [
  {
    title: "computer & accessories",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
  },
  {
    title: "video games",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
    title: "baby",
  },
  {
    title: "toy & games",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
  },
];

const gamings = [
  {
    title: "Apparel",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg",
  },
  {
    title: "hats",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg",
    title: "Action figures",
  },
  {
    title: "mugs",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="home"
        />
      </div>
      <div className="home__row">
        {/* category container */}
        <div className="multiBox__container">
          <h3 className="multiBox_containner__title">Gaming accessories</h3>
          <div className="multiBox__innerContainer">
            {accessories.map((item, index) => (
              <MultBox key={index} image={item.img} title={item.title} />
            ))}
          </div>
          <div className="link">
            <a href="#">Shop now</a>
          </div>
        </div>
        {/* categories */}
        <div className="multiBox__container">
          <h3 className="multiBox_containner__title">Shop by Category</h3>
          <div className="multiBox__innerContainer">
            {categories.map((item, index) => (
              <MultBox key={index} image={item.img} title={item.title} />
            ))}
          </div>
          <div className="link">
            <a href="#">Shop now</a>
          </div>
        </div>
        {/* dresses */}
        <div className="box__container">
          <h3 className="box_containner__title">Dresses</h3>
          <div className="box__innerContainer">
            <Box
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
              title={`Dresses`}
            />
          </div>
        </div>
        {/* categories */}
        <div className="multiBox__container">
          <h3 className="multiBox_containner__title">Gaming merchandise</h3>
          <div className="multiBox__innerContainer">
            {gamings.map((item, index) => (
              <MultBox key={index} image={item.img} title={item.title} />
            ))}
          </div>
          <div className="link">
            <a href="#">See more</a>
          </div>
        </div>
        {/* signin */}
        {/* <SignIn /> */}
      </div>
      {/* product */}
      <div className="home__row">
        <Product
          id="1"
          title="The lean startup"
          price="29"
          image="https://m.media-amazon.com/images/I/71y8rPagzDL._AC_UL480_FMwebp_QL65_.jpg"
          rating="5"
        />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
