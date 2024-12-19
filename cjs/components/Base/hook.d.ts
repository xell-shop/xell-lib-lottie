import { typeLottie } from '../../interface';
export interface useLottieBaseProps {
    img: typeLottie;
}
export declare const useLottieBase: ({ img }: useLottieBaseProps) => {
    error: any;
    loader: boolean;
    result: any;
    url: string;
};
