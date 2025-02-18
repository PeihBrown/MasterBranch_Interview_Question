import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import MainLayout from '../layouts/MainLayout'

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}