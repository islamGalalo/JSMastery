function info(username="Un" , age="Un",show = "yes", rate  , ...skills){
     console.log(`welcome ${username} your age is ${age}`);
     if(show === 'yes'){
        console.log("show skills");
       }  else {
        console.log("do not show skills");
        
     }
}
info("islam" , 33 ,"NO");



/// Arrow functions 
// let calc = function (){
//     return 10
// };
let calc = (username)=> username ;
 console.log(calc("solom"));
 