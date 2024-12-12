import React from 'react';
import { LottieBase } from '../Base';

export interface LottieCajasProps {}
export const LottieCajas = ({}: LottieCajasProps) => {
    return (
        <>
            <LottieBase img={'lottieCajas'} />
        </>
    );
};

export const LottieCajaOpenClose = () => {
    return (
        <>
            <LottieBase img={'lottieCajaOpenClose'} />
        </>
    );
};
