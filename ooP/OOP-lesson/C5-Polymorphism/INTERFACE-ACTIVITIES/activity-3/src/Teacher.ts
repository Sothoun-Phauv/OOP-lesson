import { Person } from "./Person"
export class Teacher extends Person implements SkilledResource{
    private skill: string[];
    constructor(id:string, age:string, skill:string[]){
        super(id, age)
        this.skill = skill;
    }
    getSkill():string[]{
        return this.skill
    }
}