import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './ChaPostEdit.css';

const ChaPostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/postItem.json');
        const data = response.data;
        const foundPost = data.find((item) => item.id.toString() === id);

        if (foundPost) {
          setPost(foundPost);
          setFormData({
            title: foundPost.title,
            content: foundPost.content,
          });
        } else {
          alert('게시글을 찾을 수 없습니다.');
          navigate('/chaPost');
        }
      } catch (e) {
        console.error('데이터 로딩 실패:', e);
      }
    };
    fetchData();
  }, [id, navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
    console.log('수정된 게시글 데이터:', formData);
    alert('게시글이 성공적으로 수정되었습니다!');
    navigate(`/chaPostDetail/${id}`);
  };
  if (!post) {
    return <div>게시글 데이터를 불러오는 중입니다...</div>;
  }
  return (
    <div className="ChaPostEdit">
      <h1>게시글 수정</h1>
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
export default ChaPostEdit;
