import { AbstractAction } from "./abstracAction";

class TextAction extends AbstractAction{
    private oldText:string
    private newText:string
    constructor(oldText:string, newText:string,text:string, isBold:boolean){
        super(isBold,text)
        this.newText = newText
        this.oldText = oldText

    }
    getActionName():string{
        return "red"
    }
    do():void{}
    undo():void{}
}