// src/pages/AniList.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./AniList.css";

const AniList = () => {
  const { category } = useParams(); // /list/:category
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/animeData.json")
      .then(res => res.json())
      .then(data => {
        // 선택한 카테고리 데이터만 가져오기
        setItems(data[category] || []);
      })
      .catch(err => console.error("JSON 불러오기 실패:", err));
  }, [category]);

  return (
    <div className="ani-list-container">
      <h2 className="ani-list-title">{category} 애니</h2>
      <div className="ani-list-grid">
        {items.map(item => (
          <div className="ani-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <Link to={`/detail/${item.id}`} className="detail-link">상세보기</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AniList;
