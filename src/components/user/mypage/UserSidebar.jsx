import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Heart, FileText, MessageSquare, HelpCircle, LogOut } from 'lucide-react';

const UserSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/user/profile', label: '내 정보', icon: <User size={20} /> },
    { path: '/user/wishlist', label: '찜 목록', icon: <Heart size={20} /> },
    { path: '/user/posts', label: '내가 쓴 글', icon: <FileText size={20} /> },
    { path: '/user/lines', label: '내가 쓴 대사', icon: <MessageSquare size={20} /> },
    { path: '/user/inquiry', label: '문의사항', icon: <HelpCircle size={20} /> },
  ];

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-white rounded-[2rem] shadow-sm border border-blue-50 p-6 sticky top-24">
        <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-primary border-4 border-white shadow-md">
                <User size={48} />
            </div>
            <h2 className="text-xl font-black text-slate-800">User Name</h2>
            <p className="text-sm text-slate-500 font-medium">user@example.com</p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl font-bold transition-all duration-300
                ${location.pathname === item.path 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 translate-x-2' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-slate-100">
            <button className="flex items-center gap-3 px-5 py-3 w-full rounded-2xl font-bold text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all">
                <LogOut size={20} />
                로그아웃
            </button>
        </div>
      </div>
    </aside>
  );
};

export default UserSidebar;
