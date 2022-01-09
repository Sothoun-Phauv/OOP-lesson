import { AbstractAction } from "./abstracAction";
import { Color } from "./color";

export class ColorAction extends AbstractAction{
    private oldColor:Color[] = []
    private newColor:Color[] = []
    getActionName():string{
        return "red"
    }
    do():void{}
    undo():void{}

}