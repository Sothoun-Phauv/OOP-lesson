import { Point } from "./Point";

export class ColoredPoint extends Point {
  constructor(x: number, y: number) {
    super(x, y);
  }

  /**
   * Depending on the point position:
   * - if x= 0 => green
   * - else if y= 0 => red
   * - else => yellow
   * @returns the color of the point
   */
  getColor(): string {
    let isColor = "";
    if(this.x === 0){
      isColor = "green";
    }else if(this.y === 0){
      isColor = "red";
    }else{
      isColor = " yellow";
    }
    return isColor;  
  }
}
