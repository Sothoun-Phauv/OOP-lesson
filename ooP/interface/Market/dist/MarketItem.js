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
var MusicInstucment = /** @class */ (function () {
    function MusicInstucment(price, isNew) {
        this.price = price;
        this.isNews = isNew;
    }
    MusicInstucment.prototype.getPrice = function () {
        return this.price;
    };
    ;
    MusicInstucment.prototype.isNew = function () {
        return this.isNews;
    };
    ;
    return MusicInstucment;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(price, isNew, name) {
        var _this = _super.call(this, price, isNew) || this;
        _this.name = name;
        return _this;
    }
    Book.prototype.getPrice = function () {
        return this.getPrice();
    };
    ;
    Book.prototype.isNew = function () {
        return this.isNew();
    };
    ;
    return Book;
}(MusicInstucment));
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano(brand, price, isNew) {
        var _this = _super.call(this, price, isNew) || this;
        _this.brand = brand;
        return _this;
    }
    Piano.prototype.getPrice = function () {
        return this.getPrice();
    };
    Piano.prototype.isNew = function () {
        return this.isNew();
    };
    return Piano;
}(MusicInstucment));
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar(price, isNew, nbString) {
        var _this = _super.call(this, price, isNew) || this;
        _this.numberOfstring = nbString;
        return _this;
    }
    return Guitar;
}(MusicInstucment));
var Market = /** @class */ (function () {
    function Market() {
        this.items = [];
    }
    Market.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Market.prototype.getNewItemForPrice = function (price) {
    };
    return Market;
}());
var piano = new Piano('test', 100, false);
console.log(piano.getPrice());
