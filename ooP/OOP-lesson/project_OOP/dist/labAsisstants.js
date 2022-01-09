"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labAssistant = void 0;
var labAssistant = /** @class */ (function () {
    function labAssistant(name, post, testDate) {
        this.name = name;
        this.post = post;
        this.testDate = testDate;
    }
    labAssistant.prototype.getName = function () {
        return this.name;
    };
    labAssistant.prototype.getPost = function () {
        return this.post;
    };
    labAssistant.prototype.getDatetest = function () {
        return this.testDate;
    };
    return labAssistant;
}());
exports.labAssistant = labAssistant;
