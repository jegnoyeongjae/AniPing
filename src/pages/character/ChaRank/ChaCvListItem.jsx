import { Link } from 'react-router-dom';
import './ChaCvListItem.css';

const ChaCvListItem = ({ cv }) => {
  const { image, rank, aniImage, name } = cv;
  return (
    <div className="ChaCvListItem">
      <li className="itemMain">
        <ul className="itemUl">
          <li className="itemRank">{rank}위</li>
          <li className="itemCv">
            <Link to={`/ChaCvDetail/${cv.id}`}>
              <div className="cvProfile">
                <img src={image} alt="성우" />
                <span className="cvName">{name}</span>
              </div>
            </Link>
          </li>
          <li className="itemImgList">
            {aniImage.map((src, idx) => (
              <img key={idx} src={src} alt="참여작품" />
            ))}
          </li>
        </ul>
      </li>
    </div>
  );
};
export default ChaCvListItem;
