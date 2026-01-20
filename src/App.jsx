import { BrowserRouter, data, Route, Routes, Navigate } from 'react-router-dom';
import AppRoute from './router/AppRouter';
import AdminRouter from './router/AdminRouter';
import { AdminBoard, AdUserLi, AdminSetting } from './pages/admin';
import { useState, useEffect } from 'react';
import {
  ChaService,
  ChaRankPage,
  ChaLine,
  ChaCvList,
  ChaCvDetail,
} from './pages/character/chracter';
import ChaPost from './pages/character/ChaPost/ChaPost';
import ChaPostEdit from './pages/character/ChaPost/ChaPostEdit';
import ChaNewPost from './pages/character/ChaPost/ChaNewPost';
import axios from 'axios';
import { AdCuSeAsk } from './pages/admin/customerservice';
import { AdminAni } from './pages/admin/AdminAni';
import { AdminVA } from './pages/admin/AdminVoiceActor';
import { AdminChaFL } from './pages/admin/AdminCha';
import { AdminChaFLLiEd } from './components/admin/AdminCha';
import { AdminVALiEd, AdVaLiEdBtn } from './components/admin/AdminVoiceActor';
import { HomePage, AniList, AniDetail } from './pages';
import './App.css';
import ChaPostDetail from './pages/character/ChaPost/ChaPostDetail';
import { UserLogin, UserJoin, UserMyPage } from './pages/user';
import { MyInfo, MyLikes, MyPosts, MyInquiries } from './components/user/mypage';
import { AdminAniLiEd, AdminAniEdit } from './components/admin/AdminAni';
import { useUser } from './context/UserContext'; // Context Hook Import



function App() {
  const { userType } = useUser(); // Context에서 userType 가져오기
  const [searchLis, setSearchLis] = useState([]);
  const [posts, setPosts] = useState([]); // 초기값을 빈 배열로 변경

  // const handleSavePost = (newPost) => {
  //   setPosts((prevPosts) => [newPost, ...prevPosts]);
  // };
  const handleSavePost = (newPostData) => {
    // const newId = (posts.length + 1).toString();
    const newId =
      posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const newPost = {
      id: newId,
      ...newPostData,
      writer: '새 작성자', // 실제로는 로그인 유저 정보 사용
      date: new Date().toISOString().slice(0, 10),
      views: 0,
      likes: 0,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };
  
  useEffect(() => {
    // 유저 정보 로드
    axios.get('/data/userInfo.json')
      .then(res => setSearchLis(res.data.userInfo))
      .catch(e => console.error('유저 정보 로드 실패:', e));

    // 게시글 정보 로드
    axios.get('/data/userPosts.json')
      .then(res => {
        const postsWithWriter = res.data.map(post => ({
          ...post,
          writer: post.writer || '익명' // writer가 없다면 '익명'으로 표시
        }));
        setPosts(postsWithWriter);
      })
      .catch(e => console.error('게시글 정보 로드 실패:', e));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인/회원가입은 type과 무관하게 접근 가능하도록 분리 */}
        <Route path='/login' element={<UserLogin />} />
        <Route path='/join' element={<UserJoin />} />

        {/* userType이 'admin'이 아닐 때 (guest, user)는 사용자 라우트 렌더링 */}
        {userType !== 'admin' && (
          <Route path="/" element={<AppRoute />}>
            <Route index element={<HomePage Data={''} />} />
            <Route path="/list/:category" element={<AniList />} />
            <Route path="/new" element={''} />
            <Route path="/edit/:id" element={''} />
            <Route path="/detail/:id" element={<AniDetail />} />
            <Route path="/service" element={<ChaService />} />
            <Route path="/chaRankPage" element={<ChaRankPage />} />
            <Route path="/chaLine" element={<ChaLine />} />
            <Route path="/chaPostEdit/:id" element={<ChaPostEdit />} />
            <Route path="/chaCvList" element={<ChaCvList />} />
            <Route path="/chaCvDetail/:id" element={<ChaCvDetail />} />
            <Route path="/chaPost" element={<ChaPost posts={posts} />} />
            <Route
              path="/chaNewPost"
              element={<ChaNewPost onSavePost={handleSavePost} />}
            />
            <Route
              path="/chaPostDetail/:id"
              element={<ChaPostDetail posts={posts} setPosts={setPosts} />}
            />
            
            {/* 마이페이지 라우트 설정 */}
            <Route path="/user" element={<UserMyPage />}>
                <Route index element={<Navigate to="profile" replace />} />
                <Route path="profile" element={<MyInfo />} />
                <Route path="wishlist" element={<MyLikes />} />
                <Route path="posts" element={<MyPosts />} />
                <Route path="inquiry" element={<MyInquiries />} />
                {/* lines 등 추가 가능 */}
            </Route>
          </Route>
        )}

        {/* userType이 'admin'일 때 관리자 라우트 렌더링 */}
        {userType === 'admin' && (
          <Route path="/" element={<AdminRouter />}>
            <Route index element={<AdminBoard />} />
            <Route path="/AdminBoard" element={<AdminBoard />} />
            <Route path="/AdUserLi" element={<AdUserLi />} />
            <Route path="/AdminSetting" element={<AdminSetting />} />
            <Route path="/AdminVA" element={<AdminVA />} />
            <Route path="/AdCuSeAsk" element={<AdCuSeAsk />} />
            <Route path="/AdminVALiEd/:id" element={<AdminVALiEd />} />
            <Route path="/Adedit/:id" element={<AdVaLiEdBtn />} />
            <Route path="/AdNew" element={<AdVaLiEdBtn />} />
            <Route path="/AdminChaFL/*" element={<AdminChaFL />} />
            <Route path="/AdCha/:id" element={<AdminChaFLLiEd />} />
            <Route path="/AdminAni" element={<AdminAni />} />
            <Route path="/AdminAniLiEd/:id" element={<AdminAniLiEd />} />
            <Route path="/AdminAni/edit/:id" element={<AdminAniEdit />} />
          </Route>
        )}

        {/* 예외 처리: userType이 유효하지 않을 때 */}
        {userType !== 'guest' && userType !== 'user' && userType !== 'admin' && (
          <Route path="/" element={<p>정상적이지 않은 접근 입니다.</p>} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
