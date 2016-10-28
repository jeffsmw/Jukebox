// var myArray = new Array();
// var myArray = [];
// var myArray = [1, 2, true, "Good Morning"];
//
// // console.log(myArray[0]);
//
// myArray.push("milk");
// myArray.length
//
// // LOOPS
// // for (var i=0; i<myArray.length; i++) {
// //   console.log(myArray[i]);
// // }
//
// var i = 0;
//
// // while (i<myArray.length) {
// //   console.log(myArray[i]);
// //   i++;
// // }
// //
// while (i<myArray.length) {
//   // console.log(++i);
//   console.log(myArray[i++]);//????
// }
//
// var first = ["hello", 5 'a'];
// first[1] = 6;
//
// var second = [];
//
// for (var i=0; i<101; i++) {
//   second.push(i);
// }
//
// second.length;
//
// // for (var i=0; i<=100; i++)
//
// var numbers = [0, 5, 6, -12];
// var sum = 0;
//
// for (var i=0; i<numbers.length; i++) {
//   sum = sum + numbers[i];
// }
//
// var words = ["apple", "dog", "computer", "cup"];
//
// for (var i=0; i<words.length; i++) {
//   console.log(words[i] + " has " + words[i].length + " characters.");
// }

// .split
// .join
//
// var greeting = "hello";
// var charArray = greeting.split("");
// console.log(greeting.split(""));
//
// console.log("charArray: " + charArray);
//
// for (var i=0; i<charArray.length; i++) {
//   console.log(charArray[i]);
// }
//
// var sentence = prompt("Please enter a sentence: ");
// console.log(sentence);
//
// //alert how many words are in the sentence?
// var words = sentence.split(" ");
// alert("There are " + words.length + " in the sentence.");

// var nums = [];
// for (var i=0; i<100; i++) {
//   nums.push(i);
// }
//
// alert(nums.join(""));

// function


// function sayHello() {
//   console.log("hello");
// }
//
// sayHello();
//
// function sayHello() {
//   return "hello";
// }
//
// console.log(sayHello());

// anonymous function being assigned to a variable called jacob?
// var jacob = function() {
//   console.log("hello");
// }
//
// jacob();
//
// var thaisa = jacob;
//
// thaisa();
//
// // create a doubleIt function that doubles the number pass in
// function doubleIt(x) {
//   // return x * 2;
//   console.log( x * 2 );
// }
//
// var doubleIt = function(x){
//   console.log( x * 2 );
// };
//
// doubleIt(5);
//
// // named function, anonymous function format
//
// function insult(name) {
//   console.log(name + ", you doofus!");
// }
//
// // more common
// var insult = function(name) {
//   console.log(name + ", you doofus!");
// };
//
// function increment(x) {
//   // pre-incrementing will increment the number before returning it
//   return ++x;
// }
//
// var increment = function(x) {
//   return ++x;
// }
//
// console.log(increment(50));
//
// // var newArray = [];
//
// function doubleArray(array) {
//   for (var i=0; i<array.length; i++) {
//       array[i] = array[i] * 2;
//   }
//
//   console.log(array);
//   // return array;
// }
//
// doubleArray([1,2,3,4]);
//
// var doubleArray = function(array) {
//   for (var i=0; i<array.length; i++) {
//       array[i] = array[i] * 2;
//   }
//
//   console.log(array);
//   // return array;
// };
//
// doubleArray([1,2,3,4]);
//
// var word = "hello";
// word[3] = 'j';
// console.log(word[3]);
// console.log(word);
//
// var array = [1,2,3,4];
// array[3] = 'j';
// console.log(array);


// objects
//var myObject = new Object();
// var myObject = {
//   firstName: "Jacob",
//   lastName: "Tran",
//   age: 37,
//   eyeColor: "brown"
// };
//
// console.log(myObject.firstName);
// console.log(myObject.lastName);
// console.log(myObject.age);
// console.log(myObject.eyeColor);
// console.log(myObject.height);
//
// myObject.height = "5,7";
// console.log(myObject.height);
//
// var me = {
//   name: "Jeff",
//   age: "22",
//   occupation: "student"
// };
// me.occupation = "javascript expert";
// me.skills = ['ruby','rails','javascript'];
// console.log(me.skills[0]);
// delete me.age;

//nested objects
// var obj = {
//   a: [1,2,3],
//   b: {c: 6}
// };
// console.log(obj.a[2] + obj.b.c);
//
// var obj = {
//   a: 5,
//   b: 6
// }
// console.log(obj["a"] + obj["b"]);
//
// var alpha = {};
// var string = word.split("");
// var strArray = string.split("");
// for(i=0;i<=strArray.length;i++){
// if(strArray[i] != " ") {
// if(charArray[i] in obj) {
//   alpha[strArray[i]]++;
//   } else {
//   alpha[strArray[i]] = 1;
//   }
// }
// console.log(alpha);
//
//
// var me = {
//   firstName: "Jeff",
//   lastName: "Wong",
//   age: 22
// }
// for (var prop in me) {
//   console.log("prop: " + prop);
//   console.log("value: "+ me[prop]);
// }
//
// console.log(typeof(console));
// for (var prop in console) {
//   console.log("prop: " + prop);
//   console.log("console object value: " + console[prop]);
// }

// var morning = function(){
//   console.log("wakeup");
//   console.log("shower");
//   console.log("eat breakfast");
// }
// var afternoon = function(){
//   console.log("showe");
//   console.log("eat lunch");
// }
// var evening = function(){
//   console.log("shower");
//   console.log("eat dinner");
//   console.log("sleep");
// }
//
// var life = {
//   meaning: 42,
//   morning: morning,
//   afternoon: afternoon,
//   evening: evening
//   }
// }
//
// console.log(life.meaning);
// life.morning();
// life.afternoon();
// life.evening();

//cloning
var sheep = { name: "Dolly", colour: "white", sex: "female", baby: {name: "Parton", colour: "beige"} };

var clone = function( obj ) {
  var clonedObj = {};

  for (var prop in obj) {
    clonedObj[prop] = obj[prop];
  }

  return clonedObj;
}

var sheep2 = clone(sheep);

console.log(sheep);
console.log(sheep.name);
console.log(sheep2);
console.log(sheep2.name);
