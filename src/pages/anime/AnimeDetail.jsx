import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import animeData from "../../data/animeData.json";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem(`comments-${id}`)) || []
  );
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const found = animeData.find((a) => a.id.toString() === id);
    setAnime(found);

    const storedLike = localStorage.getItem(`like-${id}`);
    if (storedLike) setLiked(JSON.parse(storedLike));
  }, [id]);

  if (!anime) return <div className="p-6">애니메이션을 찾을 수 없습니다 😢</div>;

  // 좋아요 토글
  const toggleLike = () => {
    setLiked(!liked);
    localStorage.setItem(`like-${id}`, JSON.stringify(!liked));
  };

  // 댓글 추가
  const addComment = () => {
    if (!newComment.trim()) return;
    const updated = [...comments, { text: newComment, date: new Date().toLocaleString() }];
    setComments(updated);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updated));
    setNewComment("");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* 제목 + 감독 */}
      <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
      <p className="text-gray-600 mb-4">감독: {anime.director}</p>

      {/* PV 영상 */}
      <iframe
        src={`https://www.youtube.com/embed/${anime.youtubeId}`}
        title={anime.title}
        className="w-full h-64 rounded-xl mb-6"
        allowFullScreen
      />

      {/* 소개 */}
      <p className="mb-4">{anime.description}</p>
      <p className="text-sm text-gray-500">
        등장인물: {anime.characters.join(", ")}
      </p>
      <img src={anime.image} alt={anime.title} className="my-4 rounded-xl" />

      {/* 좋아요 */}
      <button onClick={toggleLike} className="px-4 py-2 bg-pink-200 rounded-lg">
        {liked ? "❤️ 좋아요 취소" : "🤍 좋아요"}
      </button>
      <span className="ml-2 text-red-500">
        찜 {anime.likes + (liked ? 1 : 0)}
      </span>

      {/* 태그 */}
      <div className="mt-4 flex gap-2">
        {anime.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 text-xs bg-gray-200 rounded">
            #{tag}
          </span>
        ))}
      </div>

      {/* 댓글 */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">댓글</h2>
        <div className="flex gap-2 mb-2">
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 border rounded p-2"
            placeholder="댓글을 입력하세요"
          />
          <button onClick={addComment} className="px-4 py-2 bg-blue-400 text-white rounded">
            등록
          </button>
        </div>
        <ul className="space-y-2">
          {comments.map((c, i) => (
            <li key={i} className="border-b pb-2">
              <p>{c.text}</p>
              <span className="text-xs text-gray-400">{c.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 신고하기 */}
      <button
        onClick={() => alert("🚨 신고가 접수되었습니다.")}
        className="mt-6 px-4 py-2 bg-red-400 text-white rounded"
      >
        신고하기
      </button>
    </div>
  );
};

export default AnimeDetail;
