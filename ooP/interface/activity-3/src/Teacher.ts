import {Person} from "./Person"


class Teacher extends Person implements SkillPerson{
    private skills:string[]
    constructor(skills:string[], age:string, id:number, name:string){
        super(age, id, name)
        this.skills = skills
        
    }
    getSkills():string[]{
        return this.skills
    }
}