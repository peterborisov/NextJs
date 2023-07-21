https://www.javatpoint.com/typescript-tutorial
https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
https://github.com/typescript-cheatsheets/react

### Simple types

1. boolean
2. number
3. string
4. bigint
5. symbol
6. any
7. unknown
8. never
9. undefined and null

#### Type Assignment

- Explicit - writing out the type: (let firstName: string = "Dylan";)
- Implicit - TypeScript will "guess" the type, based on the assigned value: (let firstName = "Dylan";)

### Arrays

- const names: string[] = [];
- **readonly** keyword can prevent arrays from being changed.

### Tuples

- A tuple is a typed array with a pre-defined length and types for each index.

```
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
```

- Named Tuples

```
const graph: [x: number, y: number] = [55.2, 41.3];
```

- Destructuring Tuples

```
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
```

### Object Types

```
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
```

- Optional Properties

```
const car: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car.mileage = 2000;
```

- Index Signatures

```
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
```

### Enums - represents a group of constants

- string

```
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
```

- numeric

```
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
```

### Type Aliases and Interfaces

- Type Aliases

```
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
```

- Interfaces

```
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};
```

- Extending Interfaces

```
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
```

### Union Types - value can be more than a single type

```
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
```

### Functions

- Return Type - value returned can be explicitly defined

```
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}
```

- Void Return Type - doesn't return any value

```
function printHello(): void {
  console.log('Hello!');
}
```

- Parameters

```
function multiply(a: number, b: number) {
 return a * b;
}
```

- Optional Parameters

```
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
```

- Default Parameters

```
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
```

- Named Parameters

```
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}
```

- Rest Parameters

```
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
```

- Type Alias

```
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
```

### Casting

- Casting with as

```
let x: unknown = 'hello';
console.log((x as string).length);
```

- Casting with <>

```
let x: unknown = 'hello';
console.log((<string>x).length);
```

- Force casting

```
let x = 'hello';
console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined
```

### Classes

```
class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";
```

- Visibility

1. public - (default) allows access to the class member from anywhere
2. private - only allows access to the class member from within the class
3. protected - allows access to the class member from itself and any classes that inherit it

- Parameter Properties
- Readonly
- Inheritance: Implements
- Inheritance: Extends
- Override
- Abstract Classes

### Basic Generics

- Functions

```
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
```

- Classes

```
class NamedValue<T> {}
```

- Type Aliases
- Default Value

### Utility Types

- Partial
- Required
- Record
- Omit
- Pick
- Exclude
- ReturnType
- Parameters
- Readonly
