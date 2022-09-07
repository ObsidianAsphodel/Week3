/**1. Create an array called ages that contains the following values: 3,9,23,64,2,8,28,93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
    b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
**/
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
function subtractElements(array1) {
  let firstElement = ages[0];
  let lastElement = ages[ages.length + 1];
  var element2 = ages[ages.length - 1];
  console.log("1a. is ", firstElement - lastElement);
}
console.log(subtractElements(ages));

var totalAmount = 0;
for (i = 0, i = ages.length; i++; ) {
  totalAmount += ages[i];
}
var average = totalAmount / ages.length;
//return average;
//1c
console.log(average);

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLength = names.map(function (element) {
  return element.length;
});
let totalAmountOfCharacters = 0;
for (i = 0; (i = nameLength); i++) {
  totalAmountOfCharacters += nameLength[i];
}
var averageAmountOfCharacters = totalAmountOfCharacters / name.length();
//2a.
console.log(averageAmountOfCharacters);

//2b.
for (i = 0; i > variable; i++) {}
console.log(nameLength);
// 3.
let colorArray = ["red", "blue", "purple", "green", "violet"];
let firstColor = colorArray.length - 1;

// 4.
let lastColor = colorArray[0];

//5.
let nameLengths = [];

//6.

//7.
function wordExtender(word, n) {
  return word * n;
}
wordExtender("hello", 3);
//8.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

//9.
function sumOfNumbers(array) {}
//10.
function averageOfArray(array) {
  return array;
}
//11.
function greaterOfTwoArrays(array1, array2) {
  array1;
}
//12.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket) {
    if (moneyInPocket > 10.5) {
      return true;
    }
  } else {
    return false;
  }
}
willBuyDrink(true, 12.35);
//13.
function canGrabAnotherCard(number) {
  if (number < 7) {
    return true;
  } else return false;
}
canGrabAnotherCard(12);
//I created this function because I wanted to see if I could pull another card from the deck.
