const fs= require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{ 
//     console.log(err,data)
// })

// const a= fs.readFileSync('file.txt')
// console.log(a)

// fs.writeFile('file2txt',"This is a data",()=>{
//     console.log("Written to the file")
// });
const b=fs.writeFileSync('file2txt',"This is a data2");
console.log(b)
   
console.log("Finished reading file")