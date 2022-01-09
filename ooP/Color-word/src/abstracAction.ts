export abstract class AbstractAction{
    private text:string
    private isBold:boolean

    constructor(isBold:boolean, text:string){
        this.isBold = isBold
        this.text = text
    }
    getActionName():string{
        return "red"
    }
    do():void{}
    undo():void{}
}