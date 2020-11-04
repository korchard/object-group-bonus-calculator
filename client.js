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

let bonusPercentage = 0;
let totalCompensation = grossYearly;
let totalBonus = 0;

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
console.log(2 + 5 / 2);

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
 
console.log('Total Bonus Percentage: ');
return bonusPercentage;
totalCompCalculation();
totalBonusCalculation();
 // employeeBonus.push({name: employees[i].name, bonusPercentage: });
} //end calculateBonus

function totalCompCalculation(){
  let grossYearly = person.annualSalary + (person.annualSalary * person.bonusPercentage);
  grossYearly = grossYearly / 100;
  return grossYearly;
} // end totalCompCalculation function

function totalBonusCalculation(){
  let totalBonus = grossYearly - person.annualSalary;
  return totalBonus;
} // end totalBonusCalculation function

function newEmployeeObject(name, bonusPercentage, totalCompensation, totalBonus) {
  let newEmployeeData = {
    name: name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  };
}