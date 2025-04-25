const person = {
    firstname: "John",
    lastname: "Doe",
    id: 5566,
    fullName: function() {
    }
  };
console.log(person.firstname, person.lastname); // John Doe

myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(myObj.myCars.car1); // Ford
  console.log(myObj.myCars.car2); // BMW
    console.log(myObj.myCars.car3); // Fiat
    console.log(myObj.myCars); // { car1: 'Ford', car2: 'BMW', car3: 'Fiat' }
    console.log(myObj); // { name: 'John', age: 30, myCars: { car1: 'Ford', car2: 'BMW', car3: 'Fiat' } }
    console.log(myObj.name); // John


