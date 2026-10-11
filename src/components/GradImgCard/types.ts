import type { CSSProperties, ReactNode } from "react";

export interface GradImgCardProps {
    children: ReactNode | ReactNode[];
    imgSrc: string;
    title?: string;
    subtitle?: string;
}

export type GradImgCardCSSProps = CSSProperties & {'--bg-img-src': string}