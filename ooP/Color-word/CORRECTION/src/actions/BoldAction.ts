import { Word } from "../Word";
import { AbstractAction } from "./AbstractAction";

export class BoldAction extends AbstractAction {
  private oldBold: boolean;
  private newBold: boolean;

  constructor(reference: Word, newBold: boolean) {
    super(reference);
    this.oldBold = this.reference.getBold();
    this.newBold = this.newBold;
  }

  do(): void {
    this.reference.setBold(this.newBold);
    console.log("set bold to  ", this.newBold);
  }

  undo(): void {
    this.reference.setBold(this.oldBold);
    console.log("restore   bold to  ", this.oldBold);
  }

  getActionName(): string {
    return "BoldAction";
  }
}
