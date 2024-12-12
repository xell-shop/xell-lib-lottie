"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LottieBase = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_lottie_player_1 = tslib_1.__importDefault(require("react-lottie-player"));
const hook_1 = require("./hook");
const xell_lib_fenextjs_1 = require("@xell-shop/xell-lib-fenextjs");
const LottieBase = ({ loop = true, play = true, img, }) => {
    const { error, result } = (0, hook_1.useLottieBase)({ img });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        error && (react_1.default.createElement("div", null,
            react_1.default.createElement(xell_lib_fenextjs_1.ErrorComponent, { error: error }))),
        result && (react_1.default.createElement(react_lottie_player_1.default, { loop: loop, play: play, animationData: result }))));
};
exports.LottieBase = LottieBase;
//# sourceMappingURL=index.js.map