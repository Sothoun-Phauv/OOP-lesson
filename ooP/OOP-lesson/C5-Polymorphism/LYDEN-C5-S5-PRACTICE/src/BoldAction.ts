import { AbstractAction } from "./AbstractAction";
import { Word } from "./Word";

class BoldAction extends AbstractAction{
    constructor(reference:Word,private oldBold:boolean, private newBold:boolean){
        super(reference);
        this.oldBold = oldBold;
        this.newBold = newBold;
    }
    getActionName():string{
        return "TODO"
    };
    do():void{
        this.reference.setBold(this.newBold);
    };
    undo():void{
        this.reference.setBold(this.oldBold);
    };
}