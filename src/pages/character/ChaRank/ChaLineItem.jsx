import "./ChaLineItem.css";

const ChaLineItem = ({ line }) => {
  const { image, title, content, rank, likeCount } = line;
  return (
    <div className="ChaLineItem">
      <li className="chaLineItem">
        <div className="lineItem">
          <img src={image} alt={title} />
          <span>{title}</span>
          <div className="lineMeta">
            {rank && <span className="itemRank">#{rank}</span>}
            {likeCount !== undefined && (
              <span className="likeCount">❤️ {likeCount}</span>
            )}
          </div>
        </div>

        {/* lineContent만 li 중앙에 위치하도록 wrapper */}
        <div className="lineContentWrapper">
          <span className="lineContent">{content}</span>
        </div>
      </li>
    </div>
  );
};

export default ChaLineItem;
