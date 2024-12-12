import { ENV } from '../env';
import { typeLottie } from '../interface';

export const getRuteDir = () => {
    return ENV.RUTE
};

export const getRuteLottie = (lottie: typeLottie) => {
    return `${getRuteDir()}/${lottie}.json`;
};

export const getFetchCodeLottie = async (url: string) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch {
        throw new Error('No se cargo el lottie');
    }
};

export const getDataLottie = async (lottie: typeLottie) => {
    return await getFetchCodeLottie(getRuteLottie(lottie));
};
