import type { GradImgCardCSSProps, GradImgCardProps } from './types';

import './GradImgCard.scss';

function GradImgCard({imgSrc, children, title = '', subtitle = ''}: GradImgCardProps) {
  return (<section className="column grad-img-card"
    style={{'--bg-img-src': `url("${imgSrc}")`} as GradImgCardCSSProps}>
    <div className="column grad-img-card__header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    <div className="grad-img-card__content">
      {children}
    </div>
  </section>);
}

export default GradImgCard