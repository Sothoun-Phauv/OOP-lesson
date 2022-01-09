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
var Operation = /** @class */ (function () {
    function Operation(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    return Operation;
}());
// TODO 1 : Create a class AddOperation, which extends Operation
//          doOpenration must return the sum of the 2 numbers
var AddOperation = /** @class */ (function (_super) {
    __extends(AddOperation, _super);
    function AddOperation(number1, number2) {
        return _super.call(this, number1, number2) || this;
    }
    AddOperation.prototype.doOperation = function () {
        return this.number1 + this.number2;
    };
    return AddOperation;
}(Operation));
// TODO 2 : Create a class MultiplyOperation, which extends Operation
//          doOpenration must return the multiplication of the 2 numbers
var MultiplyOperation = /** @class */ (function (_super) {
    __extends(MultiplyOperation, _super);
    function MultiplyOperation(number1, number2) {
        return _super.call(this, number1, number2) || this;
    }
    MultiplyOperation.prototype.doOperation = function () {
        return this.number1 * this.number2;
    };
    return MultiplyOperation;
}(Operation));
var number1 = new AddOperation(1, 1);
var number2 = new MultiplyOperation(2, 2);
console.log(number1.doOperation());
console.log(number2.doOperation());
