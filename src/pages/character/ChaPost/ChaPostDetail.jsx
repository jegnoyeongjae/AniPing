import likeBtn from '../../../components/common/postBtn';

import ChaPostBtn from './ChaPostBtn';
import ChaPdItem from './ChaPdItem';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ChaPostDetail.css';

const ChaPostDetail = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((item) => item.id === Number(id));

  const handleDelete = () => {
    const userConfirmed = window.confirm(
      '정말로 이 게시글을 삭제 하시겠습니까?'
    );
    if (userConfirmed) {
      try {
        const updatedPosts = posts.filter((p) => p.id.toString() !== id);
        setPosts(updatedPosts);
        alert('게시글이 삭제되었습니다.');
        navigate('/chaPost');
      } catch (e) {
        alert('게시글 삭제에 실패했습니다.');
      }
    }
  };
  const { handleLikeClick, heartStyle } = likeBtn();
  // useEffect(() => {
  //   fetchData();
  // }, [id]);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('/data/postItem.json');
  //     const data = response.data;
  //     setPosts(data);
  //     const foundPost = data.find((item) => item.id.toString() === id);
  //     setPost(foundPost || null);
  //   } catch (e) {
  //     console.error('데이터 로딩 실패 : ', e);
  //   }
  // };
  if (!post) {
    return <h2>게시글을 찾을 수 없습니다.</h2>;
  }
  return (
    <div className="ChaPostDetail">
      <ChaPdItem post={post} />
      <ChaPostBtn
        id={id}
        handleLikeClick={handleLikeClick}
        heartStyle={heartStyle}
        onDelete={handleDelete}
      />
    </div>
  );
};
export default ChaPostDetail;
