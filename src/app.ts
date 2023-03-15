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

let id: number = 5
let company: string = 'Roybot Industries'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'hello']

// Tuple
let person: [number, string, boolean] = [1, 'josh', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'josh'],
  [2, 'john'],
  [3, 'jack'],
]

// Union
let pid: string | number
pid = 22

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// Objects
const user: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'josh'
}

  // or

type User = {
  id: number,
  name: string
}

const newUser: User = {
  id: 2,
  name: 'josh2'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid
// let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number): void {
  console.log(message)
}

const sum = addNum(3, 4)
log('sup')

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const newerUser: UserInterface = {
  id: 3,
  name: 'josh3'
}

type Point = number | string;
// interface Point { number | string };
const p1: Point = 1

// newerUser.id = 5

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x, y) => x + y
const addSum = add(2, 3)

console.log(addSum)

// Classes
interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person implements PersonInterface {
  // private id: number
  // protected id: number
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const josh = new Person(1, 'Josh Camp')

// josh.id = 5

console.log(josh.register())

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.position)

// Typescript Crash Course - Traversy Media (34:17)