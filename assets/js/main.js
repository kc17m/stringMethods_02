// lev1_4

const a = 'Susi is going to codingschool';

let output1_4 = document.getElementById("output1_4");
console.log(output1_4);


let susi = a.slice(0, 4);
console.log(susi);
output1_4.innerHTML = susi;

let is = a.slice(5, 7);
console.log(is);
output1_4.innerHTML += `<br>${is}`;

let school = a.slice(-6);
console.log(school);
output1_4.innerHTML += `<br>${school}`;


let goingTo = a.slice(8, 16);
console.log(goingTo);
output1_4.innerHTML += `<br>${goingTo} ${school}`;

output1_4.innerHTML += `<br>${susi} ${is} ${goingTo} ${school}`;

//lev1_5
const text = 'Susi is back from codingschool';
let output1_5 = document.getElementById("output1_5");
console.log(output1_5);

let susi_02 = text.substring(0, 5);
console.log(susi_02);
output1_5.innerHTML = susi_02;

let is_02 = text.substring(5, 7);
console.log(is_02);
output1_5.innerHTML += `<br>${is_02}`;

let school_02 = text.substring(24);
console.log(school_02);
output1_5.innerHTML += `<br>${school_02}`;

output1_5.innerHTML += `<br>${susi_02} ${is_02} ${school_02}`;

// lev1_9

const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

let output1_9 = document.getElementById("output1_9");
console.log(output1_9);

let movie = " and to the movie theater";


output1_9.innerHTML = `${text1.slice(0, 15)} ${school}${movie}`;

let sam = text1.slice(0, 4);
console.log(sam);

output1_9.innerHTML += `<br><br>${sam.concat(is)} ${goingTo}f ${movie.slice(7)}`;

output1_9.innerHTML += `<br><br>${susi} ${text4} ${sam} are ${goingTo} gym ${text4}${movie}`;

output1_9.innerHTML += `<br><br>${susi} is ${goingTo} ${school} ${movie}`;







