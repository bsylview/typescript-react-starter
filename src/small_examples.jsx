import { isString } from 'lodash';

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


class Student {
    yearOfBirth;
    schoolName;
    city;
    firstName;
    lastName;

    constructor(firstName, lastName, schoolName, city, yearOfBirth) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
        this.schoolName = schoolName;

    }

    age() {
        return 2018 - this.yearOfBirth;
    }         

    printStudentFullName() {
        console.log(this.lastName + ',' + this.firstName);
    }
}

const Bart = new Student('Bart', 'Simpson', 'Springfield Elementary School', 'Springfield', 1987);

Bart.

Bart.firstName;
Bart.age();
