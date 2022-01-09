var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.setWidth = function (newWidth) {
        return this.width = newWidth;
    };
    Rectangle.prototype.setHeight = function (newHeight) {
        return this.height = newHeight;
    };
    Rectangle.prototype.getArea = function () {
        return this.area = this.width * this.height;
    };
    return Rectangle;
}());
var smallRectangle = new Rectangle(4, 8);
smallRectangle.setWidth(50);
console.log(smallRectangle.getArea());
