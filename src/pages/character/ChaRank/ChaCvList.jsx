import ChaCvDetail from './ChaCvDetail';
import ChaCvListItem from './ChaCvListItem';

import './ChaCvList.css';

const ChaCvList = () => {
  const cvList = [
    {
      id: 1001,
      image: '/images/taka.jpg',
      rank: 1,
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
      id: 1002,
      image: '/images/taka.jpg',
      rank: 2,
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
      image: '/images/taka.jpg',
      rank: 4,
      name: '타카하시 리에',
      aniImage: [
        '/images/taka1.jpg',
        '/images/taka2.jpg',
        '/images/taka3.jpg',
        '/images/taka4.jpg',
        '/images/taka5.jpg',
      ],
    },
  ];
  return (
    <div className="ChaCvList">
      <div>
        <h4>
          <span>순위</span>
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
