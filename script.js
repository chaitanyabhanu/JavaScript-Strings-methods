// `charAt()` Method..
var charAt = 'Bhanu Chaitanya';
document.getElementById("charAt").innerHTML=charAt.charAt(1,2);

//  Bracket Notation
let str = "Bhanu";
let char = str[1];
document.getElementById("Bracket Notion").innerHTML=char =str[2];

// `substring()` Method 
 let str1 = "Bhanu, Chaitanya!";
let subStr = str1.substring(1, 1);  // Extracts "Bhanu"
document.getElementById("substring").innerHTML= str1.substring(0, 5); 

//  `slice()` Method

let  str2= " bhanu, Chaitanya!";
let slicedstr = str2.slice(7,12);
//  Extracts "chaitanya";
document.getElementById("slice").innerHTML= str2.slice(7,17);

// `split() Method`
let str3 = "Bhanu";
let  arr = str.split(" ");
document.getElementById("Split").innerHTML =  str.split("");
