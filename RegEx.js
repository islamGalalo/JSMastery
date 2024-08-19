let str = "10 20 100 1000 2000";

let invalidEmail = "isla@@@gmail....com";
let validEmail = "islam@f.sa";

let ip = "192.168.1.2";

let url = "http://www.google.com";

let mystring = "hello Islam , we all love islam";
//modifiers => flags
// i > case insensitive
// g > global
// m > multilines

let regex = /Islam/gi;

console.log(mystring.match(regex));

//====================================================
/*
Ranges 
part 1
(X|Y) => x or y
[0-9] => 0 to 9
[^0-9] => any char not 0 to 9


*/

let sas = "com net org info ";
let sasRegex = /(org|info|net)/gi;
console.log(sas.match(sasRegex));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

// ============================

let mystring1 = "AaBbcdefG123!234&^%*";
let atozSmall= /[a-z]/g;
let atozCapital = /[A-Z]/g;
let abc =/[abc]/g;
console.log(mystring1.match(atozSmall));
console.log(mystring1.match(atozCapital));
console.log(mystring1.match(abc));

