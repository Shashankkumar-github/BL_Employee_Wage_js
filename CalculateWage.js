const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;  
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

// UC4
// Function to Get Work Hours  
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

// Compute Total Employee Wage for a Month  
let totalEmpHrs = 0; 
//UC5
let totalWorkingDays = 0;   

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {  
    let empCheck = Math.floor(Math.random() * 10) % 3;  
    totalEmpHrs += getWorkingHours(empCheck);  
}  
while (totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {  
    totalWorkingDays++;  
    let empCheck = Math.floor(Math.random() * 10) % 3;  
    totalEmpHrs += getWorkingHours(empCheck);  
}  
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;  
console.log("Total Days Worked: " + totalWorkingDays + ", Total Hours Worked: " + totalEmpHrs); 
console.log("Total Employee Wage for " + NUM_OF_WORKING_DAYS + " days: $" + totalEmpWage);

