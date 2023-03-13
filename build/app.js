"use strict";
const world = 'type';
function hello(who = world) {
    return `Hello, ${who}! `;
}
console.log(hello(world));
// const message = hello(world);
// const body = document.querySelector('body');
// body.textContent = message;
