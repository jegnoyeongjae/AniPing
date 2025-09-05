import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChaPostBtn.css';
// import { Link } from 'react-router-dom';

const ChaPostBtn = ({ id, handleLikeClick, heartStyle, onDelete }) => {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/chaPostEdit/${id}`);
  };
  return (
    <div className="ChaPostBtn">
      <button style={heartStyle} onClick={handleLikeClick} className="likeBtn">
        &#x2764;
      </button>
      <button onClick={onDelete} className="deleteBtn">
        삭제
      </button>
      <button onClick={handleEditClick} className="editBtn">
        수정
      </button>
      {/* <Link to={`/chaPostEdit/${id}`}>수정</Link> */}
    </div>
  );
};
export default ChaPostBtn;
