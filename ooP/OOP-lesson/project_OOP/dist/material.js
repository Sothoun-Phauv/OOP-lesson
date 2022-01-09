"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.material = void 0;
var material = /** @class */ (function () {
    function material(name, typeOfMaterial) {
        this.name = name;
        this.typeOfMaterial = typeOfMaterial;
    }
    material.prototype.getName = function () {
        return this.name;
    };
    material.prototype.getTypeOfMaterial = function () {
        return this.typeOfMaterial;
    };
    return material;
}());
exports.material = material;
