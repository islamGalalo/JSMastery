//set

let mydata = [2,2,1,3,1];
//let myuniqdata = new Set([1,1,1,2,3]);
let myuniqdata = new Set();
myuniqdata.add(1).add(2).add(3)
console.log(mydata);
console.log(myuniqdata.size);

// set
//type of data 
let mySet = new Set([1,2,3,4,'A']);
console.log(mySet);
//size
console.log(`size of element ${mySet.size}`);
// values + Keys alias
let iterator = mySet.keys();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());
//forEach

mySet.forEach((el)=> console.log(el));


//WeakSet

//type of data 
let myWSet = new WeakSet([{A:1 , B:2}])
console.log(myWSet);
