import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

export type Page = 'chat' | 'library' | 'graph' | 'insights'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"    element={<LandingPage />} />
        <Route path="/app" element={<LandingPage />} />
        <Route path="*"    element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
