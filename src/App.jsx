import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoute from './router/AppRouter';
import AdminRouter from './router/AdminRouter';
import { AdminBoard } from './pages/admin';
import { useState, useEffect } from 'react';
import {
  ChaService,
  ChaRankPage,
  ChaLine,
  ChaCvList,
  ChaCvDetail,
  ChaLineAdd,
  ChaLineEdit,
  ChaAdd, // 추가
} from './pages/character/chracter';
import ChaPost from './pages/character/ChaPost/ChaPost';
import ChaPostEdit from './pages/character/ChaPost/ChaPostEdit';
import ChaNewPost from './pages/character/ChaPost/ChaNewPost';
import { HomePage, AniList, AniDetail } from './pages';
import './App.css';
import ChaPostDetail from './pages/character/ChaPost/ChaPostDetail';
import { UserLogin, UserJoin, UserMyPage } from './pages/user';
import { AdminAni } from './pages/admin/AdminAni';
import { AdminVA } from './pages/admin/AdminVoiceActor';
import { AdminChaFL } from './pages/admin/AdminCha';
import { AdminChaFLLiEd } from './components/admin/AdminCha';
import { AdminVALiEd, AdVaLiEdBtn } from './components/admin/AdminVoiceActor';
import { AdminAniLiEd, AdminAniEdit } from './components/admin/AdminAni';
import { AdCuSeAsk } from './pages/admin/customerservice';
import { useUser } from './context/UserContext';

function App() {
  const { userType } = useUser();
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const initialPosts = [
      { id: 1, title: '집가고싶다', writer: '작성자1', date: '2025.08.01', content: '피곤하다', views: 131, like: 10 },
      { id: 2, title: '배고프다', writer: '작성자2', date: '2025.08.01', content: '맛있는거 먹고싶다', views: 333, like: 31 },
    ];
    setPosts(initialPosts);
  }, []);

  const handleSavePost = (newPostData) => {
    const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const newPost = {
      id: newId,
      ...newPostData,
      writer: '새 작성자',
      date: new Date().toISOString().slice(0, 10),
      views: 0,
      like: 0,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<UserLogin />} />
        <Route path='/join' element={<UserJoin />} />
        
        {userType !== 'admin' ? (
          <Route path="/" element={<AppRoute />}>
            <Route index element={<HomePage />} />
            <Route path="list/:category" element={<AniList />} />
            <Route path="detail/:id" element={<AniDetail />} />
            <Route path="user/profile" element={<UserMyPage />} />
            <Route path="service" element={<ChaService />} />
            <Route path="chaRankPage" element={<ChaRankPage />} />
            <Route path="chaRankPage/add" element={<ChaAdd />} /> {/* 추가 */}
            <Route path="chaLine" element={<ChaLine />} />
            <Route path="chaLine/add" element={<ChaLineAdd />} />
            <Route path="chaLine/edit/:id" element={<ChaLineEdit />} />
            <Route path="chaCvList" element={<ChaCvList />} />
            <Route path="chaCvDetail/:id" element={<ChaCvDetail />} />
            <Route path="chaPost" element={<ChaPost posts={posts} />} />
            <Route path="chaNewPost" element={<ChaNewPost onSavePost={handleSavePost} />} />
            <Route path="chaPostDetail/:id" element={<ChaPostDetail posts={posts} setPosts={setPosts} />} />
            <Route path="chaPostEdit/:id" element={<ChaPostEdit />} />
          </Route>
        ) : (
          <Route path="/admin" element={<AdminRouter />}>
            <Route index element={<AdminBoard />} />
            <Route path="board" element={<AdminBoard />} />
            <Route path="user-list" element={<AdUserLi />} />
            <Route path="setting" element={<AdminSetting />} />
            <Route path="va" element={<AdminVA />} />
            <Route path="cs" element={<AdCuSeAsk />} />
            <Route path="va-detail/:id" element={<AdminVALiEd />} />
            <Route path="va-edit/:id" element={<AdVaLiEdBtn />} />
            <Route path="va-new" element={<AdVaLiEdBtn />} />
            <Route path="cha-fl" element={<AdminChaFL />} />
            <Route path="cha-edit/:id" element={<AdminChaFLLiEd />} />
            <Route path="ani" element={<AdminAni />} />
            <Route path="ani-detail/:id" element={<AdminAniLiEd />} />
            <Route path="ani-edit/:id" element={<AdminAniEdit />} />
          </Route>
        )}

        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
