class Rectangle {
  private width: number = 0;
  private height: number = 0;
  private area: number = 0;

  constructor(width: number, height: number) {
    this.setWidth(width);
    this.setHeight(height);
  }

  private updateArea() {
    this.area = this.width * this.height;
  }

  setWidth(w: number) {
    this.width = w;
    this.updateArea();
  }
  setHeight(height: number) {
    this.height = height;
    this.updateArea();
  }
}

let smallRectangle = new Rectangle(4, 6);
console.log(smallRectangle);

smallRectangle.setWidth(50);
console.log(smallRectangle);
