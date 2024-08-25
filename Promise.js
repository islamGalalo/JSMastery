const myPromise = new Promise((resolve, reject) => {
   let connect = false;
   if (connect){
    resolve ("connection success")
   } else {
    reject (Error("connection failed"))
   }
}).then((resolveValue)=> console.log(`Good ${resolveValue}`),
(rejectValue) => console.log(`Bad ${rejectValue}`))



console.log(myPromise);
