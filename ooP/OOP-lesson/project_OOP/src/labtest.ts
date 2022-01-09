import { labAssistant } from "./labAsisstants"

export class Labtest extends labAssistant{
    testPerform(){
        return this.getPost()
    }
    testDates(){
        return this.getDatetest()
    }
    result(){
        return  this.getName() + this.testPerform() + this.getDatetest()
    }
}