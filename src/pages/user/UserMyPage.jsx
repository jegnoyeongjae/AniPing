import React, { useState } from 'react';
import UserSidebar from '../../components/user/mypage/UserSidebar';
import MyInfo from '../../components/user/mypage/MyInfo';

// 나머지 탭들을 위한 임시 컴포넌트
const Placeholder = ({ title }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
    <h3 className="text-2xl font-black text-slate-800 mb-4">{title}</h3>
    <p className="text-slate-500">이 기능은 현재 준비 중입니다.</p>
  </div>
);

const UserMyPage = () => {
  const [activeTab, setActiveTab] = useState('info');

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <MyInfo />;
      case 'likes':
        return <Placeholder title="찜 목록" />;
      case 'posts':
        return <Placeholder title="내가 쓴 글" />;
      case 'lines':
        return <Placeholder title="내가 쓴 대사" />;
      case 'inquiry':
        return <Placeholder title="문의사항" />;
      default:
        return <MyInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-8 items-start">
        <UserSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 w-full">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default UserMyPage;
