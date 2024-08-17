const { use } = require("chai");
const cypress = require("cypress");

const user = {
    name :'islam' ,
    age :'22' ,
    title : 'QA' ,
    company : 'Microsoft' ,
    skills : {
        selenium : 90 ,
        cypress : 85
      }
};
// let name = user.name;
// let age =user.age;
// let title = user.title;
// let company = user.company;
// console.log(name);
// console.log(age);
// console.log(title);
// console.log(company);

// const {name , age , title,company} = user;
// console.log(name);
// console.log(age);
// console.log(title);
// console.log(company);

const {name :n , age :a , title: t,company :c , skills : {selenium :s }} = user;
console.log(n);
console.log(a);
console.log(t);
console.log(c);
console.log(`my skills ${s}`);

 
const {selenium : skillsone , cypress : skilltwo} = user.skills;


//==============================================

const datas = {
    data1 :'islam' ,
    title1 : 'QA' ,
    company2 : 'Microsoft' ,
    skills3 : {
        selenium1 : 90 ,
        cypress1 : 85
      }
};
showdata(datas)

function showdata ({data1,title1,company2, skills3:{selenium1}} =datas){
 console.log(`your data is ${data1}`);
 console.log(`your data is ${title1}`);
 console.log(`your data is ${company2}`);
 console.log(`your data is ${selenium1}`);

 
}
