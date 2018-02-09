import { isString, isNumber } from 'lodash';

// -----------------------------------------------------------------------

const foo = { firstName: 'Peter', lastName: 'Griffin' };

foo.firstName = 2;

// -----------------------------------------------------------------------

var dummy; // any type
var num = 10; // number
var str = 'Hello TypeScript'; // string
var bln = true; // boolean
var stringArray = ['Homer', 'Simpson']; // string[]

// -----------------------------------------------------------------------

const addFunction = function(n1: number, n2: number, n3: number) {
  return n1 + n2 + n3;
};

var result1: string = addFunction(10, 20, 30); // error

var result2: number = addFunction(10, 20, 30); // works
var result3 = addFunction(10, 20, 30); // works
var result4 = addFunction('10', 20, 30); // works

// -----------------------------------------------------------------------

const addFunction2 = (n1: number, n2: number, n3?: number): number => n1 + n2 + n3;

var sum: number = addFunction2(10, 20);

// -----------------------------------------------------------------------

class Student {
    yearOfBirth: number;
    schoolName: string;
    city: string;
    private firstName: string; // private members FTW!
    private lastName: string;

    constructor(firstName: string, lastName: string, schoolName: string, city: string, yearOfBirth: number) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
        this.schoolName = schoolName;

    }

    age() {
        return 2018 - this.yearOfBirth;
    }         

    printStudentFullName(): void {
        console.log(this.lastName + ',' + this.firstName);
    }
}

const Bart = new Student('Bart', 'Simpson', 'Springfield Elementary School', 'Springfield', 1987);

Bart.

const BartName = Bart.firstName;
const BartAge = Bart.age();

// -----------------------------------------------------------------------

interface StudentInterface {
    yearOfBirth: number;
    schoolName: string;
    age: () => number;
}

class StudentClass implements StudentInterface {
    schoolName: string;
    yearOfBirth: number;
    city: string;
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string, schoolName: string, city: string, yearOfBirth: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
        this.schoolName = schoolName;
    }

    age() {
        return 2018 - this.yearOfBirth;
    } 

    printStudentFullName(): void {
        console.log(this.lastName + ',' + this.firstName);
    }
}

const Bart2 = new StudentClass('Bart', 'Simpson', 'Springfield Elementary School', 'Springfield', 1987);

const BartName2 = Bart2.firstName;
const BartAge2 = Bart2.age();

// -----------------------------------------------------------------------

interface Food {
    name?: string | Object;
    calories: number;
}

function speak(food: Food): void {
    console.log('Our ' + food.name + ' has ' + food.calories + ' calories.');
}

var iceCream = {
    name: 'ice cream',
    calories: 200
};

speak(iceCream);

// -----------------------------------------------------------------------

function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];    // Create empty array of type T.
    arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
    return arrayOfT;
}
  
var arrayFromString = genericFunc<string>('beep');
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0]);  // String

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0]);  // number

// ------------------------------------------------------------------------

function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }

    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    if (isString(padding)) {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft('Hello world', 4); // returns "    Hello world"

// ------------------------------------------------------------------------

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // works
pet.swim();    // error

function isFish(arg: any): arg is Fish {
    return arg;
}

if (isFish(pet)) {
    pet.layEggs(); // works
    pet.swim();    // works
}
