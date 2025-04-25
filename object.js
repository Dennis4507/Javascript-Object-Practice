const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  delete person.age;
console.log(`The person's age is ${person.age === undefined ? 'not available' : person.age}.`);

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
