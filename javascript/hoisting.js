// 1.
console.log(hello);                     
var hello = 'world';                                 
// var hello;
// console.log(hello)l; logs undefined
// hello = 'world

// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle
// test()
// consol.log(needle); logs magnet

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan
// console.log(brendan); logs super cool
// brendan = "super cool"

// 4.
var food = 'chicken';
console.log(food); // chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); // half-chicken
    var food = 'gone';
}
// var food 
// conole.log(food); logs chicken
// eat()
// console.log(food); half chcken
// var food = 'gone'

// 5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// mean() is not a function
// var mean;
// console.log(food); error
// mean = function()


// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre); error
// genre = "disco"
// rewind();
// global genre = "rock"
// console.log(genre) -> "rock"
// local genre = "r&b, disco"
// console.log(genre) -> "r&b"
// console.log(genre) -> "disco"

// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo
// dojo = "san jose"
// console.log(dojo) -> "san jose"
// learn();
// global genre = "san jose"
// console.log(genre) -> "san jose"
// local genre = "seattle, burbank"
// console.log(genre) -> "seattle"
// console.log(genre) -> "burbank"

// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// dojo = {name: "Chicago", students = 65, hiring: true}
// dojo -> error const can't chagne value