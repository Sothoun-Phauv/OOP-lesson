import { Labtest } from "./labtest"


export class Dianose{
    private labtest:Labtest[] =[]
    constructor(private symtomp:string){}
    getSymtomp(){
        return this.symtomp
    }
    addLabTest(lab:Labtest){
        return this.labtest.push(lab);
    }

}