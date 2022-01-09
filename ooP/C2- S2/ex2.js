var WepAlumni = /** @class */ (function () {
    function WepAlumni(epInVue, epInNode, canCodeOop, salary) {
        this.epInVue = epInNode;
        this.epInNode = epInNode;
        this.canCodeOop = true;
        this.salary = salary;
    }
    WepAlumni.prototype.getSalary = function (WepAlumni) {
        if (this.epInNode > 1 && this.epInVue > 1 && this.canCodeOop) {
            return students4.salary;
        }
        else if (this.epInVue === 1 && this.epInNode < 1 && this.canCodeOop) {
            return students4.salary;
        }
        else if (this.epInVue === 2 && this.epInNode === 2 && this.canCodeOop) {
            return students4.salary;
        }
        else {
            return students4.salary;
        }
    };
    return WepAlumni;
}());
var students1 = new WepAlumni(0.5, 0.5, true, 250);
var students2 = new WepAlumni(1, 0.5, true, 350);
var students3 = new WepAlumni(2, 2, false, 450);
var students4 = new WepAlumni(2, 2, true, 700);
console.log(students4.getSalary(WepAlumni));
