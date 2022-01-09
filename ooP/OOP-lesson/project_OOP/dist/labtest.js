"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Labtest = void 0;
var labAsisstants_1 = require("./labAsisstants");
var Labtest = /** @class */ (function (_super) {
    __extends(Labtest, _super);
    function Labtest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Labtest.prototype.testPerform = function () {
        return this.getPost();
    };
    Labtest.prototype.testDates = function () {
        return this.getDatetest();
    };
    Labtest.prototype.result = function () {
        return this.getName() + this.testPerform() + this.getDatetest();
    };
    return Labtest;
}(labAsisstants_1.labAssistant));
exports.Labtest = Labtest;
