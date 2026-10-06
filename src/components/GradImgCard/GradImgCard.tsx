import type { GradImgCardCSSProps, GradImgCardProps } from './types';

import './GradImgCard.scss';

function GradImgCard({imgSrc, children}: GradImgCardProps) {
  return (<section className="column grad-img-card"
    style={{'--bg-img-src': `url("${imgSrc}")`} as GradImgCardCSSProps}>
        {children}
    </section>);
}

export default GradImgCard