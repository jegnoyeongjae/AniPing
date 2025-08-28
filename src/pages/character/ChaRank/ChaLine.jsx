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
      image: '/images/ren.png',
      content: '마음을 불태워라, 한계를 뛰어넘어',
      title: '귀멸의 칼날 : 무한열차',
    },
    {
      id: 3,
      image: '/images/rena1.jpg',
      content: '신...! ㅜㅠㅜ 라이덴 ㅠㅠ 세오,, 앙쥬 ㅠㅠ 크레나 ㅠㅜ푸ㅜㅠㅠ',
      title: '에이티식스',
    },
    {
      id: 4,
      image: '/images/simon.jpg',
      content: '아니키와 신다. 모 이나이 ! ',
      title: '천원돌파 그렌라간',
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
