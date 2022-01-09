import { Color } from "./color"

export class Word{
    private text:string
    private isBold:boolean
    private color?:Color
    constructor(text:string, isBold:boolean){
        this.text = text
        this.isBold = isBold
    }

    isEqual(word:string):boolean{
        return this.text === word
    }
    getCode():string{
        return "<" + this.isBold + this.text + this.isBold + this.color + "/>";
    }
    setText(text:string){
        return this.text = text
    }
    setColor(color:Color){
        this.color = color;
    }
    setBold(isBold:boolean){
        return this.isBold = isBold;
    }
}