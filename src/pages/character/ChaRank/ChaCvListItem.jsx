import { Link } from 'react-router-dom';
import './ChaCvListItem.css';

const ChaCvListItem = ({ cv }) => {
  const { image, rank, aniImage, name } = cv;
  return (
    <div className="ChaCvListItem">
      <li>
        <span>{rank}위</span>
        <Link to={`/ChaCvDetail/${cv.id}`}>
          <div className="cvProfile">
            <img src={image} alt="성우" />
            <span>{name}</span>
          </div>
        </Link>
        <div className="imgList">
          {aniImage.map((src, idx) => (
            <img key={idx} src={src} alt="참여작품" />
          ))}
        </div>
      </li>
    </div>
  );
};
export default ChaCvListItem;
