import { typeLottie } from '../../interface';
export interface useLottieBaseProps {
    img: typeLottie;
}
export declare const useLottieBase: ({ img }: useLottieBaseProps) => {
    error: import("@byte4bit-fenextjs/fenextjs").ErrorFenextjs<any> | undefined;
    loader: boolean;
    result: any;
    url: string;
};
