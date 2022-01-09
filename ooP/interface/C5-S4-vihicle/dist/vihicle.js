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
var Vihicle = /** @class */ (function () {
    function Vihicle(plateID, weight) {
        this.plateID = plateID;
        this.weight = weight;
    }
    return Vihicle;
}());
var BatMobile = /** @class */ (function (_super) {
    __extends(BatMobile, _super);
    function BatMobile(isBatmanHere, plateID, weight) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.isBatmanHere = isBatmanHere;
        return _this;
    }
    BatMobile.prototype.getSpeed = function () {
        var speed = 110;
        if (this.isBatmanHere === true) {
            speed = 500;
        }
        return speed;
    };
    return BatMobile;
}(Vihicle));
var MiniVan = /** @class */ (function (_super) {
    __extends(MiniVan, _super);
    function MiniVan(numCustomers, numberLuggage, plateID, weight) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.numberCustomers = numCustomers;
        _this.numberLuggage = numberLuggage;
        return _this;
    }
    MiniVan.prototype.getSpeed = function () {
        return 130 - ((this.numberCustomers * 10) + (this.numberLuggage * 5));
    };
    return MiniVan;
}(Vihicle));
var TocToc = /** @class */ (function (_super) {
    __extends(TocToc, _super);
    function TocToc(numberCustomers, plateID, weight) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.numberCustomers = numberCustomers;
        return _this;
    }
    TocToc.prototype.getSpeed = function () {
        return 130 - (this.numberCustomers * 5);
    };
    return TocToc;
}(Vihicle));
var batMobie = new BatMobile(false, '120ER', 2903);
console.log(batMobie.getSpeed());
var minivan = new MiniVan(0, 0, '134ED', 12);
console.log(minivan.getSpeed());
