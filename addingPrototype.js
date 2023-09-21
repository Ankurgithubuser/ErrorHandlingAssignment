Object.prototype.Student=function (name) {
    this.name=name;
    
}
Object.prototype.PrintDetails=function () {
console.log(`Hello, my name is ${this.name}}`);    
}

 const student = new Student("Nikita");
 student.PrintDetails()