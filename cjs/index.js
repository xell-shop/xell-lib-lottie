"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataLottie = exports.getFetchCodeLottie = exports.getRuteLottie = exports.getRuteDir = void 0;
const getRuteDir = () => {
    return process?.env?.['NEXT_PUBLIC_LOTTIE'] ?? `/`;
};
exports.getRuteDir = getRuteDir;
const getRuteLottie = (lottie) => {
    return `${(0, exports.getRuteDir)()}/${lottie}.json`;
};
exports.getRuteLottie = getRuteLottie;
const getFetchCodeLottie = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch {
        throw new Error('No se cargo el lottie');
    }
};
exports.getFetchCodeLottie = getFetchCodeLottie;
const getDataLottie = async (lottie) => {
    return await (0, exports.getFetchCodeLottie)((0, exports.getRuteLottie)(lottie));
};
exports.getDataLottie = getDataLottie;
//# sourceMappingURL=index.js.map