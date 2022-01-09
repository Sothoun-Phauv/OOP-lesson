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
exports.MiniVan = void 0;
var Vehicle_1 = require("./Vehicle");
var MiniVan = /** @class */ (function (_super) {
    __extends(MiniVan, _super);
    function MiniVan(plateID, weight, nbCustomers, nbLaggage) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.nbCustomers = nbCustomers;
        _this.nbLaggage = nbLaggage;
        return _this;
    }
    MiniVan.prototype.getSpeed = function () {
        var speed = 130;
        for (var nbOfCustomer = 0; nbOfCustomer < this.nbCustomers; nbOfCustomer++) {
            speed -= 10;
        }
        for (var nbOfLaggage = 0; nbOfLaggage < this.nbLaggage; nbOfLaggage++) {
            speed -= 5;
        }
        return speed;
    };
    return MiniVan;
}(Vehicle_1.Vehicle));
exports.MiniVan = MiniVan;
