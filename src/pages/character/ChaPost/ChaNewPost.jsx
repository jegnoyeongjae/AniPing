import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ChaNewPost.css';

const ChaNewPost = ({ onSavePost }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === '' || formData.content.trim() === '') {
      alert('제목과 내용을 모두 입력해 주세요.');
      return;
    }

    onSavePost(formData);
    navigate('/chaPost');
  };

  return (
    <div className="ChaNewPost">
      <h1>게시글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>제목</p>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <p>내용</p>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="saveBtn">
            저장
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};
export default ChaNewPost;
