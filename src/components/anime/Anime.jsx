import { Link } from "react-router-dom";

const Anime = ({ anime }) => {
  return (
    <div className="anime-card">
      <img src={anime.image} alt={anime.title} width="200" />
      <h3>{anime.title}</h3>
      <p>{anime.director}</p>
      <Link to={`/detail/${anime.id}`}>자세히 보기</Link>
    </div>
  );
};

export default Anime;

