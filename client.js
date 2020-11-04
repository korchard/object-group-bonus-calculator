const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//Mary's code
console.log(employees); // just to see if it's working

for (let employeeItem of employees) { // loops through the employees array
  let result = processEmployee(employeeItem);
  console.log('Processed employee is: ', result); // logs the objects in the array individually
} // end for loop

function processEmployee(employee) {
  console.log('Employee is ', employee);
  let bonusPercentage = calculateBonusPercentage(employee);
  let totalBonus = Number(employee.annualSalary) * bonusPercentage * 0.01;
  let newEmployeeObj = { // object is created to create a new array of employees
    name: employee.name,
    totalCompensation: Number(employee.annualSalary) + totalBonus,
    bonusPercentage: bonusPercentage, // input the function for this key value
    totalBonus: totalBonus
  }
  return newEmployeeObj;
} // end processEmployee function

function calculateBonusPercentage(employee) {
  let bonusPercentage = 0;
  switch (employee.reviewRating) { // using a switch because there are many parameters
    // different than if else statements...how?
    case 0: // probably better to do if else with this scenerio
    case 1:
    case 2: 
      bonusPercentage = 0; // redundant, but don't want to lose what should happen with this
      break;
    case 3:
      bonusPercentage = 4;
      break;
    case 4:
      bonusPercentage = 6; 
      break;
    case 5:
      bonusPercentage = 10;
      break;
  }
  if (employee.reviewRating > 2 && employee.employeeNumber.length === 4) { // can use .length on a dot property :)
    bonusPercentage += 5;
  }

  if (employee.annualSalary > 65000) {
    bonusPercentage -= 1;
  }

  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  } else if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }

  return bonusPercentage;
} // end calculateBonusPercentage function

/* Carl, Cassen, and Kim's code

let bonusPercentage = 0;
let totalCompensation = 0;
let totalBonus = 0;

//let finalEmployeeData = [];
//console.log( employees );
//console.log(2 + 5 / 2);

function employeeData(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
  } // end for loop
} // end employeeData function

function calculateBonus(person) {
 if(person.reviewRating <= 2){
   bonusPercentage = 0;
 }
 else if(person.reviewRating == 3){
   bonusPercentage = 4;
 }
 else if(person.reviewRating == 4){
   bonusPercentage = 6;
 } 
 else if(person.reviewRating == 5){
   bonusPercentage = 10;
 } // end reviewRating conditional
 if(person.employeeNumber < 10000){
   bonusPercentage = bonusPercentage + 5;
 } // end employeeNumber conditional
 if(person.annualSalary >= 65000){
   bonusPercentage = bonusPercentage - 1;
 } // end annualSalary conditional
 if(bonusPercentage > 13){
   bonusPercentage = 13;
 } // ceiling on bonusPercentage
 if(bonusPercentage < 0){
   bonusPercentage = 0;
 } // floor on bonusPercentage
 
console.log('Total Bonus Percentage: ', bonusPercentage);

let grossYearly = 0;
grossYearly = Number(person.annualSalary) + (Number(person.annualSalary) * bonusPercentage)/100;
//grossYearly = Number(grossYearly) / 100;
console.log(grossYearly);
console.log(Number(person.annualSalary));

let totalBonus = Number(grossYearly - person.annualSalary);
console.log(totalBonus);

let newEmployeeData = {
  name: name,
  bonusPercentage: bonusPercentage,
  totalCompensation: totalCompensation,
  totalBonus: totalBonus
};

finalEmployeeData.push(newEmployeeData);

} //end calculateBonus

function totalCompCalculation(){
  let grossYearly = person.annualSalary + (person.annualSalary * person.bonusPercentage);
  grossYearly = grossYearly / 100;
  console.log(grossYearly);
  return grossYearly;
} // end totalCompCalculation function

function totalBonusCalculation(){
  let totalBonus = grossYearly - person.annualSalary;
  console.log(totalBonus);
  return totalBonus;
} // end totalBonusCalculation function*/

