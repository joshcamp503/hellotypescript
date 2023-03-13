"use strict";
const world = 'typescript';
function hello(who = world) {
    return `Hello, ${who}! `;
}
const message = hello(world);
const body = document.querySelector('body');
body.textContent = message;
