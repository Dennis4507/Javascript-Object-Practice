const person1 = {
    firstname: "John",
    lastname: "Doe",
    id: 5566,
    fullName: function() {
    }
  };
console.log(person1.firstname, person1.lastname); // John Doe

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

   // Displaying Properties in a Loop


   // Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };
  
  // Display the Text
    console.log(text); // John 30 New York

    // Create an Array
const myArray = Object.values(person);

// Display the Array
    console.log(myArray); // [ 'John', 30, 'New York' ]
console.log(myArray[0]); // John
console.log(myArray[1]); // 30  
console.log(myArray[2]); // New York
console.log(myArray.length); // 3


