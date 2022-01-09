import { AbstractAction } from "./AbstractAction";
import { Word } from "./Word";

class TextAction extends AbstractAction{
    constructor(referene:Word ,private oldText:string, private newText:string){
        super(referene);
        this.oldText = oldText;
        this.newText = newText;
    }
    getActionName():string{
        return "";
    };
    do():void{
        this.reference.setText(this.newText);
    };
    undo():void{
        this.reference.setText(this.oldText);
    };
}