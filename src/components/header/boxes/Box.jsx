import "./box.css";
const Box = ({ image, title }) => {
  return (
    <div className="box">
      <img src={image} alt={title} />
      {/* <span>{title}</span> */}
    </div>
  );
};

export default Box;
