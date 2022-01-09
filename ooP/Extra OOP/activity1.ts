class Rectangle {
  private width: number;
  private height: number;
  private area: number = 0;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.getArea();
  }

  
  setHeight(newHeight:number){
    this.height = newHeight
    this.getArea()
  }
  setWidth(newWidth:number){
    this.width = newWidth
    this.getArea()
  }
  getArea():number{
    return  this.area;

  }
  
}

let smallRectangle = new Rectangle(4, 8);
smallRectangle.setWidth(50);
console.log(smallRectangle.getArea());


