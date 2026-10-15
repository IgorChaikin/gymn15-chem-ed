import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from 'react-router-dom';

import NavOutlet from './components/NavOutlet/NavOutlet';

import Home from './pages/Home/Home';
import Mendeleev from './pages/heritage/biography/scientists/Mendeleev/Mendeleev';
import BiographyList from './pages/heritage/biography/BiographyList/BiographyList';
import DigitalTools from './pages/researches/DigitalTools/DigitalTools';

import './App.scss';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<NavOutlet />}>
            <Route path="heritage/biography" element={<BiographyList />} />
            <Route path="heritage/biography/mendeleev" element={<Mendeleev />} />
            <Route path="researches/digital-tools" element={<DigitalTools />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
