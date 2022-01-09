
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(string)

	2 -  For all the functions : add the parameter types and return type

	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions

*/
type Person = {name:string, nationality:string, salary:string};
let person = {name:"somoun", nationality:"Cambodian", salary:"2454000"};
let person1 = {name:"Keomsak", nationality:"Cambodian", salary:"2454000"};
let person2 = {name:"Dara", nationality:"Cambodian", salary:"2454000"};
function getName(person:Person):string {
  return person.name;
}

function sumSalaries(person1:Person, person2:Person):string {
  return person1.salary + person2.salary;
}

function isFrench(person:Person):boolean {
  return person.nationality == "French";
}
console.log(getName(person));