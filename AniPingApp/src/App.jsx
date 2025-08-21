import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppRoute from './router/AppRouter'
import { HomePage } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route index element={<HomePage Data={''} />} />
          <Route path="/list" element={''} />
          <Route path="/new" element={''} />
          <Route path="/edit/:id" element={''} />
          {/* <Route path="/edit/:id" element={<EditPage todos={todos} onUpdateTodo={onUpdateTodo} />} /> */}
          <Route path="/detail/:id" element={''} />
          {/* <Route path="/detail/:id" element={
            isLoaded ? <DetailPage todos={todos} onRemove={onRemove} changeIsDone={changeIsDone} /> : <p>데이터 로딩 중...</p>
          } /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
