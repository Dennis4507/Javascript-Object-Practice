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


let data = 42;
// dataCopy will store a copy of what data contains, so a copy of 42
let dataCopy = data;

// which means that making changes to dataCopy won't affect data
dataCopy = 43;

console.log(data); // 42
console.log(dataCopy); // 43

// data is still 42, because dataCopy is a copy of data, not a reference to it



// obj contains a reference to the object we defined on the right side
const obj = { data: 42 };
// objCopy will contain a reference to the object referenced by obj
const objCopy = obj;

// making changes to objCopy will make changes to the object that it refers to
objCopy.data = 43;

console.log(obj); // { data: 43 }
console.log(objCopy); // { data: 43 }
console.log(obj === objCopy); // true, because they are the same object in memory
console.log(objCopy === obj); // true, because they are the same object in memory

function increaseCounterObject(objectCounter) {
    objectCounter.counter += 1;
  }
  
  function increaseCounterPrimitive(primitiveCounter) {
    primitiveCounter += 1;
  }
  
  const object = { counter: 0 };
  let primitive = 0;
  
  increaseCounterObject(object);
  increaseCounterPrimitive(primitive);
  // object.counter is now 1
  // primitive is still 0



  //As an example of what we mean, let’s consider a sumOfTripledEvens function.

// Take in an array.For every even number, it will triple it.Then it will sum all those even numbers.

  function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }
  console.log(sumOfTripledEvens([1, 2, 3, 4, 5])); // 18
  console.log(sumOfTripledEvens([1, 3, 5])); // 0

  