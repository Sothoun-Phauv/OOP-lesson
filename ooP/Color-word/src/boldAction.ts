import { AbstractAction } from "./abstracAction";

class BoldAction extends AbstractAction{
    private oldBold:boolean
    private newBold:boolean
    constructor(oldBold:boolean, newBold:boolean, isBold:boolean, text:string){
        super(isBold, text)
        this.oldBold = oldBold
        this.newBold = newBold
    }
    

    getActionName():string{
        return this.getActionName()
    }
    do():void{
        
    }
    undo():void{
        
    }

}