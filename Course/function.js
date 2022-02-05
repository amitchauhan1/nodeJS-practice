// variables............
// const variable value never change run time
const name = 'amit'; //string
// let veriable will change on run time;
let age = 25; //number
// var value can change any where
var isWorking = true; // Boolean

console.log('Previous values' + 'Name: ' + name + 'Age: ' + age + 'Working status: ' + isWorking);

// Change age
age = 26;

console.log('New values ' + 'Name: ' + name + 'Age: ' + age + 'Working status: ' + isWorking);

// Normal function is JS

/**
 * 
 * @param {*} empName Emp Name
 * @param {*} empAge Emp Age
 * @param {*} empStatus Emp status
 * @returns detail of employee
 */
function printEmployeeDetail1(empName, empAge, empStatus) {
    return 'Employee Details1 ' + 'Name: ' + empName + 'Age: ' + empAge + 'Working status: ' + empStatus;
}

// Arrow function
const printEmployeeDetail2 = (empName, empAge, empStatus) => {
    return `Employee Details2 Name: ${empName}. Age: ${empAge}. Working status: ${empStatus}`;
}

/**
 * Return sum of a and b value, this is a single line method
 * @param {*} a 
 * @param {*} b 
 * @returns sum of a + b
 */
const add = (a, b) => a + b;

/**
 * Return value + 1, this is a single line method
 * @param {*} a 
 * @returns sum of a + 1
 */
 const addOne = a => a + 1;

 /**
  * Print your name
  */
 const printName = () => 'amit chauhan';

// call method
console.log(printEmployeeDetail1(name, age, isWorking));
console.log(printEmployeeDetail2(name, age, isWorking));
console.log(add(10, 10));
console.log(addOne(10));
console.log(printName());



/**
 * OBJECT
 */

const person1 = {
    name: 'amit',
    age: 20,
    nameDetail: () => console.log('testing')
}

const person2 = {
    name: 'amit',
    age: 20,
    nameDetail: () => console.log('I am ' + this.name)
}

const person3 = {
    name: 'amit',
    age: 20,
    nameDetail: function() {console.log('I am ' + this.name)}
}

const person4 = {
    name: 'amit',
    age: 20,
    nameDetail() {console.log('I am ' + this.name)}
}

person1.nameDetail();
console.log(person1);


console.log(person2);
person2.nameDetail();


console.log(person3);
person3.nameDetail();


console.log(person4);
person4.nameDetail();