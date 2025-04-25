const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  delete person.age;
console.log(`The person's age is ${person.age === undefined ? 'not available' : person.age}.`);
