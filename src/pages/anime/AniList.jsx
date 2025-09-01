// src/pages/AniList.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AniList.css";

const AniList = () => {
  const { category } = useParams(); // URL에서 장르 가져오기
  const [items, setItems] = useState([]);

   const categoryKorean = {
    fantasy: "판타지",
    romance: "로맨스",
    mystery: "미스터리",
    sf: "SF",
    normal: "일상"
  };

  useEffect(() => {
    fetch("/data/animeData.json")
      .then((res) => res.json())
      .then((data) => {
        // category 기준 필터링
        setItems(data.filter(item => item.category === category));
      })
      .catch((err) => console.error("JSON 불러오기 실패:", err));
  }, [category]);

  return (
    <div className="ani-list-container">
      <h2>{categoryKorean[category]} 애니</h2>
      <div className="ani-card-list">
        {items.map((item) => (
          <div className="ani-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AniList;
