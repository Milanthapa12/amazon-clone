import "./MultiBox.css";
const MultBox = ({ image, title }) => {
  return (
    <div className="multiBox">
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};
export default MultBox;
