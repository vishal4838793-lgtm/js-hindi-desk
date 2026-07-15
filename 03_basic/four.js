const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby"
}
for (const key in myObject) {
   console.log(`${key} is used for shortcut of ${myObject[key]}`); 
}
const programming = ["js", "c++", "py", "java"]
for (const key in programming) {
    console.log(programming[key]);    
}