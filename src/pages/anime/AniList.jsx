// src/pages/AniList.jsx
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AniList.css";

const AniList = () => {
  const { category } = useParams(); // URL에서 장르 가져오기
  const [items, setItems] = useState([]);
  const [sortType, setSortType] = useState("latest"); // 기본값: 최신순

  // 제이슨 데이터 제거예정
  const categoryKorean = {
    fantasy: "판타지",
    romance: "로맨스",
    mystery: "미스터리",
    sf: "SF",
    normal: "일상",
  };

  
  useEffect(() => {
    fetch("/data/animeData.json")
      .then((res) => res.json())
      .then((data) => {
        let filtered = data.filter((item) => item.category === category);

        // 정렬 적용
        if (sortType === "latest") {
          filtered = filtered.sort((a, b) => b.id - a.id); // id 큰 게 최신
        } else if (sortType === "popular") {
          filtered = filtered.sort((a, b) => a.id - b.id); // id 작은 게 인기
        }

        setItems(filtered);
      })
      .catch((err) => console.error("JSON 불러오기 실패:", err));
  }, [category, sortType]);

  return (
    <div className="ani-list-container">
      <div className="ani-list-header">
        <h2>{categoryKorean[category]} 애니</h2>

        {/* 셀렉트정렬 */}
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="sort-select"
        >
          <option value="latest">최신순</option>
          <option value="popular">인기순</option>
        </select>
      </div>

      <div className="ani-card-list">
        {items.map((item) => (
          <div className="ani-card" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AniList;
