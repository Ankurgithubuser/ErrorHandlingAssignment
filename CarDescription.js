class Car{
    constructor(year,company,model){
            this.year = year;
            this.company =company;
            this.model =model;
    }
    getDescription(){
        return`this is a ${this.year} ${this.company} ${this.model}`
    }
}

const myCar =new Car(2022,"Scoda","Rapid")
console.log(myCar.getDescription());
