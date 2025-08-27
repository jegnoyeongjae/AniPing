import ChaPhoto from './ChaPhoto';
import ChaProfile from './ChaProfile';
import CharacterList from './CharacterList';
import { useParams } from 'react-router-dom';
import './ChaCvDetail.css';

const ChaCvDetail = () => {
  const data = [
    {
      id: 1001,
      name: '우치야마 코우키',
      birth: '1990.08.16',
      stature: '176cm',
      agency: '극단 히마와리',
      blood: 'A',
      profile:
        '아역 출신으로 무려 1993년에 소속사에 들아왔다 (일본 나이로 3살)외화 더빙을 주로 하다가 킹덤하츠2에서 배역을 얻음으로써 본격적으로 성우일을 했다어느 경력이 있어서 이리노 미유의 뒤를 잇는 급 푸쉬를 받고있는 성우이다 우치야마 코우키는 일본 가수인 퍼퓸의 팬이라 한다.',
      image: '/images/kouki.jpg',
      aniList: [
        {
          aniTitle: '니세코이',
          aniImg: '/images/kouki-raku.jpg',
          aniName: '이치죠 라쿠',
        },
        {
          aniTitle: '하이큐!!',
          aniImg: '/images/kouki-kei.jpg',
          aniName: '츠키시마 케이',
        },
      ],
    },
    {
      id: 1002,
      name: '스즈시로 사유미',
      birth: '1998.02.04',
      stature: '161cm',
      agency: '아트비전',
      blood: 'O',
      profile:
        '일본의 성우. 가나가와 현 출신. 일본 내레이션 연기연구소를 졸업하고 현 소속사인 아트비전에 소속되었다. 유키무라 에리, 오카사키 미호와는 연구소 동기다. 중학교 때 배드민턴부, 고등학교 때 치어리딩부에 소속되어 있었으며, 어렸을 때 부터 여러 운동을 조금씩 배웠기에 축구를 제외한 운동에는 자신이 있었다. 하지만 요즘은 운동할 시간이 없어서 자신이 없다고. 참고로 축구는 영 별로인데 공을 타이밍 맞춰서 차지 못한다고 한다. 천연 성분이 흘러넘치는데, 몇 년 전의 12월 31일, 아이폰의 상태가 좋지 않아 폰을 식히겠답시고 냉동실에 넣고 20분정도 있었더니, 폰이 고장나버려서 다음날 누구와도 새해 인사를 하지 못했다. 설연휴가 겹쳐서 3일이 넘어서야 새 휴대폰을 살 수 있었다. 지금 생각해봐도 그때 왜 그랬는지 잘 모르겠다고 한다. 예전에 이탈리안 레스토랑에서 아르바이트를 했다고 하며, 생각해보니 이탈리안 레스토랑에서 일한 적이 많았다고 한다. 좋아하는 음식은 오렌지, 싫어하는 음식은 카레. 코토부키 비행대의 성우들과 카레를 먹으러 다녀와서 이제 극복 했다고 생각하고 있다. 10년만에 먹는 카레였다고. 술이 세다고 자신하고 있다. 사이 좋은 성우로는 히에다 네네를 꼽았다.',
      image: '/images/sayumi.jpg',
      aniList: [
        {
          aniTitle: '전생했더니 슬라임이었던 건에 대하여 3',
          aniImg: '/images/sayumi-kumara.jpg',
          aniName: '쿠마라',
        },
        {
          aniTitle: '장송의 프리렌',
          aniImg: '/images/sayumi-lawine.png',
          aniName: '라비네',
        },
      ],
    },
    {
      id: 1003,
      name: '우치야마 코우키3',
      birth: '1990.08.163',
      stature: '176cm3',
      agency: '극단 히마와리3',
      blood: 'O',
      profile:
        '아역 출신으로 무려 1993년에 소속사에 들아왔다 (일본 나이로 3살)외화 더빙을 주로 하다가 킹덤하츠2에서 배역을 얻음으로써 본격적으로 성우일을 했다어느 경력이 있어서 이리노 미유의 뒤를 잇는 급 푸쉬를 받고있는 성우이다 우치야마 코우키는 일본 가수인 퍼퓸의 팬이라 한다.3',
      image: '/images/kouki.jpg',
      aniList: [
        {
          aniTitle: '니세코이3',
          aniImg: '/images/kouki-raku.jpg',
          aniName: '이치죠 라쿠3',
        },
        {
          aniTitle: '하이큐!!3',
          aniImg: '/images/kouki-kei.jpg',
          aniName: '츠키시마 케이3',
        },
      ],
    },
  ];
  const { id } = useParams();
  const foundData = data.find((item) => item.id.toString() === id);
  if (!foundData) {
    return <div>해당 성우 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="ChaCvDetail">
      <div className="ChaPhoto">
        <ChaPhoto data={foundData} />
      </div>
      <div className="ChaProfile">
        <h2>프로필</h2>
        <ChaProfile data={foundData} />
      </div>
      <div className="CharacterList">
        <CharacterList aniList={foundData.aniList} />
      </div>
    </div>
  );
};
export default ChaCvDetail;
