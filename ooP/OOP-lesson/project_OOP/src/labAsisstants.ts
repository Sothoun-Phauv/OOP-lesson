

export class labAssistant{
    private name:string
    private post:string
    private testDate:string
    constructor(name:string, post:string, testDate:string){
        this.name = name
        this.post = post
        this.testDate = testDate
    }
    getName(){
        return this.name
    }
    getPost(){
        return this.post
    }
    getDatetest(){
        return this.testDate
    }
}