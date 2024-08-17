/*  expression that allow us to extract data from arrays
objects and maps and set them into new , variables */

let friends = ["islam", 'mohmed','galal']
let [a,b,c] = friends ;
console.log(`${a} ${b} ${c}`);
//============================================//
let players =["MESSI" ,'neymar','Mbappe',["Halland" ,'Foden',['Hakimi','gavi']]]
console.log(players[3][2][1]);

let [, , , [h ,,[, g]]] = players ;

console.log(h)  // Halland
console.log(g); // gavi
//============================================//
//swapping variables
let book = 'video';
let video = 'book';

// let stash = book;
// book = video ;
// video = stash ;
// console.log(book);
// console.log(video);

// with destructing 
[book , video] = [ video , book]
console.log(book);
 console.log(video);

