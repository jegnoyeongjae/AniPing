import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FileText, Search, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    axios.get('/data/userPosts.json')
      .then(res => {
        setPosts(res.data);
        setFilteredPosts(res.data);
      })
      .catch(err => console.error("Failed to load posts data", err));
  }, []);

  // 필터링 로직
  useEffect(() => {
    let result = posts;

    // 검색어 필터
    if (searchTerm) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(result);
    setCurrentPage(1); // 필터 변경 시 1페이지로 리셋
  }, [posts, searchTerm]);

  // 페이지네이션 로직
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 pb-4 border-b border-slate-100">
        <div>
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                <FileText className="text-primary" /> My Posts
            </h3>
            <p className="text-slate-500 font-medium mt-1 ml-1">총 {filteredPosts.length}개의 게시글을 작성했습니다.</p>
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
            value={itemsPerPage} 
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600 focus:outline-none focus:border-primary cursor-pointer"
          >
            <option value={5}>5개씩</option>
            <option value={10}>10개씩</option>
            <option value={15}>15개씩</option>
          </select>
        </div>
      </div>

      {/* 리스트 영역 */}
      {currentItems.length > 0 ? (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl border border-slate-100 shadow-sm table-fixed">
                <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">
                        <th className="px-4 py-4 text-left w-1/2">제목</th>
                        <th className="px-4 py-4 w-32">게시판</th>
                        <th className="px-4 py-4 w-28">작성일</th>
                        <th className="px-4 py-4 w-20">조회수</th>
                        <th className="px-4 py-4 w-20">추천</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((post) => (
                        <tr key={post.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-4 text-slate-800 font-medium truncate">
                                <Link to={`/chaPostDetail/${post.id}`} className="hover:text-primary transition-colors block w-full truncate">
                                    {post.title}
                                </Link>
                            </td>
                            <td className="px-4 py-4 text-slate-600 text-sm text-center">{post.board}</td>
                            <td className="px-4 py-4 text-slate-500 text-sm text-center">{post.date}</td>
                            <td className="px-4 py-4 text-slate-500 text-sm text-center">
                                <div className="flex items-center justify-center gap-1">
                                    <Eye size={14} /> {post.views}
                                </div>
                            </td>
                            <td className="px-4 py-4 text-slate-500 text-sm text-center">
                                <div className="flex items-center justify-center gap-1">
                                    <Heart size={14} /> {post.likes}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      ) : (
        <div className="text-center py-32 bg-slate-50 rounded-3xl border border-dashed border-slate-200 mb-8">
          <FileText size={48} className="mx-auto text-slate-300 mb-4" />
          <p className="text-slate-500 font-bold text-lg">작성한 게시글이 없습니다.</p>
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
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

export default MyPosts;
