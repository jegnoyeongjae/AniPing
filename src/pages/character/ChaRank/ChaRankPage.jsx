import ChaRankItem from './ChaRankItem';
import './ChaRankPage.css';

const ChaRankPage = () => {
  const characters = [
    {
      id: 1,
      name: '리바이',
      image: '/images/levi.jpg',
      rank: '공동1',
      aniname: '진격의 거인',
      anidate: '2025-01-01',
    },
    {
      id: 1,
      name: '나구모',
      image: '/images/nagumo.jpg',
      rank: '공동1',
      aniname: '사카모토 데이즈',
      anidate: '2025-01-01',
    },
    {
      id: 3,
      name: '세균킹',
      image: '/images/king.jpg',
      rank: 3,
      aniname: '코코몽',
      anidate: '2025-01-01',
    },

    {
      id: 4,
      name: '히소카',
      image: '/images/hisoka.jpg',
      rank: 4,
      aniname: '헌터x헌터',
      anidate: '2025-01-01',
    },
    {
      id: 5,
      name: '포치타1호',
      image: '/images/pochita.jpg',
      rank: 5,
      aniname: '체인소 맨',
      anidate: '2025-01-01',
    },
    {
      id: 6,
      name: '짤랑이',
      image: '/images/dokin.jpg',
      rank: 6,
      aniname: '호빵맨',
      anidate: '2025-01-01',
    },
    {
      id: 7,
      name: '힘멜7호',
      image: '/images/him.jpg',
      rank: 7,
      aniname: '장송의 프리렌',
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
