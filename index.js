
// Metod - En funktion i ett objekt
// Property - Ett värde i ett objekt

// Exempel på metod
let myName = "Brandon";

myName.includes("B"); //True


// Exempel på property
// - fruits.length


// forEach - returnerar inget
let fruits = ["Banan","Äpple","Päron"];

let newFruits = fruits.forEach((x) => {
    return x + "Hej";
})

console.log(newFruits);

// map - Returnerar en ny arrray

let milkshakes = fruits.map(x => x+"-milkshake");

// filter

let noBananas = fruits.filter(fruit => fruit !== "Banan");

let numbers = [1,2,3,4,5,6,7,8,9,10];

let lowNumbers = numbers.filter(num => {return num < 5})
console.log(lowNumbers)

// includes

let statement = fruits.includes("Banan");
console.log(statement);

// sort

let ages = [20,44,56,32,17,24,39];


let sortedAges = ages.toSorted((a,b) => b-a);
console.log(sortedAges);

//Med objekt
let students = [{
    name:"Magnus",
    age:37
},{
    name:"Lea",
    age:22
},{
    name:"Kenneth",
    age:55
}]

let studentsByAge = students.toSorted((a,b) => a.age - b.age )

console.log(studentsByAge);
