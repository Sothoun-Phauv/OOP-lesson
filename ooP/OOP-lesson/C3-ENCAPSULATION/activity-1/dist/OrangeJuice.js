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
exports.__esModule = true;
exports.OrangeJuice = void 0;
var Drink_1 = require("./Drink");
var OrangeJuice = /** @class */ (function (_super) {
    __extends(OrangeJuice, _super);
    function OrangeJuice(name, price, oranges) {
        var _this = _super.call(this, name, price) || this;
        _this.oranges = oranges;
        return _this;
    }
    OrangeJuice.prototype.getDrink = function () {
        return 'Name: ' + this.name + 'Price: ' + this.price + 'Number of orange: ' + this.oranges;
    };
    return OrangeJuice;
}(Drink_1.Drink));
exports.OrangeJuice = OrangeJuice;
