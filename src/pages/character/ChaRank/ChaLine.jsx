import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChaLineItem from '../../../components/character/ChaRank/ChaLineItem';
import { Quote, Plus } from 'lucide-react';
import axios from 'axios';

const ChaLine = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    axios.get('/data/adminChaLine.json')
      .then(res => {
        // 데이터를 최신순으로 정렬
        const sortedData = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setLines(sortedData);
      })
      .catch(err => console.error("명대사 데이터 로딩 실패:", err));
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="flex items-center gap-4">
              <div className="w-1.5 h-10 bg-primary rounded-full"></div>
              <div>
                  <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                      Famous Lines
                      <Quote className="text-primary" size={24} />
                  </h2>
                  <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">Unforgettable Moments</p>
              </div>
          </div>
          <Link 
            to="/chaLine/add"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold shadow hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Plus size={18} />
            <span>명대사 추가하기</span>
          </Link>
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
