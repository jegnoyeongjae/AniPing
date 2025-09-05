import './CharacterList.css';

const CharacterList = ({ aniList }) => {
  return (
    <div className="CharacterList">
      <div className="listBox">
        {aniList.map((ani, idx) => (
          <div key={idx} className="aniBox">
            <img src={ani.aniImg} alt={ani.anititle} />
            <div className="aniList">
              <p className="aniTitle">{ani.aniTitle}</p>
              <p className="aniName">{ani.aniName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CharacterList;
