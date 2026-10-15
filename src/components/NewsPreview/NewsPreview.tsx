import { Link } from 'react-router-dom';

import type { NewsPreviewProps } from './types';

import './NewsPreview.scss';


function NewsPreview({imgSrc, title, date, link}: NewsPreviewProps) {
  const linkText = 'Читать далее »';
  const formattedDate = Intl.DateTimeFormat("ru-RU").format(new Date(date));

  return (<article className="row news-preview">
    <img src={imgSrc}></img>
    <section className="column">
      <p><b>{formattedDate}</b></p>
      <h3>{title}</h3>
      <Link to={link}>{linkText}</Link>
    </section>
  </article>);
}

export default NewsPreview