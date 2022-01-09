"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicines = void 0;
var Medicines = /** @class */ (function () {
    function Medicines(name, dosage, nbOfMedicines) {
        this.name = name;
        this.dosage = dosage;
        this.numberOfMedicines = nbOfMedicines;
    }
    Medicines.prototype.getMedicines = function () {
        return this.name + this.dosage + this.numberOfMedicines;
    };
    return Medicines;
}());
exports.Medicines = Medicines;
