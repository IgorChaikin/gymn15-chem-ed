import { 
  useLocation, 
  useNavigate, 
} from 'react-router-dom';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './NavBackBtn.scss';

function NavBackBtn() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const navBackCallback = useCallback(() => navigate(-1), [navigate]);

  if(isHomePage) {
    console.log('home');
  } else {
    console.log('page');
  }

  return (<button inert={isHomePage} 
    hidden={isHomePage}
    disabled={isHomePage}
    className="nav-back-btn" 
    onClick={navBackCallback}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>)
}

export default NavBackBtn