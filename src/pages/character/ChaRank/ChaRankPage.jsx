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
      name: '무이치로',
      image: '/images/mu.jpg',
      rank: 3,
      aniname: '귀멸의 칼날',
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
      name: '포치타',
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
      name: '힘멜',
      image: '/images/him.jpg',
      rank: 7,
      aniname: '장송의 프리렌',
      anidate: '2025-01-01',
    },
    {
      id: 8,
      name: '에키드나',
      image: '/images/Echidna.png',
      rank: 8,
      aniname: '장송의 프리렌',
      anidate: '2025-01-01',
    },
    {
      id: 9,
      name: '리무루 템페스트(슬라임)',
      image: '/images/rimuru.jpg',
      rank: 9,
      aniname: '전생했더니 슬라임이었던 건에 대하여 3',
      anidate: '2025-01-01',
    },

    {
      id: 10,
      name: '블라디레나 밀리제',
      image: '/images/rena.jpg',
      rank: 10,
      aniname: '에이티식스',
      anidate: '2025-01-01',
    },
    {
      id: 11,
      name: '신에이 노우젠',
      image: '/images/noujen.jpg',
      rank: 11,
      aniname: '에이티식스',
      anidate: '2025-01-01',
    },
    {
      id: 12,
      name: '아냐 포저',
      image: '/images/ana.png',
      rank: 12,
      aniname: '스파이 패밀리',
      anidate: '2025-01-01',
    },
    {
      id: 13,
      name: '카게야마 토비오',
      image: '/images/tobio.png',
      rank: 13,
      aniname: '하이큐',
      anidate: '2025-01-01',
    },
    {
      id: 14,
      name: '고죠 사토루',
      image: '/images/gojo.jpg',
      rank: 14,
      aniname: '주술회전',
      anidate: '2025-01-01',
    },
    {
      id: 15,
      name: '사카모토 타로',
      image: '/images/taro.png',
      rank: 15,
      aniname: '사카모토 데이즈',
      anidate: '2025-01-01',
    },
    {
      id: 16,
      name: '록시 미굴디아',
      image: '/images/roxi.jpg',
      rank: 16,
      aniname: '무직전생 ~이세계에 갔으면 최선을 다한다~ ',
      anidate: '2025-01-01',
    },
    {
      id: 17,
      name: '덴지',
      image: '/images/denji.png',
      rank: 17,
      aniname: '체인소 맨',
      anidate: '2025-01-01',
    },
    {
      id: 18,
      name: '렌고쿠 쿄주로',
      image: '/images/ren.png',
      rank: 18,
      aniname: '귀멸의 칼날',
      anidate: '2025-01-01',
    },
    {
      id: 19,
      name: '일레이나',
      image: '/images/Elaina.png',
      rank: 19,
      aniname: '마녀의 여행',
      anidate: '2025-01-01',
    },

    {
      id: 20,
      name: '미스터 포테이토 헤드',
      image: '/images/head.jpg',
      rank: 20,
      aniname: '토이스토리4',
      anidate: '2025-01-01',
    },
    {
      id: 21,
      name: '류구지 켄',
      image: '/images/dra.png',
      rank: 21,
      aniname: '도쿄 리벤저스',
      anidate: '2025-01-01',
    },
  ];
  return (
    <div className="ChaRankPage">
      <div>
        <h4>
          <ul className="titleUl">
            <li className="titleRank">순위</li>
            <li className="titleImg">이미지 </li>
            <li className="titleCha">캐릭터 </li>
            <li className="titleAni">애니메이션</li>
            <li className="titleDate">방영일</li>
          </ul>
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
