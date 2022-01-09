"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patient_1 = require("./patient");
var cleaner_1 = require("./cleaner");
var department_1 = require("./department");
var diagnose_1 = require("./diagnose");
var doctor_1 = require("./doctor");
var material_1 = require("./material");
var medicines_1 = require("./medicines");
var nurse_1 = require("./nurse");
var room_1 = require("./room");
var security_1 = require("./security");
var staff_1 = require("./staff");
var hostpital_1 = require("./hostpital");
var labtest_1 = require("./labtest");
var host = new hostpital_1.Hostpital('Phnom Penh International Hospital', 'Blv 2004', '097234241');
var patient = new patient_1.Patient("Soprnakry", "RTK", 19, "0972045595", "F", "A12", "January 20, 2002");
var cleaner = new cleaner_1.Cleaner(1200, "7:00-5:00", "Sereypheak", "Ratanakiry", 21, "0972045595", "F");
var room = new room_1.Room('A34', false);
var dep = new department_1.Departerment("ReyKa", "Blv street", "24/7");
var diag = new diagnose_1.Dianose(patient.getName());
var doc = new doctor_1.Doctor(1800, "Heart attack", "Silva", "Argentinal", 29, "+885 23593343", "M");
var mater = new material_1.material('bloodbag', 'For ICU');
var med = new medicines_1.Medicines('Tetracyclen', 'Reduce fever', 3);
var nus = new nurse_1.Nurse('Kid', 1200, 'Salika', 'Phnom Penh', 24, '0972345343', 'M');
var sec = new security_1.Security("day", "PHNOM PENH", 'Ronata', 34, "0974534323", "M", 1100);
var staff = new staff_1.Staff('', '', 0, '', '', '', false, '');
var lab = new labtest_1.Labtest('CVT', 'UTRA', '12/09/201');
// add diagnose
diag.addLabTest(lab);
//patient add diag
patient.addDiag(diag);
//add midecines
room.addMedic(med);
room.isRoomAvaibles(patient);
//add staff
staff.addNurses(nus);
staff.addSecurity(sec);
staff.addStaff(doc);
// add room
dep.addRoom(room);
// doctor add dianose
doc.addDiag(diag);
// add staff
host.addStaff(staff);
host.addPatient(patient);
host.addMeterial(mater);
//console log
console.log("Patient name: " + patient.displayInformation());
console.log("Patient age:" + patient.getAge());
console.log(diag);
console.log(patient);
console.log(doc);
console.log(room);
console.log(staff);
console.log(host);
