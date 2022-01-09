import { Color } from "./Color";
export class Word {
  constructor(
    private text: string,
    private isBold: boolean,
    private color: Color
  ) {}
  setText(newText: string) {
    this.text = newText;
  }
  setBold(newBold: boolean) {
    this.isBold = newBold;
  }
  setColor(color: Color) {
    this.color = color;
  }
  getText(): string {
    return this.text;
  }
  getColor(): Color {
    return this.color;
  }
  getBold(): boolean {
    return this.isBold;
  }
  isEqual(other: Word) {
    return (
      this.text === other.text &&
      this.color === other.color &&
      this.isBold === other.isBold
    );
  }
  getCode() {
    return (
      "<word text='" +
      this.text +
      "', bold='" +
      this.isBold +
      "', color='" +
      this.color +
      "' />"
    );
  }
}
