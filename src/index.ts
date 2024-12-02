//Intended to be used as a quick scaffolding and reference for custom types
//all values are examples


interface User {
  id: number;
  name: string;
  email: string;
}

/*Example Usage*/

// const user: User = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com"
// };

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Generic Basics~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//Generics allow Components, Functions, and Classes to define a placeholder type
//The type is declared when used
function genericExample<T>(value: T): T {
  return value;
}
//In this example "T" is placeholder for the type.
//When using the function if the type isn't specified it will be infered
//However, the type can be defined

/*Example Usage*/

// let num = genericExample(420); //inferred as number
// let str = genericExample('Hello out there!'); //string

// let enforced = genericExample<number>(420); //Explicit type

//~~~~~Generic Interfaces~~~~~
interface Circle<T> {
  value: T;
}
/*Example Usage*/

// const numberCircle: Circle<number> = { value: 365 };
// const stringCircle: Circle<string> = { value: "Three-hundred and sixty-five"};

//~~~~~Generic Classes~~~~~
class Container<T> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

/*Example Usage*/

// const numberContainer = new Container<number>(123);
// const stringContainer = new Container<string>("Hello, Generics!");

//~~~~~Enforcing Generic Type Constraints~~~~~
function logLength<T extends { length: number }>(value: T): void{
  console.log(value.length); //This will throw an error if the value doesn't have a length property
}

/*Example Usage*/
//logLength(420) //Error
//logLength([1,2,5,7]) // logs 4
//~~~~~Generics, multiple Type Params~~~~~
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

//~~~~~~~~~~~OTHER useful utilities

/*Utility Types*///------------------>

// Partial<T> //Makes all properties optional
// Readonly<T> //Makes all properties of T read-only
// Record<K,T> //Constructs an object type with keys 'K', and values 'T'
// Pick<Text, K> //Picks a subset of properties 'K' from 'T'

