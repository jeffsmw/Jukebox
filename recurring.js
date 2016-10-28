//Write a function that returns the most recurring letter in a string using javascript
//mostRecurring('Your name is John Lennon') //returns 'n'
//mostRecurring('abccdefg') //returns 'c'

var str = 'hello world';
var strArr = str.split("");
var obj = {};
for(i=0;i<strArr.length;i++){
  if(strArr[i] != " ") {
    if(strArr[i] in obj){
      obj[strArr[i]]++;
    } else {
      obj[strArr[i]] = 1;
    }
  }
  for(i=0;i<obj;i++){
    
  }
}

console.log(obj);
