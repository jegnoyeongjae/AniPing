import likeBtn from '../../../components/common/postBtn';
import Comment from '../../../components/common/comment';
import ChaPostBtn from './ChaPostBtn';
import ChaPdItem from './ChaPdItem';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ChaPostDetail.css';
import { useState } from 'react';

const ChaPostDetail = ({ posts, setPosts }) => {
  const { id } = useParams();
  const post = posts.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText.trim() === '') {
      return;
    }
    const newComment = {
      id: Date.now(),
      text: commentText,
      postId: post.id,
      author: '익명',
      time: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };
  const handleDeleteComment = (commentId) => {
    const userConfirmed = window.confirm('정말로 이 댓글을 삭제하시겠습니까?');
    if (userConfirmed) {
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
      );
      setComments(updatedComments);
      alert('댓글이 삭제되었습니다.');
    }
  };
  if (!post) {
    return <h2>게시글을 찾을 수 없습니다.</h2>;
  }

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

  if (!post) {
    return <h2>게시글을 찾을 수 없습니다.</h2>;
  }
  return (
    <div className="ChaPostDetail">
      <ChaPdItem post={post} />
      <Comment
        postId={post.id}
        comments={comments}
        commentText={commentText}
        setCommentText={setCommentText}
        onAddComment={handleAddComment}
        onDeleteComment={handleDeleteComment}
      />
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
