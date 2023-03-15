"use strict";
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
let id = 5;
let company = 'Roybot Industries';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'josh', true];
// Tuple Array
let employee;
employee = [
    [1, 'josh'],
    [2, 'john'],
    [3, 'jack'],
];
// Union
let pid;
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
const user = {
    id: 1,
    name: 'josh'
};
const newUser = {
    id: 2,
    name: 'josh2'
};
// Type Assertion
let cid = 1;
let customerId = cid;
// let customerId = cid as number
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const sum = addNum(3, 4);
log('sup');
const newerUser = {
    id: 3,
    name: 'josh3'
};
// interface Point { number | string };
const p1 = 1;
const add = (x, y) => x + y;
const addSum = add(2, 3);
console.log(addSum);
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const josh = new Person(1, 'Josh Camp');
// josh.id = 5
console.log(josh.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.position);
// Typescript Crash Course - Traversy Media (34:17)
