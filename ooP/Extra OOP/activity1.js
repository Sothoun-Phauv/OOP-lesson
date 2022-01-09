"use strict";
var Rectangle = /** @class */ (function () {
    // ​private area: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.setHeight = function (newHeight) {
        this.height = newHeight;
    };
    Rectangle.prototype.setWidth = function (newWidth) {
        this.width = newWidth;
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var smallRectangle = new Rectangle(4, 8);
smallRectangle.setWidth(50);
console.log(smallRectangle.getArea());
