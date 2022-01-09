import { Word } from "./Word";
import { Color } from "./Color";
import { ActionHistory } from "./actions/ActionHistory";
import { ColorAction } from "./actions/ColorAction";
import { TextAction } from "./actions/TextAction";

let myActionHistory = new ActionHistory();

let theWord = new Word("Hello Word", true, Color.RED);
console.log(" start  :", theWord.getCode());

myActionHistory.do(new ColorAction(theWord, Color.BLUE));
myActionHistory.do(new TextAction(theWord, "Test"));
console.log(" before undo  :", theWord.getCode());

myActionHistory.undo();
myActionHistory.undo();

console.log(" after undo  :", theWord.getCode());

myActionHistory.redo();
myActionHistory.redo();

console.log(" after redo  :", theWord.getCode());
