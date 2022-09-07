let ages = [3, 9, 23, 64, 2, 8, 28, 93];
function subtractElements(array) {
  let firstElement = array[0];
  let lastElement = array[array.length + 1];
  console.log("#1a is ", firstElement - lastElement);
  array.push(20);
  console.log("#1b is ", firstElement - lastElement);
  for(i = 0; i <= array.length + 1; i++)
  { 
    let totalNumber =+ array[i]; 
    let averageNumber = totalNumber / array.length;
    console.log('#1c the average age is ', averageNumber);
  }
}
console.log(subtractElements(ages));

// let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// let nameLength = names.map(function (element) {
//   return element.length;
// });
// let totalAmountOfCharacters = 0;
// for (i = 0; i = nameLength.length; i++) {
//   totalAmountOfCharacters += nameLength[i];
// }
// var averageAmountOfCharacters = totalAmountOfCharacters / names.length;
// console.log('#2a the average number of characters is', averageAmountOfCharacters);

// //2b.
// for (i = 0; i > variable; i++) {}
// console.log(nameLength);
// // 3.
// let colorArray = ["red", "blue", "purple", "green", "violet"];
// let firstColor = colorArray.length - 1;

// // 4.
// let lastColor = colorArray[0];

// //5.
// let nameLengths = [];

// //6.

// //7.
// function wordExtender(word, n) {
//   return word * n;
// }
// wordExtender("hello", 3);
// //8.
// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// //9.
// function sumOfNumbers(array) {}
// //10.
// function averageOfArray(array) {
//   return array;
// }
// //11.
// function greaterOfTwoArrays(array1, array2) {
//   array1;
// }
// //12.
// function willBuyDrink(isHotOutside, moneyInPocket) {
//   if (isHotOutside && moneyInPocket) {
//     if (moneyInPocket > 10.5) {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }
// willBuyDrink(true, 12.35);
// //13.
// function canGrabAnotherCard(number) {
//   if (number < 7) {
//     return true;
//   } else return false;
// }
// canGrabAnotherCard(12);
// //I created this function because I wanted to see if I could pull another card from the deck.
