class WepAlumni{
    epInVue:number;
    epInNode:number;
    canCodeOop:boolean;
    salary:number;
    constructor(epInVue:number,epInNode:number, canCodeOop:boolean, salary:number){
        this.epInVue = epInNode
        this.epInNode = epInNode
        this.canCodeOop = true
        this.salary = salary
    }
    getSalary(WepAlumni){
        if (this.epInNode > 1 && this.epInVue>1 && this.canCodeOop ){
            return students4.salary
        }else if(this.epInVue === 1 && this.epInNode < 1 && this.canCodeOop){
            return students4.salary 
        }else if(this.epInVue ===2 && this.epInNode === 2 && this.canCodeOop){
            return students4.salary
        }else{
            return students4.salary
        }
        
      }
}

let students1 = new WepAlumni(0.5,0.5,true,250);
let students2 = new WepAlumni(1,0.5,true,350);
let students3 = new WepAlumni(2,2,false,450);
let students4 = new WepAlumni(2,2,true,700);
console.log(students4.getSalary(WepAlumni));