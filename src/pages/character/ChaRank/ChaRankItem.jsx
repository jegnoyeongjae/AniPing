import './ChaRankItem.css';
const ChaRankItem = ({ character }) => {
  const { image, rank, name, aniname, anidate } = character;
  return (
    <div className="ChaRankItem">
      <li>
        <span>{rank}위</span>
        <img src={image} alt="캐릭터" />
        <span className="rankName">{name}</span>
        <span>{aniname}</span>
        <span>{anidate}</span>
      </li>
    </div>
  );
};
export default ChaRankItem;
