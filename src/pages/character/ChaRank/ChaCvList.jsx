import ChaCvListItem from './ChaCvListItem';
import { Mic2 } from 'lucide-react';

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
    <div className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <div className="w-1.5 h-10 bg-primary rounded-full"></div>
            <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                    Voice Actors
                    <Mic2 className="text-primary" size={24} />
                </h2>
                <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">Top Voice Actors Ranking</p>
            </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm border border-blue-50/50 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-6 bg-slate-50/50 border-b border-blue-50 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">
                <div className="col-span-1">Rank</div>
                <div className="col-span-3 text-left pl-8">Voice Actor</div>
                <div className="col-span-8 text-left pl-4">Works</div>
            </div>

            <ul className="divide-y divide-blue-50">
                {cvList.map((cv) => (
                <ChaCvListItem key={cv.id} cv={cv} />
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};
export default ChaCvList;
