import './ChaPostItem.css';
import { Link } from 'react-router-dom';

const ChaPostItem = ({ post }) => {
  const { title, date, writer, views, like } = post;
  return (
    <div className="ChaPostItem">
      <li>
        <ul className="postItem">
          <Link to={`/chaPostDetail/${post.id}`} className="postTitle">
            {title}
          </Link>
          <li className="postWriter">{writer}</li>
          <li className="postDate">{date}</li>
          <li className="postViews">{views}</li>
          <li className="postLike">{like}</li>
        </ul>
      </li>
    </div>
  );
};
export default ChaPostItem;
