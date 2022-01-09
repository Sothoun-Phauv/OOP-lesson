import { AbstractAction } from "./AbstractAction";
import { Color } from "./Color";
import { Word } from "./Word";

class ColorAction extends AbstractAction{
    constructor(reference:Word,private oldColor:Color, private newColor:Color){
        super(reference);
        this.oldColor = oldColor;
        this.newColor = newColor;
    }
    getActionName():string{
        return "TODO"
    };
    do():void{
        this.reference.setColor(this.newColor);
    };
    undo():void{
        this.reference.setColor(this.oldColor);
    };
}