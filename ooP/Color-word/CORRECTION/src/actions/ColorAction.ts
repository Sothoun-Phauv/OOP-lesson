import { Color } from "../Color";
import { Word } from "../Word";
import { AbstractAction } from "./AbstractAction";

export class ColorAction extends AbstractAction {
  private oldColor: Color;
  private newColor: Color;

  constructor(reference: Word, newColor: Color) {
    super(reference);
    this.oldColor = this.reference.getColor();
    this.newColor = newColor;
  }

  do(): void {
    this.reference.setColor(this.newColor);
    console.log("set color to  ", this.newColor);
  }

  undo(): void {
    this.reference.setColor(this.oldColor);
    console.log("restore   color to  ", this.oldColor);
  }

  getActionName(): string {
    return "ColorAction";
  }
}
