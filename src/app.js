// HELLO, WORLD
// const world = 'type';
// function hello(who: string = world): string {
//   return `Hello, ${who}! `;
// }
// console.log(hello(world))
// const message = hello(world);
// const body = document.querySelector('body');
// body.textContent = message;
// BASICS
var id = 5;
var company = 'Roybot Industries';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'hello'];
// Tuple
var person = [1, 'josh', true];
// Tuple Array
var employee;
employee = [
    [1, 'josh'],
    [2, 'john'],
    [3, 'jack'],
];
// Union
var pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// Objects
var user = {
    id: 1,
    name: 'josh'
};
var newUser = {
    id: 2,
    name: 'josh2'
};
// Type Assertion
var cid = 1;
var customerId = cid;
// let customerId = cid as number
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
var sum = addNum(3, 4);
log('sup');
var newerUser = {
    id: 3,
    name: 'josh3'
};
// interface Point { number | string };
var p1 = 1;
var add = function (x, y) { return x + y; };
var addSum = add(2, 3);
console.log(addSum);
// Classes
// Typescript Crash Course - Traversy Media (34:17)
