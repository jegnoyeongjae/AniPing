import ChaLineItem from './ChaLineItem';
import './ChaLine.css';

const ChaLine = () => {
  const lines = [
    {
      id: 1,
      image: '/images/stg.jpg',
      content: '엘 프사이 콩그루',
      title: '슈타인즈 게이트',
    },
    {
      id: 2,
      image: '/images/stg.jpg',
      content: '엘 프사이 콩그루',
      title: '슈타인즈 게이트',
    },
    {
      id: 3,
      image: '/images/stg.jpg',
      content: '엘 프사이 콩그루',
      title: '슈타인즈 게이트',
    },
    {
      id: 4,
      image: '/images/stg.jpg',
      content: '엘 프사이 콩그루',
      title: '슈타인즈 게이트',
    },
  ];
  return (
    <div className="ChaLine">
      <ul>
        {lines.map((line) => (
          <ChaLineItem key={line.id} line={line} />
        ))}
      </ul>
    </div>
  );
};
export default ChaLine;
