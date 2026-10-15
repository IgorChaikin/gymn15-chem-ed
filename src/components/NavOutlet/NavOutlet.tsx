import { Outlet } from 'react-router-dom';

import './NavOutlet.scss';
import NavBackBtn from '../NavBackBtn/NavBackBtn';

function NavOutlet() {
  return (<div className="column column-stretch nav-outlet">
      <nav className="row">
        <NavBackBtn />
      </nav>
      <main className="column column-stretch chem-bg">
        <Outlet></Outlet>
      </main>
    </div>)
}

export default NavOutlet