import React from 'react'
import { LottieBase } from '../Base';

export interface LottieLoaderProps {}
export const LottieLoader = ({}: LottieLoaderProps) => {
    return (
        <>
            <LottieBase img={'lottieLoader'} />
        </>
    );
};
