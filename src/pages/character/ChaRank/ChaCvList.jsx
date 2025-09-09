import ChaCvDetail from './ChaCvDetail';
import ChaCvListItem from './ChaCvListItem';

import './ChaCvList.css';

const ChaCvList = () => {
  const cvList = [
    {
      id: 1001,
      image: '/images/kouki0.jpg',
      rank: 1,
      name: '우치야마 코우키',
      aniImage: [
        '/images/kouki1.png',
        '/images/kouki2.png',
        '/images/kouki3.jpg',
        '/images/kouki4.png',
      ],
    },
    {
      id: 1002,
      image: '/images/sayumi0.jpg',
      rank: 2,
      name: '스즈시로 사유미',
      aniImage: [
        '/images/sayumi1.jpg',
        '/images/sayumi2.png',
        '/images/sayumi3.jpg',
        '/images/sayumi4.jpg',
      ],
    },
    {
      id: 1003,
      image: '/images/taka.jpg',
      rank: 3,
      name: '타카하시 리에',
      aniImage: [
        '/images/taka1.jpg',
        '/images/taka2.jpg',
        '/images/taka3.jpg',
        '/images/taka4.jpg',
        '/images/taka5.jpg',
      ],
    },
    {
      id: 1004,
      image: '/images/kenjiro0.jpg',
      rank: 4,
      name: '츠다 켄지로',
      aniImage: [
        '/images/kenjiro1.png',
        '/images/kenjiro3.jpg',
        '/images/kenjiro4.jpg',
        '/images/kenjiro5.png',
        '/images/kenjiro6.jpg',
      ],
    },
    {
      id: 1005,
      image: '/images/junya0.jpg',
      rank: 5,
      name: '에노키 쥰야',
      aniImage: [
        '/images/junya1.jpg',
        '/images/junya2.jpg',
        '/images/junya3.png',
      ],
    },
  ];
  return (
    <div className="ChaCvList">
      <div>
        <h4>
          <span className="rank">순위</span>
          <span className="cv">성우</span>
          <span className="aniList">최근 참여작품</span>
        </h4>
      </div>
      <ul>
        {cvList.map((cv) => (
          <ChaCvListItem key={cv.id} cv={cv} />
        ))}
      </ul>
    </div>
  );
};
export default ChaCvList;
