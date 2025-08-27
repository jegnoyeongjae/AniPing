import './CharacterList.css';

const CharacterList = ({ aniList }) => {
  return (
    <div className="CharacterList">
      {aniList.map((ani, idx) => (
        <div key={idx}>
          <img src={ani.aniImg} alt={ani.anititle} />
          <p>{ani.aniTitle}</p>
          <p>{ani.aniName}</p>
        </div>
      ))}
    </div>
  );
};
export default CharacterList;
