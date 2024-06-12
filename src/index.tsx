import { typeLottie } from './typeLottie';

export const getRuteDir = () => {
    return process?.env?.['NEXT_PUBLIC_LOTTIE'] ?? `/`;
};

export const getRuteLottie = (lottie: typeLottie) => {
    return `${getRuteDir()}/${lottie}.json`;
};

export const getFetchCodeLottie = async (url: string) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            return {};
        }
    } catch {
        return {};
    }
};

export const getDataLottie = async (lottie: typeLottie) => {
    return await getFetchCodeLottie(getRuteLottie(lottie));
};
