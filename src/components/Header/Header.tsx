import { 
  useLocation, 
  useNavigate, 
} from 'react-router-dom';
import { useCallback } from 'react';

import './Header.scss';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const navBackCallback = useCallback(() => navigate(-1), [navigate]);

  return (<header className="row header">
        {!isHomePage && (
            <button onClick={navBackCallback}>← Back</button>
        )}
    </header>)
}

export default App