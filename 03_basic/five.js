const codding = ["java", "c++", "py","ruby"]

// codding.forEach( function (item){
//     console.log(item);
// } )

// codding.forEach( (item)=> {
//     console.log(item);  
// // })

// function printMe(item){
//     console.log(item);    
// }
// codding.forEach(printMe)

//  codding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr); 
//  })

const myCodding = [
    {
        languageName: "JavaScript",
        languagefilename: "js"
    },
    {
        languageName: "java",
        languagefilename: "java"
    },
    {
        languageName: "python",
        languagefilename: "py"
    }
]
myCodding.forEach( (item) =>{
    console.log(item.languageName);
    
})
