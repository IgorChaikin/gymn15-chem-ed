import { Link } from 'react-router-dom';

import './BiographyList.scss';

function BiographyList() {
  return (<>
    <h1>Биографии</h1>
    <ol>
      <li><Link to="/docs/heritage/biography/mendeleev">Дмитрий Иванович Менделеев</Link></li>
      <li><Link to="/docs/heritage/biography">Александр Михайлович Бутлеров</Link></li>
      <li><Link to="/docs/heritage/biography">Николай Николаевич Зинин</Link></li>
      <li><Link to="/docs/heritage/biography">Владимир Васильевич Марковников</Link></li>
      <li><Link to="/docs/heritage/biography">Сергей Васильевич Лебедев</Link></li>
    </ol>
  </>);
}

export default BiographyList