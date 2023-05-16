console.log("Welcome to Employee Payroll Program!!");

//UC7
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_NO_TIME = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const TOTAL_WORKING_HOURS = 160;
let empWageArray = new Array();
let empDailyMap = new Array();
let empDailyWageMap = new Map();
let empDailyHrMap = new Map();
let empDailyHrsAndWageArray = new Array();

function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

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
let empDailyWageArray = new Array();

while (totalEmpHrs <= TOTAL_WORKING_HOURS && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
    empDailyHrsAndWageArray.push({
        dayNum: totalWorkingDays,
        dailyHrs: empHrs,
        dailyWage: calculateDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum + ' => Working hours is ' + this.dailyHrs + 'And wage earned= ' + this.dailyWage


        },
    });
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
    empDailyHrMap.set(totalEmpHrs, getWorkingHours(empCheck));
}
console.log("UC10- Showing Day Hour work and wage: " + empDailyHrsAndWageArray);

let employeeWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Employee Daily Wage: " + employeeWage);

//UC-7A
let totalEmpWage = 0;

function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC-7A - Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Employee Daily Wage: " + employeeWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC-7A - Employee Wage with Reduce method: " + empDailyWageArray.reduce(totalWages, 0));

//UC-7B
let dayAlong = 0;
function mapDayAlongWithDailyWage(dailyWage) {
    dayAlong++;
    return dayAlong + " = " + dailyWage;

}
let mapDayWithWageArray = empDailyWageArray.map(mapDayAlongWithDailyWage);
console.log("UC-7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//UC-7C

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");

}
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC-7c - Daily Wage filter when Fulltime hour is 160: ");
console.log(fullDayWageArray);

//UC-7D

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let findDayWageArray = mapDayWithWageArray.find(findFullTimeWage);
console.log("UC-7D - Daily Wage Find when Fulltime hour is 160: ");
console.log(findDayWageArray);

//UC-7E
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let allFullTimeWageArray = mapDayWithWageArray.every(isAllFullTimeWage);
console.log("UC-7E - Check all element have full time wage: ");
console.log(allFullTimeWageArray);

//UC-7F
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
let isAnyPartTimeWageArray = mapDayWithWageArray.some(isAllFullTimeWage);
console.log("UC-7F - Check if any part time Wage:");
console.log(isAnyPartTimeWageArray);

//UC-7G
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage.includes("80") || dailyWage.includes("160")) {
        return numOfDays + 1;
    }
    return numOfDays;
}
let totalDaysWorkedArray = mapDayWithWageArray.reduce(totalDaysWorked, 0);
console.log("UC-7G - Number of days employee worked: ");
console.log(totalDaysWorkedArray);

//UC8
console.log("UC8 - Store the Day and the Daily Wage along with the Total Wage");
console.log(empDailyWageMap);
let totalWageUsingMap = 0;
function totalWagesMap(dailyWage) {
    totalWageUsingMap += dailyWage;
}
Array.from(empDailyWageMap.values()).map(totalWagesMap);
console.log(" Total Wage using Map: " + totalWageUsingMap);

//UC9
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHrs = Array.from(empDailyHrMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A- Emp wage with arrow function: " + " Total Wage: " + totalSalary + " Total Hours: " + totalHrs);

let fullWorkingDays = new Array();
let partWorkingDays = new Array();
let noWorkingDays = new Array();
empDailyHrMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else noWorkingDays.push(key);
});
console.log("Full Working days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("No Working days: " + noWorkingDays);

//UC11-A
let totalWageEmp = empDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHrs, 0);

console.log("UC11-A - Total hours: " + totalHours + " Total Wages: " + totalWageEmp);

//UC11B
console.log("UC11-B - Logging Full work Days:");
empDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == FULL_TIME_HOURS)
    .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

//UC11-C
let partWorkingDaysStringArray = empDailyHrsAndWageArray.filter(empDailyHrsAndWageArray => empDailyHrsAndWageArray.dailyHrs == PART_TIME_HOURS)
    .map(empDailyHrsAndWageArray => empDailyHrsAndWageArray.dayNum);
console.log("UC11-C - Part working days: " + partWorkingDaysStringArray);

//UC11-D
let noWorkingDaysNum = empDailyHrsAndWageArray.filter(empDailyHrsAndWageArray => empDailyHrsAndWageArray.dailyHrs == 0)
    .map(empDailyHrsAndWageArray => empDailyHrsAndWageArray.dayNum);
console.log("UC11-D - No Working Days Nums: " + noWorkingDaysNum);