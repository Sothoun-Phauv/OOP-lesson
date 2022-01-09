"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dianose = void 0;
var Dianose = /** @class */ (function () {
    function Dianose(symtomp) {
        this.symtomp = symtomp;
        this.labtest = [];
    }
    Dianose.prototype.getSymtomp = function () {
        return this.symtomp;
    };
    Dianose.prototype.addLabTest = function (lab) {
        return this.labtest.push(lab);
    };
    return Dianose;
}());
exports.Dianose = Dianose;
