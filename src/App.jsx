import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  const [type, setType] = useState('user');
  const [searchLis, setSearchLis] = useState([]);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '제목11111111111111111111111111111111111111',
      writer: '작성자1',
      date: '2025.08.01',
      content:
        '내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123',
      views: 31,
      like: 30,
    },
    {
      id: 2,
      title: '제목22222222222222222222222222222222222222222',
      writer: '작성자1',
      date: '2025.08.01',
      content:
        '내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123',
      views: 31,
      like: 30,
    },
    {
      id: 3,
      title: '제목3333333333333333333333333333333333333333',
      writer: '작성자1',
      date: '2025.08.01',
      content:
        '내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123',
      views: 31,
      like: 30,
    },
    {
      id: 4,
      title: '제목22222222222222222222222222222222222222222',
      writer: '작성자1',
      date: '2025.08.01',
      content:
        '내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123',
      views: 31,
      like: 30,
    },
    {
      id: 5,
      title: '제목22222222222222222222222222222222222222222',
      writer: '작성자1',
      date: '2025.08.01',
      content:
        '내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123',
      views: 31,
      like: 30,
    },
    {
      id: 6,
      title: '제목22222222222222222222222222222222222222222',
      writer: '작성자1',
      date: '2025.08.01',
      content:
        '내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123',
      views: 31,
      like: 30,
    },
    {
      id: 7,
      title: '제목22222222222222222222222222222222222222222',
      writer: '작성자1',
      date: '2025.08.01',
      content:
        '내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123내용123',
      views: 31,
      like: 30,
    },
  ]);
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
      writer: '새 작성자',
      title: newPostData.title,
      content: newPostData.content,
      date: new Date().toISOString().slice(0, 10),
      views: 0,
      like: 1,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/data/userInfo.json');
      const data = response.data.userInfo;
      setSearchLis(data);
    } catch (e) {
      console.error('데이터 로드에 실패했습니다.');
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {type === 'user' && (
          <Route path="/" element={<AppRoute />}>
            <Route index element={<HomePage Data={''} />} />
            <Route path="/list/:category" element={<AniList />} />
            <Route path="/new" element={''} />
            <Route path="/edit/:id" element={''} />
            {/* <Route path="/edit/:id" element={<EditPage todos={todos} onUpdateTodo={onUpdateTodo} />} /> */}

            <Route path="/detail/:id" element={<AniDetail />} />
            {/* <Route path="/detail/:id" element={
            isLoaded ? <DetailPage todos={todos} onRemove={onRemove} changeIsDone={changeIsDone} /> : <p>데이터 로딩 중...</p>
          } /> */}
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
          </Route>
        )}

        {type === 'admin' && (
          <Route path="/" element={<AdminRouter />}>
            <Route path="/AdminBoard" element={<AdminBoard />} />
            <Route path="/AdUserLi" element={<AdUserLi />} />
            <Route path="/AdminSetting" element={<AdminSetting />} />
            <Route path="/AdminVA" element={<AdminVA />} />
            <Route path="/AdCuSeAsk" element={<AdCuSeAsk />} />
            <Route path="/AdminVALiEd/:id" element={<AdminVALiEd />} />
            <Route path="/Adedit/:id" element={<AdVaLiEdBtn />} />
            <Route path="/AdNew" element={<AdVaLiEdBtn />} />
            <Route path="/AdminChaFL/*" element={<AdminChaFL />} />
            {/* <Route path="/AdChaNew" element={<AdminChaFLLiEd />} /> */}
            <Route path="/AdCha/:id" element={<AdminChaFLLiEd />} />
            <Route path="/AdminAni" element={<AdminAni />} />
          </Route>
        )}

        {type !== 'user' && type !== 'admin' && (
          <Route path="/" element={<p>정상적이지 않은 접근 입니다.</p>} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
