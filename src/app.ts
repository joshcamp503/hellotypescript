const world = 'type';

function hello(who: string = world): string {
  return `Hello, ${who}! `;
}

console.log(hello(world))

// const message = hello(world);

// const body = document.querySelector('body');
// body.textContent = message;