class Person{
    constructor(name,age){
        this.name=name;
        this.age =age;

    }
    getDetails(){
        if (this.name==undefined) {
            this.name="unknown";
            
        }
        if (this.age==undefined) {
            this.name=0;
            
        }
            return`Name:${this.name},Age:${this.age}`
    }

}
const person1 = new Person("Ananya",22);
console.log(person1.getDetails());
const person2= new Person();
console.log(person2.getDetails());
