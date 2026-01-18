import './ChaRankItem.css';
const ChaRankItem = ({ character }) => {
  const { image, rank, name, aniname, anidate } = character;
 return (
    <li className="ChaRankItem">
      <div className="itemWrapper">
        <div className="rank">{rank}위</div>
        <div className="imageWrapper">
          <img src={image} alt={name} />
        </div>
        <div className="name">{name}</div>
        <div className="ani">{aniname}</div>
        <div className="date">{anidate}</div>
      </div>
    </li>
  );
};
export default ChaRankItem;
