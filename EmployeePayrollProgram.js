console.log("Welcome to Employee Payroll Program!!");

//UC5
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_NO_TIME = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const TOTAL_WORKING_HOURS = 160;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;


while (totalEmpHrs <= TOTAL_WORKING_HOURS && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

let employeeWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Employee Daily Wage: " + employeeWage);