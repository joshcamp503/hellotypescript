const world = 'typescript';

function hello(who: string = world): string {
  return `Hello, ${who}! `;
}

const message = hello(world);

const body = document.querySelector('body');
body.textContent = message;