/*
map vs object
 map > not contain key by default
 object > contain key by default

 map > key can be anything
 object > string or symbol

 map > get item manually
 object > need to do manually

 map > can be directly iterated
 object > neet to use object.key()

 map > better performance when add or remove data
 object > low performance comparing to map

*/

let myObject = {
  10: "number",
  10: "String",
};

let myMap = new Map();
myMap.set(10, "leo");
myMap.set("name", "string");
//or
let newMAP = new Map([
  ["name", "String"],
  [10, "number"],
  [false , "boolean"]
]);
console.log(newMAP.size);
console.log(newMAP.delete("name"));
newMAP.clear(); // clear all element





console.log(myObject);
console.log(myMap.get(10));
