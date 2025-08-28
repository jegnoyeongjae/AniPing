import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoute from './router/AppRouter'
import AdminRouter from './router/AdminRouter'
import { HomePage } from './pages'
import { AdminBoard, AdUserLi } from './pages/admin'
import { useState, useEffect } from 'react'
import { ChaService, ChaRankPage, ChaLine, ChaCvList, ChaCvDetail} from './pages/character/chracter'
import { HomePage,AniList,AnimeDetail } from './pages'
import axios from 'axios'
import './App.css'

function App() {
  const [type, setType] = useState('user');
  const [searchLis, setSearchLis] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('/data/userInfo.json');
      const data = response.data.userInfo;
      setSearchLis(data);
    } catch (e) {
      console.error('데이터 로드에 실패했습니다.');
    }
  }


  return (
    <BrowserRouter>
      <Routes>

        {type === 'user' && (
          <Route path="/" element={<AppRoute />}>
            <Route index element={<HomePage Data={''} />} />
            <Route path="/list" element={<AniList/>}/>
            <Route path="/new" element={''} />
            <Route path="/edit/:id" element={''} />
            {/* <Route path="/edit/:id" element={<EditPage todos={todos} onUpdateTodo={onUpdateTodo} />} /> */}
            <Route path="/detail/:id" element={<AnimeDetail/>}/>
            {/* <Route path="/detail/:id" element={
            isLoaded ? <DetailPage todos={todos} onRemove={onRemove} changeIsDone={changeIsDone} /> : <p>데이터 로딩 중...</p>
          } /> */}
            <Route path="/service" element={<ChaService />} />
            <Route path="/chaRankPage" element={<ChaRankPage />} />
            <Route path="/chaLine" element={<ChaLine />} />
            <Route path="/chaCvList" element={<ChaCvList />} />
            <Route path="/chaCvDetail/:id" element={<ChaCvDetail />} />
          </Route>
        )}

        {type === 'admin' && (
          <Route path="/" element={<AdminRouter />}>
            <Route path="/AdminBoard" element={<AdminBoard />} />
            <Route path="/AdUserLi" element={<AdUserLi searchLis={searchLis} />} />
          </Route>
        )}

        {type !== 'user' && type !== 'admin' && (
          <Route path="/" element={<p>정상적이지 않은 접근 입니다.</p>} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
