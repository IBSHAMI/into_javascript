// sting operations in javascript
var name = "ibrahim";
var capitalName = name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
console.log(capitalName)

// functions in javascript
function getWork(workName) {
    var work = workName
    return "work is " + workName;
}
let workName = "ibrahim"
var output = getWork(workName);
console.log(output);


// random number in javascript
var randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

// // fizz buzz in javascript
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("fizz buzz");
//     } else if (i % 3 == 0) {
//         console.log("fizz");
//     } else if (i % 5 == 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// }

// write a function that pick a name randomly from an array
var names = ["ibrahim", "ahmed", "mohamed", "ali", "moham"];
var randomName = names[Math.floor(Math.random() * names.length)];
console.log(randomName);



