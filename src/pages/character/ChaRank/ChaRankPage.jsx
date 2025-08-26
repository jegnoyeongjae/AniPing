import ChaRankItem from './ChaRankItem';
import './ChaRankPage.css';

const ChaRankPage = () => {
  const characters = [
    {
      id: 1,
      name: '힘멜1호',
      image: '/images/him.jpg',
      rank: 1,
      aniname: '애니 제목',
      anidate: '2025-01-01',
    },
    {
      id: 2,
      name: '포치타1호',
      image: '/images/pochita.jpg',
      rank: 2,
      aniname: '애니 제목',
      anidate: '2025-01-01',
    },
    {
      id: 3,
      name: '힘멜3호',
      image: '/images/him.jpg',
      rank: 3,
      aniname: '애니 제목',
      anidate: '2025-01-01',
    },
    {
      id: 4,
      name: '힘멜4호',
      image: '/images/him.jpg',
      rank: 4,
      aniname: '애니 제목',
      anidate: '2025-01-01',
    },
    {
      id: 5,
      name: '힘멜5호',
      image: '/images/him.jpg',
      rank: 5,
      aniname: '애니 제목',
      anidate: '2025-01-01',
    },
    {
      id: 6,
      name: '힘멜6호',
      image: '/images/him.jpg',
      rank: 6,
      aniname: '애니 제목',
      anidate: '2025-01-01',
    },
    {
      id: 7,
      name: '힘멜7호',
      image: '/images/him.jpg',
      rank: 7,
      aniname: '애니 제목',
      anidate: '2025-01-01',
    },
  ];
  return (
    <div className="ChaRankPage">
      <div>
        <h4>
          <span>순위</span>
          <span>이미지 </span>
          <span>캐릭터 </span>
          <span>애니메이션</span>
          <span>방영일</span>
        </h4>
      </div>
      <ul>
        {characters.map((character) => (
          <ChaRankItem key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
};
export default ChaRankPage;
