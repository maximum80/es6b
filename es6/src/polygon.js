//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }
  get area() { return this.height * this.width;}
}

export class Square extends Polygon {
  constructor(side) {
    super(side,side);
    this.side = side;
    this.name = "Square";
  }
  get area() { return Math.pow(this.side,2);}
}

export class Circle extends Polygon {
  constructor(radius) {
    super(radius,radius);
    this.radius = radius;
    this.width = radius * 2;
    this.height = radius * 2;
    this.name = "Circle";
  }
  get area() { return Math.pow(this.radius,2) * Math.PI;}
}
