import './ChaPdItem.css';

const ChaPdItem = ({ post }) => {
  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }
  return (
    <div className="ChaPdItem">
      <h1 className="pdTitle">{post.title}</h1>
      <div className="pdWrite">
        <div className="pdWriter">
          <span>{post.writer}</span>
        </div>
        <div className="pdDate">
          <span>{post.date}</span>
          <span>조회수 : {post.views}</span>
        </div>
      </div>
      <div className="pdContent">{post.content}</div>
    </div>
  );
};
export default ChaPdItem;
