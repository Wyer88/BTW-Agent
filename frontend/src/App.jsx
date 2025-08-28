// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Battle from './pages/Battle.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<About />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
