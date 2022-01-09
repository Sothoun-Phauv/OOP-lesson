import { Word } from "../Word";

export abstract class AbstractAction {
  constructor(protected reference: Word) {}

  /**
   * Get the name of this action
   */
  abstract getActionName(): string;

  /**
   * Perfrom the action
   */
  abstract do(): void;

  /**UNdo the action
   */
  abstract undo(): void;
}
