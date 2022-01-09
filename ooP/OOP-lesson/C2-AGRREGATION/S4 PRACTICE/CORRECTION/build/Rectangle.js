"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.area = this.width * this.height;
    }
    return Rectangle;
}());
var smallRectangle = new Rectangle(4, 6);
console.log(smallRectangle);
smallRectangle.width = 50;
console.log(smallRectangle);
