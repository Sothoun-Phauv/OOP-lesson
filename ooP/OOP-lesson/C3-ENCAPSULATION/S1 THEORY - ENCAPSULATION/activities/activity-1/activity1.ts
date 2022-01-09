class Rectangle {
  private width: number;
  private height: number;
  private area: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.area = this.width * this.height;
  }
  setWidth(newWidth:number):number{
    return this.width = newWidth;
  }
  setHeight(newHeight:number):number{
    return this.height = newHeight;
  }
  getArea():number{
    return this.area = this.width*this.height;
  }
}

let smallRectangle = new Rectangle(4, 8);
smallRectangle.setWidth(50);
console.log(smallRectangle.getArea());
