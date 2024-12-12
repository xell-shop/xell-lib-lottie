import React from 'react';
import { typeLottie } from '../../interface';
export interface LottieBaseProps {
    img: typeLottie;
    loop?: boolean;
    play?: boolean;
}
export declare const LottieBase: ({ loop, play, img, }: LottieBaseProps) => React.JSX.Element;
