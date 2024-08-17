
// let myNums = [1,2,3,4,5]
// let add = myNums.map(function (element , index , arr) {
//  //   return element + element;
//  console.log(`current element = ${element}`);
//  console.log(`current index = ${index}`);
//  console.log(`current arr = ${arr}`);
//  console.log(`this => ${this}`);
 
// })


let swapCases = "iSLaM"
let invertedNumber=[1,-10, -20 , 15 , 100, -30];
let ignoreBooleans = 'ELgala123' ;

let sw = swapCases.split('').map(function(ele){
    return ele === ele.toUpperCase()  ?  ele.toLowerCase() : ele.toUpperCase ;

})
.join('')
console.log(sw);

let inv = invertedNumber.map(function(ele){
    return -ele ;
})
console.log(inv);

let ign = ignoreBooleans.toLowerCase.split("").map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "";
})
.join();
console.log(ign);


