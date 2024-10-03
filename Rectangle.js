class Rectangle {
    constructor(height,width) {
        this.height=height;
        this.width=width;
    }

    calArea() {
        return this.height * this.width;
    }
}

const rec=new Rectangle(5,10);
console.log(rec.calArea());