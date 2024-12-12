"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LottieCajaOpenClose = exports.LottieCajas = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Base_1 = require("../Base");
const LottieCajas = ({}) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Base_1.LottieBase, { img: 'lottieCajas' })));
};
exports.LottieCajas = LottieCajas;
const LottieCajaOpenClose = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Base_1.LottieBase, { img: 'lottieCajaOpenClose' })));
};
exports.LottieCajaOpenClose = LottieCajaOpenClose;
//# sourceMappingURL=index.js.map