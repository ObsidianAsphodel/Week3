let ages = [3, 9, 23, 64, 2, 8, 28, 93];
function subtractElements(array) {
  let firstElement = array[0];
  let lastElement = array.length + 1;
  console.log("#1a is",firstElement - lastElement);
  console.log(array);
  array.push(20);
  console.log(array);
  console.log('#1b is',firstElement - lastElement);
  for(i = 0; i <= array.length + 1; i++)
  { 
    let totalNumber =+ array[i]; 
    let averageNumber = totalNumber / array.length;
    console.log('#1c the average age is ' + averageNumber);
  }
}
console.log(subtractElements(ages));

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLength = names.map(function (element) {
  return element.length;
});
let totalAmountOfCharacters = 0;
// for (i = 0; i = nameLength.length; i++) {
//   totalAmountOfCharacters += nameLength[i];
// }
var averageAmountOfCharacters = totalAmountOfCharacters / names.length;
console.log('#2a the average number of characters is', averageAmountOfCharacters);
//2b.
// 3.
let colorArray = ["red", "blue", "purple", "green", "violet"];
let lastColor = colorArray[colorArray.length - 1];
console.log('#3 the last element of colorArray is', lastColor)
// 4.
let firstColor = colorArray[0];
console.log('#4 the first element of colorArray is', firstColor);
// //5.
names.map(namesLength => namesLength.length);
console.log('#5 ', nameLength);
// //6.
console.log('#6 ', nameLength.reduce((sum, b) => sum + b, 0));
// //7.
function wordExtender(word, n) {
  return word.repeat(n);
}
console.log('#7 ', wordExtender('Hello',3));
// //8.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log('#8', fullName('first','last'))
// //9.
let sumArray = [20,23,12,41,11];
function sumOfNumbers(array){
  let sum;
  for(let i = 0; i < array.length; i++) {
    sum =+ array[i];
    return sum;
  }
  if(sum > 100){
    return true;
  }
}
console.log('#9', sumOfNumbers(sumArray));
//10.
function averageOfArray(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
    let average = sum / array.length;
    return average;
  }
}
console.log('#10',averageOfArray(sumArray));
//11.
function greaterOfTwoArrays(array1, array2) {
  let sum1;
  let sum2;
  for(let i = 0; i < array1.length; i++) {
    sum1 =+ array1[i];
  }
  for(let i = 0; i < array2.length; i++) {
    sum2 =+ array2[i];
  }
  let arrayAverage1 = sum1 / array1.length;
  let arrayAverage2 = sum2 / array2.length;
  if(arrayAverage1 > arrayAverage2){
    return true;
  } else {
    return false;
  }
}
let arr = [3,2,4,56];
let arr2 = [2,3,5,6,7];
console.log("#11 ", greaterOfTwoArrays(arr, arr2));

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket) {
    if (moneyInPocket > 10.5) {
      return true;
    }
  } else {
    return false;
  }
}

console.log('#12 ',willBuyDrink(true, 12.35));
function canGrabAnotherCard(number) {
  if (number < 7) {
    return true;
  } else return false;
}

console.log('#13 ',canGrabAnotherCard(12));
//I created this function because I wanted to see if I could pull another card from the deck.
