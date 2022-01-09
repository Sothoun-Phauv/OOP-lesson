import { Color } from "./Color";

export class Word{
    constructor(private text:string,private isBold:boolean,private color:Color){}
    isEqual(word:Word):boolean{
        return this.text === word.text && this.isBold === word.isBold && this.color === word.color ;
    }
    getCode():string{
        return "< word text=' "+ this.text + "', bold= '" + this.isBold + "' , color=' "+ this.color +"' />";
    }
    setText(text:string){
        return this.text = text;
    }
    setColor(color:Color){
        return this.color = color;
    }
    setBold(isBold:boolean){
        return this.isBold = isBold;
    }
}