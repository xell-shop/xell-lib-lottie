import React from 'react';
import Lottie from 'react-lottie-player';
import { typeLottie } from '../../interface';
import { useLottieBase } from './hook';
import { ErrorComponent } from '@xell-shop/xell-lib-fenextjs';
export interface LottieBaseProps {
    img: typeLottie;
    loop?: boolean;
    play?: boolean;
}
export const LottieBase = ({
    loop = true,
    play = true,
    img,
}: LottieBaseProps) => {
    const { error, result } = useLottieBase({ img });
    return (
        <>
            {error && (
                <div>
                    <ErrorComponent error={error} />
                </div>
            )}
            {result && (
                <Lottie loop={loop} play={play} animationData={result} />
            )}
        </>
    );
};
