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
exports.ColoredPoint = void 0;
var Point_1 = require("./Point");
var ColoredPoint = /** @class */ (function (_super) {
    __extends(ColoredPoint, _super);
    function ColoredPoint(x, y) {
        return _super.call(this, x, y) || this;
    }
    /**
     * Depending on the point position:
     * - if x= 0 => green
     * - else if y= 0 => red
     * - else => yellow
     * @returns the color of the point
     */
    ColoredPoint.prototype.getColor = function () {
        var isColor = "";
        if (this.x === 0) {
            isColor = "green";
        }
        else if (this.y === 0) {
            isColor = "red";
        }
        else {
            isColor = " yellow";
        }
        return isColor;
    };
    return ColoredPoint;
}(Point_1.Point));
exports.ColoredPoint = ColoredPoint;
