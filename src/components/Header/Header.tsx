import { 
  useLocation, 
  useNavigate, 
} from 'react-router-dom';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const navBackCallback = useCallback(() => navigate(-1), [navigate]);

  return (<header className="row header">
        {!isHomePage && (
          <button className="header__back-btn" onClick={navBackCallback}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
    </header>)
}

export default Header