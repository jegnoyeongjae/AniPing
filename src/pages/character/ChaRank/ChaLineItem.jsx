import './ChaLineItem.css';

const ChaLineItem = ({ line }) => {
  const { image, content, title } = line;
  return (
    <div className="ChaLineItem">
      <li>
        <div>
          <img src={image} alt={title} />
          <span>{title}</span>
        </div>
        <span className="lineContent">{content}</span>
      </li>
    </div>
  );
};

export default ChaLineItem;
