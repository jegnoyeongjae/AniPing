import './ChaRankItem.css';
const ChaRankItem = ({ character }) => {
  const { image, rank, name, aniname, anidate } = character;
  return (
    <div className="ChaRankItem">
      <li>
        <ul className="rankItem">
          <li className="rankRank">{rank}위</li>
          <li className="rankImg">
            <img src={image} alt="캐릭터" />
          </li>
          <li className="rankName">{name}</li>
          <li className="rankAni">{aniname}</li>
          <li className="rankDate">{anidate}</li>
        </ul>
      </li>
    </div>
  );
};
export default ChaRankItem;
