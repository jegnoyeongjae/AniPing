import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Heart, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const MyLikes = () => {
  const [likes, setLikes] = useState([]);
  const [filteredLikes, setFilteredLikes] = useState([]);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const categories = [
    { value: 'all', label: '전체' },
    { value: 'fantasy', label: '판타지' },
    { value: 'romance', label: '로맨스' },
    { value: 'sf', label: 'SF' },
    { value: 'normal', label: '일상' },
    { value: 'mystery', label: '미스터리' },
  ];

  useEffect(() => {
    axios.get('/data/userLikes.json')
      .then(res => {
        setLikes(res.data);
        setFilteredLikes(res.data);
      })
      .catch(err => console.error("Failed to load likes data", err));
  }, []);

  // 필터링 로직
  useEffect(() => {
    let result = likes;

    // 1. 카테고리 필터
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // 2. 검색어 필터
    if (searchTerm) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredLikes(result);
    setCurrentPage(1); // 필터 변경 시 1페이지로 리셋
  }, [likes, selectedCategory, searchTerm]);

  // 페이지네이션 로직
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLikes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLikes.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRemoveLike = (id) => {
    if (window.confirm("찜 목록에서 삭제하시겠습니까?")) {
      const updatedLikes = likes.filter(item => item.id !== id);
      setLikes(updatedLikes);
      // 실제로는 여기서 API 호출하여 DB 업데이트 필요
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
      <h3 className="text-2xl font-black text-slate-800 mb-8 pb-4 border-b border-slate-100 flex items-center gap-2">
        <Heart className="text-red-500 fill-red-500" /> 찜 목록
        <span className="text-sm font-medium text-slate-400 ml-2">총 {filteredLikes.length}개</span>
      </h3>

      {/* 필터 및 검색 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex gap-2 w-full md:w-auto">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 focus:outline-none focus:border-primary"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>

          <select 
            value={itemsPerPage} 
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 focus:outline-none focus:border-primary"
          >
            <option value={5}>5개씩</option>
            <option value={10}>10개씩</option>
            <option value={30}>30개씩</option>
          </select>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="애니메이션 제목 검색" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* 리스트 영역 */}
      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {currentItems.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <Link to={`/detail/${item.id}`}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
              
              <button 
                onClick={() => handleRemoveLike(item.id)}
                className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-red-50 transition-colors z-10"
                title="찜 해제"
              >
                <Heart size={18} className="text-red-500 fill-red-500" />
              </button>

              <div className="p-4">
                <Link to={`/detail/${item.id}`}>
                  <h4 className="font-bold text-slate-800 truncate hover:text-primary transition-colors mb-1">{item.title}</h4>
                </Link>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span className="uppercase font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-500">{item.category}</span>
                  <span>{item.likedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <p>찜한 애니메이션이 없습니다.</p>
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-lg font-bold text-sm transition-all
                ${currentPage === page 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
            >
              {page}
            </button>
          ))}

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyLikes;
