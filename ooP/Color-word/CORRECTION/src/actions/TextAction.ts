import { Word } from "../Word";
import { AbstractAction } from "./AbstractAction";

export class TextAction extends AbstractAction {
  private oldText: string;
  private newText: string;

  constructor(reference: Word, newText: string) {
    super(reference);
    this.oldText = this.reference.getText();
    this.newText = newText;
  }

  do(): void {
    this.reference.setText(this.newText);
    console.log("set text to  ", this.newText);
  }

  undo(): void {
    this.reference.setText(this.oldText);
    console.log("restore   text to  ", this.oldText);
  }

  getActionName(): string {
    return "TextAction";
  }
}
