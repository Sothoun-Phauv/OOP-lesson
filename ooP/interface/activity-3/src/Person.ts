import { Resource } from "./Resource";

export class Person extends Resource implements NamedResource{
     protected age:string
     protected name:string
     constructor(age:string, id:number, name:string){
         super(id)
         this.age = age
         this.name = name

     }
     getName(){
         return this.name
     }
}