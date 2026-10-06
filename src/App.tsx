import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from 'react-router-dom';


import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Biography from './pages/heritage/Biography/Biography';

import './App.scss';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <main className="column" id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heritage/biography" element={<Biography />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
