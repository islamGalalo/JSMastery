//nested loop

let products = ["keyboard", "Mouse", "Pen", "pad"]

let colors =["Red","Blue","Black"]

let models = [2020 ,2021,2022]

for (let i=0 ;i < products.length ; i++){
    console.log("=".repeat(10));
    console.log(`# ${products[i]}`);
    console.log("-".repeat(10));
    console.log("colors: ");
    
    mainloop: for (let j = 0; j < colors.length; j++){
    console.log(`- ${colors[j]}`);
 
}

console.log("Models: ");
nestedloop: for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
    
    
}

}
