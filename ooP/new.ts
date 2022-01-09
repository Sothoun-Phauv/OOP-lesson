// class Point {
//     x:number;
//     y:number;
//     constructor(x:number,y:number){
//         this.x = x;
//         this.y = y;
//     }
//     transpoeX(deltaX:number){
//         return new Point(this.x + deltaX, this.y);
//     }
// }

// let p1 = new Point(10,20);
// let p2 = p1.transpoeX(40);

// console.log("X=" + p2.x, "y=" + p2.y);

// class Student {
//     scoreInEnglish:number;
//     scoreInMath:number;
//     constructor(scoreInEnglish:number,scoreInMath:number){
//         this.scoreInEnglish = scoreInEnglish;
//         this.scoreInMath = scoreInMath;

//     }
//     compute():number{
//         return (this.scoreInEnglish + this.scoreInMath)/2;
//     }
// }
// let student1 = new Student(40,60);
// console.log(student1.compute());
// class Employee{
//     name: string;
//     city: string;
//     yearIncompagny: number =3

//     constructor(name: string, city:string, yearIncompagny:number){
//         if(this.yearIncompagny ===3){
//             this.name = name;
//             this.city =city;
//             this.yearIncompagny = yearIncompagny;
//         }
        
//     }
// }

// let staff = new Employee("Sovannda","Cambodia",3);
// console.log("name: " + staff.name , "City: " + staff.city,"Year: ", (staff.yearIncompagny));
class Box{
    width: number;
    height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.height * this.width;
    }

    getPerimeter(){
        return (this.height + this.width) * 2;
    }
}