import { AbstractAction } from "./AbstractAction";

export class ActionHistory {
  private undos: AbstractAction[] = [];
  private redos: AbstractAction[] = [];

  do(action: AbstractAction) {
    action.do();
    this.undos.push(action);
  }

  undo(): void {
    let lastAction = this.undos.pop();
    if (lastAction != undefined) {
      lastAction.undo();

      this.redos.push(lastAction);
    }
  }

  redo(): void {
    let lastRedo = this.redos.pop();
    if (lastRedo != undefined) {
      lastRedo.do();

      this.undos.push(lastRedo);
    }
  }
}
