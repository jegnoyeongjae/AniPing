import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Heart, Search, Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const MyLikes = () => {
  const [likes, setLikes] = useState([]);
  const [filteredLikes, setFilteredLikes] = useState([]);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // 기본 6개

  const categories = [
    { value: 'all', label: '모든 카테고리' },
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
    window.scrollTo(0, 0);
  };

  const handleRemoveLike = (e, id) => {
    e.preventDefault(); // Link 이동 방지
    if (window.confirm("찜 목록에서 삭제하시겠습니까?")) {
      const updatedLikes = likes.filter(item => item.id !== id);
      setLikes(updatedLikes);
      // 실제로는 여기서 API 호출하여 DB 업데이트 필요
    }
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 pb-4 border-b border-slate-100">
        <div>
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                <Heart className="text-red-500 fill-red-500" /> My Wishlist
            </h3>
            <p className="text-slate-500 font-medium mt-1 ml-1">총 {filteredLikes.length}개의 작품을 찜했습니다.</p>
        </div>
      </div>

      {/* 필터 및 검색 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="제목으로 검색..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm"
          />
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600 focus:outline-none focus:border-primary cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>

          <select 
            value={itemsPerPage} 
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600 focus:outline-none focus:border-primary cursor-pointer"
          >
            <option value={6}>6개씩</option>
            <option value={12}>12개씩</option>
            <option value={18}>18개씩</option>
          </select>
        </div>
      </div>

      {/* 리스트 영역 */}
      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentItems.map((item) => (
            <div className="anime-card rounded-[2rem] overflow-hidden border border-blue-50/50 group relative" key={item.id}>
                <Link to={`/detail/${item.id}`}>
                    <div className="relative aspect-[3/4.2] overflow-hidden">
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=600' }}
                        />
                        <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-black text-primary shadow-sm">
                            <Star size={12} fill="currentColor" />
                            {item.score || "N/A"}
                        </div>
                        
                        {/* 찜 삭제 버튼 */}
                        <button 
                            onClick={(e) => handleRemoveLike(e, item.id)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-red-500 shadow-md hover:scale-110 transition-transform z-10"
                            title="찜 목록에서 삭제"
                        >
                            <Heart size={20} fill="currentColor" />
                        </button>

                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                            <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                                <Play className="text-primary ml-1" size={24} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="text-base font-bold text-slate-800 mb-2 truncate group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            <span>{item.category}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{item.likedDate}</span>
                        </div>
                    </div>
                </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-slate-50 rounded-3xl border border-dashed border-slate-200 mb-8">
          <Heart size={48} className="mx-auto text-slate-300 mb-4" />
          <p className="text-slate-500 font-bold text-lg">찜한 애니메이션이 없습니다.</p>
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-lg font-bold text-sm transition-all
                ${currentPage === page 
                  ? 'bg-primary text-white shadow-md scale-105' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
            >
              {page}
            </button>
          ))}

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyLikes;
