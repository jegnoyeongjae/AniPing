// src/pages/AniList.jsx
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Paging } from "../../components/common/Paging";
import { Star, Play } from "lucide-react";

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
    <div className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-2">
              {categoryKorean[category]} <span className="text-primary">Anime</span>
            </h2>
            <p className="text-slate-500 font-medium">
              {categoryKorean[category]} 장르의 애니메이션을 만나보세요.
            </p>
          </div>

          {/* 셀렉트정렬 */}
          <div className="relative">
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="appearance-none bg-white border border-blue-100 text-slate-600 py-2.5 pl-5 pr-10 rounded-xl font-bold text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer shadow-sm"
            >
              <option value="latest">최신순</option>
              <option value="popular">인기순</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {items.map((item) => (
            <div className="anime-card rounded-[2rem] overflow-hidden border border-blue-50/50 group" key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <div className="relative aspect-[3/4.2] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-black text-primary shadow-sm">
                    <Star size={12} fill="currentColor" />
                    {item.score || "N/A"}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-300">
                      <span className="text-primary font-bold text-sm whitespace-nowrap">상세페이지로</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-base font-bold text-slate-800 mb-2 truncate group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Anime</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>HD</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
            <Paging/>
        </div>
      </div>
    </div>
  );
};

export default AniList;
