

import { Person } from "./person";
import {Patient} from "./patient";
import {Cleaner} from "./cleaner";
import {Departerment} from "./department";
import {Dianose} from "./diagnose";
import {Doctor} from "./doctor";
import { material } from "./material";
import { Medicines } from "./medicines";
import { Nurse } from "./nurse";
import { Room } from "./room";
import { Security } from "./security";
import { Staff } from "./staff";
import { Hostpital } from "./hostpital";
import { Labtest } from "./labtest";


let host = new Hostpital('Phnom Penh International Hospital', 'Blv 2004', '097234241');

let patient = new Patient("Soprnakry", "RTK", 19, "0972045595", "F", "A12", "January 20, 2002");
let cleaner = new Cleaner(1200, "7:00-5:00","Sereypheak", "Ratanakiry", 21, "0972045595", "F" );
let room = new Room('A34', false);

let dep = new Departerment("ReyKa", "Blv street", "24/7");


let diag = new Dianose(patient.getName());
let doc = new Doctor(1800, "Heart attack", "Silva", "Argentinal", 29, "+885 23593343","M");
let mater = new material('bloodbag', 'For ICU');
let med = new Medicines('Tetracyclen', 'Reduce fever', 3);
let nus = new Nurse('Kid', 1200, 'Salika','Phnom Penh', 24, '0972345343','M');

let sec = new Security("day", "PHNOM PENH", 'Ronata', 34, "0974534323", "M", 1100);

let staff = new Staff('null','null',0,'null','null', 'null',false, 'null');
let lab = new Labtest('CVT', 'UTRA','12/09/201');

// add diagnose

diag.addLabTest(lab)
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
dep.addRoom(room)

// doctor add dianose
doc.addDiag(diag)

// add staff

host.addStaff(staff);
host.addPatient(patient);
host.addMeterial(mater);


//console log

console.log(diag);
console.log(patient);
console.log(doc);
console.log(room);

console.log(staff);

console.log(host);
