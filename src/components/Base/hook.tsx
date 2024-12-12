import { typeLottie } from '../../interface';
import { getDataLottie, getRuteLottie } from '../../get';
import { useRequestLite } from 'fenextjs';
import { useEffect } from 'react';
import { useError } from '@xell-shop/xell-lib-error';

export interface useLottieBaseProps {
    img: typeLottie;
}

export const useLottieBase = ({ img }: useLottieBaseProps) => {
    const { parseError } = useError();
    const { error, loader, result, onRequest } = useRequestLite({
        f: async () => await getDataLottie(img),
    });
    useEffect(() => {
        onRequest({});
    }, []);

    return {
        error: parseError(error),
        loader,
        result,
        url: getRuteLottie(img),
    };
};