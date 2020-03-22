// question 1
var colour = "Black";
console.log(colour);
// Black


// question 2
var person = {
    gender: "female",
    age: 24
  };
  console.log(person);
// Object { gender: "female", age: 24 }


// question 3
var outOfStock = true;
if (outOfStock === true){
    console.log("Out of stock");
}
else {
    console.log("In stock");
}
// Out of stock


// question 4
var numbers= [1,2,3,4,5];
for (var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
// 1, 2, 3, 4, 5


// question 5
for (var count=15; count<=25; count++) {
    console.log(count);
}
// 15 - 25


// question 6
for (var count=15; count<=25; count++) {
    if (count === 20) {
        console.log(count);
    }
}
// 20


// question 7
var person = [
    {
        name: "Kari Nordmann",
        female: true,
        age: 30,
        
    },
    {
        name: "Ola Nordmann",
        female: false,
        age: 40,
    }
];

for (var i=0; i<person; i++) {
    console.log(person[i].female);
    console.log(person[i].age);
}
// true, 30, false, 40


// question 8
function whatIDontLike(food) {
    console.log("I don't like" + " " + food);
  }
  whatIDontLike("spaghetti");
  // I don't like spaghetti


  // question 9 
  function numbers(number1,number2) {
    var sum = number2 - number1;
    console.log(sum);
    return sum;
  }
  numbers(8,2);
  // -6


  // question 10
  var animalsILike = [];

  function animals(favouriteAnimal){
      animalsILike.push(favouriteAnimal);
  }
  animals("dog");
  
  console.log(animalsILike);
  // Array [ "dog" ]
