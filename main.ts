//Basic Array Operation

//Add a new fruit to the end of the array

let fruits:string[] =["Mango","Banana","Peach","Cherry"];

fruits.push("Apple");

console.log(fruits);

//Remove the first fruit from the array

let fruit:string[] =["Mango","Banana","Peach","Cherry"];

fruit.shift();

console.log(fruit);

//Add a new fruit to the begining of the array

let fruits_1:string[] =["Mango","Banana","Peach","Cherry"];

fruits_1.unshift("Apple");

console.log(fruits_1);

//Find the index of a fruit and remove that fruit using the index

let fruits_2:string[] =["Mango","Banana","Peach","Cherry"];

console.log(fruits_2[2]);

let fruits_3:string[] =["Mango","Banana","Peach","Cherry"];
fruits_3.splice(2,1)
console.log(fruits_3);