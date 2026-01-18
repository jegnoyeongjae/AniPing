import ChaLineItem from './ChaLineItem';
import { Quote } from 'lucide-react';

const ChaLine = () => {
  const lines = [
    {
      id: 1,
      image: '/images/vio.jpg',
      content: '알고 싶습니다.  "사랑해"를... 알고싶습니다.',
      title: '바이올렛 에버가든',
      likeCount: 19
    },
    {
      id: 2,
      image: '/images/uta.jpg',
      content: '무례하긴, 순애야',
      title: '주술회전',
      likeCount: 191
    },
    {
      id: 3,
      image: '/images/ren.png',
      content: '마음을 불태워라, 한계를 뛰어넘어',
      title: '귀멸의 칼날 : 무한열차',
      likeCount: 74414554
    },
    {
      id: 4,
      image: '/images/rena1.jpg',
      content: '신...! ',
      title: '에이티식스',
      likeCount: 114
    },
    {
      id: 5,
      image: '/images/simon.jpg',
      content: '아니키와 신다. 모 이나이 ! ',
      title: '천원돌파 그렌라간',
      likeCount: 1222
    },
    {
      id: 6,
      image: '/images/waku.jpg',
      content: '와쿠와쿠',
      title: '스파이 패밀리',
      likeCount: 519
    },
    {
      id: 7,
      image: '/images/adward.jpg',
      content: '기다려',
      title: '강철의 연금술사',
      likeCount: 8816659
    },
    {
      id: 8,
      image: '/images/jinri.jpg',
      content: '정답이다, 연금술사!',
      title: '강철의 연금술사',
      likeCount: 66319
    },
    {
      id: 9,
      image: '/images/doctor.jpg',
      content: '사람이 언제 죽는다고 생각하나?',
      title: '원피스 ',
      likeCount: 6619
    },
    {
      id: 10,
      image: '/images/stg.jpg',
      content: '엘 프사이 콩그루',
      title: '슈타인즈 게이트',
      likeCount: 7519
    },

    {
      id: 11,
      image: '/images/itachi.jpg',
      content: '용서해라, 사스케. 이게 마지막이다.',
      title: '나루토',
      likeCount: 67619
    },
    {
      id: 12,
      image: '/images/elvin.jpg',
      content: '꿈을 포기하고 죽어줘',
      title: '진격의 거인',
      likeCount: 6619
    },
    {
      id: 13,
      image: '/images/aura.jpg',
      content: '아우라. 자해해라.',
      title: '장송의 프리렌',
      likeCount: 19
    },
    {
      id: 14,
      image: '/images/jirobo.jpg',
      content: '인간이 5명이나 모이면 반드시 1명은 쓰레기가 있다',
      title: '나루토',
      likeCount: 7719
    },
  ];
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <div className="w-1.5 h-10 bg-primary rounded-full"></div>
            <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                    Famous Lines
                    <Quote className="text-primary" size={24} />
                </h2>
                <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">Unforgettable Moments</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lines.map((line) => (
            <ChaLineItem key={line.id} line={line} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ChaLine;
