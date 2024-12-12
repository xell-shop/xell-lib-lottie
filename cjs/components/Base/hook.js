"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLottieBase = void 0;
const get_1 = require("../../get");
const fenextjs_1 = require("fenextjs");
const react_1 = require("react");
const xell_lib_error_1 = require("@xell-shop/xell-lib-error");
const useLottieBase = ({ img }) => {
    const { parseError } = (0, xell_lib_error_1.useError)();
    const { error, loader, result, onRequest } = (0, fenextjs_1.useRequestLite)({
        f: async () => await (0, get_1.getDataLottie)(img),
    });
    (0, react_1.useEffect)(() => {
        onRequest({});
    }, []);
    return {
        error: parseError(error),
        loader,
        result,
        url: (0, get_1.getRuteLottie)(img),
    };
};
exports.useLottieBase = useLottieBase;
//# sourceMappingURL=hook.js.map