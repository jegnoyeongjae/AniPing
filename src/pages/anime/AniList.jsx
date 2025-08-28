import { useEffect, useState } from "react";
import Anime from "../../components/anime/Anime";


const AniList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    setAnimes(data);
  }, []);

  return (
    <div>
      <h2>애니메이션 리스트</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {animes.map((anime) => (
          <Anime key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AniList;
