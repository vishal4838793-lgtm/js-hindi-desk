const name = "Vishal"
const repoName = 50

// console.log(`my name is ${name} and my repo count is ${repoName}`);
const gameName = new String('vishal')
// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,3)
console.log(anotherString);
const url = "https//vishal.com//vishal%20"
console.log(url.replace('%20','-'));

