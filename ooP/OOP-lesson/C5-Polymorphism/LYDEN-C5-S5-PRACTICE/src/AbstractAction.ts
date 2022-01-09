import { Word } from "./Word";

export abstract class AbstractAction{
    constructor (protected reference:Word){
        this.reference=reference;
    }
    abstract getActionName():string;
    abstract do():void;
    abstract undo():void;
}