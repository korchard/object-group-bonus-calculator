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



//Kim's code working with Cassen and Carl...and lots of help from Mary's live share

console.log( employees ); // to ensure it's connected and working

for (let i = 0; i < employees.length; i++) { // function is not needed here
  console.log('Employee Bonus Info: ', employeeObject(employees[i]));
} // end for loop

// created a function that makes the new objects of employees - my group couldn't figure out how to get this aspect, got formatting and code from Mary
function employeeObject(employee) {
  console.log('Employee is ', employee);
  let bonusPercentage = calculateBonus(employee); //need to declare and call this function before the property value, or else it returns 'bonusPercentage undefined'
  let totalBonus = Number(employee.annualSalary) * bonusPercentage * 0.01;
  let newEmployeeObj = { // object is created to create a new array of employees
    name: employee.name, // property taken from inital employees array
    totalCompensation: Number(employee.annualSalary) + totalBonus, // need to use Number method to change the string of annualSalary to a number
    bonusPercentage: bonusPercentage, // input the function for this key value
    totalBonus: totalBonus
  };
  return newEmployeeObj;
} // end employeeObject function

function calculateBonus(employee) {
  let bonusPercentage = 0;
 if (employee.reviewRating <= 2) {
   bonusPercentage = 0;
 } else if (employee.reviewRating == 3) {
   bonusPercentage = 4;
 } else if (employee.reviewRating == 4) {
   bonusPercentage = 6;
 } else if (employee.reviewRating == 5) {
   bonusPercentage = 10;
 } // end reviewRating conditional

 if (employee.employeeNumber.length == 4) { 
   bonusPercentage += 5;
 } // end employeeNumber conditional

 if (Number(employee.annualSalary) >= 65000) { // need to use Number to change from string to num
   bonusPercentage -= 1;
 } // end annualSalary conditional

 if(bonusPercentage > 13){
   bonusPercentage = 13; // ceiling on bonusPercentage
 } else if (bonusPercentage < 0){
   bonusPercentage = 0;
 } // floor on bonusPercentage
 
console.log('Total Bonus Percentage: ', bonusPercentage);
return bonusPercentage;
} //end calculateBonus
