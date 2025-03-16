//...............Strings Method......................//...................................
//.............indexing using indexof................//

let num = "I am a web developer and designer and designer";
let res = num.indexOf("designer", 26);
console.log(res);

//.............indexing using lastIndexof............................//

let sen = "I am a web developer and designer and designer ";
let res1 = sen.lastIndexOf("designer");
console.log(res1);


//...........String Concatenation...........................//..........................

var string1 = "Prep";
var string2 = "Bytes";
var string3 = string1 + string2;
console.log(string3);

//...........................................//...................

let str1 = "Hello ";
let str2 = "World";
let res2 = str1.concat(str2);
console.log(res2);

//..................Slicing...................................//..............................

let n = "I am a web developer";
let res3 = n.slice(5, 12);
console.log(res3);

//.....................Substring..................................//.....................
//it does not accept negative value.............................

let m = "I am a web developer";
let res4 = m.substring(5, 12);
console.log(res4);

//..............Replace..........................................//................

let a = "I am a web developer and designer too";
let res5 = a.replaceAll("d", "D");
console.log(res5);

//.............Trim Method........................................//.......................

let b = "   I am a web developer and designer too   ";
let res6 = b.trim();
console.log(res6);

//..................Split method..........................//...............................

let num1 = "1,2,3,4,5,6,7,8";
let res7 = num1.split(",");
console.log(res7);

//..................word.length...........................//.....................................

let num3 = "I am a web developer and designer too";
console.log(num3.length);



