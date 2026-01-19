import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterList from "./CharacterList";
import { Heart } from "lucide-react";
import "./ChaCvDetail.css";

const ChaCvDetail = () => {
  const { id } = useParams();
  const [cvData, setCvData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    fetch("/data/onnadaCvList.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);
        if (found) {
          // id를 기반으로 일관된 좋아요 수 생성
          const seed = parseInt(found.id.toString().replace(/\D/g, '')) || 0;
          const initialLikes = (seed * 9301 + 49297) % 4900 + 100;
          
          setCvData(found);
          setLikesCount(initialLikes);
        }
      })
      .catch((err) => console.error("데이터 로딩 실패:", err));
  }, [id]);

  if (!cvData) {
    return <div className="loading">로딩 중...</div>;
  }

  const toggleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  // 정보 필드 헬퍼 함수
  const renderInfoItem = (label, value) => (
    <div className="info-item">
      <span className="label">{label}</span>
      <span className="value">{value || "정보 없음"}</span>
    </div>
  );

  return (
    <div className="ChaCvDetail">
      <div className="cv-profile-card">
        <div className="profile-image-wrapper">
          <img 
            src={cvData.image?.full || cvData.image?.thumb || "/images/no-image.png"} 
            alt={cvData.name} 
            className="profile-image"
            onError={(e) => {e.target.src = "/images/no-image.png"}}
          />
        </div>
        
        <div className="profile-content">
          <div className="profile-header">
            <h2 className="cv-name">{cvData.name}</h2>
            <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-500">{likesCount} Likes</span>
                <button 
                className={`like-btn ${isLiked ? 'liked' : ''}`} 
                onClick={toggleLike}
                aria-label="좋아요"
                >
                <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
                </button>
            </div>
          </div>

          <div className="info-grid">
            {renderInfoItem("생년월일", cvData.info?.생년월일)}
            {renderInfoItem("혈액형", cvData.info?.혈액형)}
            {renderInfoItem("신장", cvData.info?.신장)}
            {renderInfoItem("소속사", cvData.info?.소속사)}
            {/* 필요한 경우 추가 정보 표시 */}
          </div>

          {cvData.info?.트위터 || cvData.info?.홈페이지 ? (
            <div className="social-links">
              {cvData.info.트위터 && (
                <a href={cvData.info.트위터} target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  Twitter
                </a>
              )}
              {cvData.info.홈페이지 && (
                <a href={cvData.info.홈페이지} target="_blank" rel="noopener noreferrer" className="social-link website">
                  Website
                </a>
              )}
            </div>
          ) : null}
        </div>
      </div>

      <div className="cv-works-section">
        <h3 className="section-title">출연 작품 ({cvData.works?.length || 0})</h3>
        <CharacterList works={cvData.works} />
      </div>
    </div>
  );
};

export default ChaCvDetail;
