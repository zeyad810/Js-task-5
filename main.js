let str =  "Welcome EgyTigers Team to Cademy Platform";
let newStr = "Hola Artists Team To Cademy Platform";
let result = str.split(str).join(newStr);
console.log(result); 
let concat = `old  string is ${str}  ,  new string is ${newStr}`;  
console.log(concat.trim());
let search = str.match(/egytigers Team/gi)
let position =str.indexOf(search)
console.log(search)
console.log(position)


