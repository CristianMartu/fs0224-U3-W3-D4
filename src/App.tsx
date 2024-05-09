import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage'
import ArticleDetails from './components/ArticleDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article:articleID" element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
