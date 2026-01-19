import './CharacterList.css';

const CharacterList = ({ works }) => {
  if (!works || works.length === 0) {
    return <div className="no-works">출연 작품 정보가 없습니다.</div>;
  }

  return (
    <div className="CharacterList">
      <div className="listBox">
        {works.map((work, idx) => (
          <div key={idx} className="aniBox">
            <div className="img-wrapper">
              <img 
                src={work.thumb_image || work.full_image || "/images/no-image.png"} 
                alt={work.character_name} 
                onError={(e) => {e.target.src = "/images/no-image.png"}}
              />
            </div>
            <div className="aniList">
              <p className="charName">{work.character_name}</p>
              <p className="aniTitle">{work.anime_title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CharacterList;
