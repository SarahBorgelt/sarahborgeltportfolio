import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainNav from './components/MainNav/MainNav'
import Footer from './components/Footer/Footer'
import HomeView from './views/HomeView/HomeView';
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <div id="app">
          <header id="app-header">
              <Header/>
          </header>
            <nav id="main-nav">
              <MainNav />
            </nav>
            <main id="main-content">
              <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<div>About</div>} />
              </Routes>
            </main>
            <footer id = "app-footer">
              <Footer/>
            </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
