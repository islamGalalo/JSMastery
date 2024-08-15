/*
for each execures a provided function once for each array elementt

syntax:
forEach(callBackfunction(element , index , array){},thisArg)
-Element = the current element being processed in the array
-index = the index of the current element being processed in the array
- array = the current array

Note 
-does not return anything
-breaj will not break the loop

*/
let list = ['leo','kylian','galalJR']
list.forEach(element  => {
    console.log(element.length);
    
});
list.forEach(ele=>{
   console.log(ele.toUpperCase());
    
})