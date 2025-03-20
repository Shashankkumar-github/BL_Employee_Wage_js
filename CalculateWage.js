const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
// UC2
// Compute Employee Hours
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;

switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

// Calculate Employee Wage
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);

//UC3

function getWorkingHrs(emp){
    switch(emp){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                default:
                    return 0;
    }
}
let Hrs=0;
let emp=Math.floor(Math.random()*10)%3;
Hrs=getWorkingHrs(emp);
empWage=Hrs*WAGE_PER_HOUR;
console.log("Emp wage:"+empWage);