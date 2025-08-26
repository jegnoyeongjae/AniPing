import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppRoute from './router/AppRouter'
import AdminRouter from './router/AdminRouter'
import { HomePage } from './pages'
import AdminBoard from './pages/admin/AdminBoard'
import { useState } from 'react'

function App() {
  const [type, setType] = useState('admin');

  return (
    <BrowserRouter>
      <Routes>
        {type === 'user' && (
          <Route path="/" element={<AppRoute />}>
            <Route index element={<HomePage Data={''} />} />
            <Route path="/list" element={''} />
            <Route path="/new" element={''} />
            <Route path="/edit/:id" element={''} />
            <Route path="/detail/:id" element={''} />
          </Route>
        )}

        {type === 'admin' && (
          <Route path="/" element={<AdminRouter />}>
            <Route path="AdminBoard" element={<AdminBoard />} />
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
