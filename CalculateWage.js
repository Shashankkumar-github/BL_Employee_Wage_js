const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;  
const MAX_HRS_IN_MONTH = 160;
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
//UC6
let dailyWageArray = []; 
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();

const getWorkingHours = (emp) => 
    emp === IS_PART_TIME ? PART_TIME_HOURS : 
    emp === IS_FULL_TIME ? FULL_TIME_HOURS : 0;


function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {  
    let empCheck = Math.floor(Math.random() * 10) % 3;  
    totalEmpHrs += getWorkingHours(empCheck);  
}  
while (totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {  
    totalWorkingDays++;  
    let empCheck = Math.floor(Math.random() * 10) % 3;  
    totalEmpHrs = getWorkingHours(empCheck); 
    
    
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
        empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;
    }
    
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    dailyWageArray.push({ day: totalWorkingDays, dailyWage: dailyWage });
    empDailyWageMap.set(totalWorkingDays, dailyWage); 
    empDailyHoursMap.set(totalWorkingDays, empHrs);
}  
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;  
console.log("Total Days Worked: " + totalWorkingDays + ", Total Hours Worked: " + totalEmpHrs); 
console.log("Total Employee Wage for " + NUM_OF_WORKING_DAYS + " days: $" + totalEmpWage);

console.log("UC6 Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalWage);
console.log("Daily Wages Array:", dailyWageArray);

// a.  
const totalWage = dailyWageArray.reduce((total, wage) => total + wage, 0);
console.log(`Total Wage: ${totalWage}`);

// b.  
const dailyWagesWithDays = Array.from(empDailyWageMap.entries())
    .map(([day, wage]) => `Day ${day}: Wage ${wage}`);
console.log("Daily Wages with Days:\n", dailyWagesWithDays.join("\n"));

// c.  
const fullTimeWageDays = Array.from(empDailyWageMap.entries())
    .filter(([day, wage]) => wage === 160)
    .map(([day, wage]) => `Day ${day}`);
console.log("Days with Full Time Wage:", fullTimeWageDays.join(", "));

// d.  
const firstFullTimeWageDay = Array.from(empDailyWageMap.entries())
    .find(([day, wage]) => wage === 160);
console.log(`First Full Time Wage Earned on: Day ${firstFullTimeWageDay[0]}`);

// e.  
const isEveryFullTimeWageValid = Array.from(empDailyWageMap.values())
    .every(wage => wage === 160 || wage !== 160);
console.log("Is Every Full Time Wage Correct?", isEveryFullTimeWageValid);

// f.  
const hasPartTimeWage = Array.from(empDailyWageMap.values()).some(wage => wage === 80);
console.log("Is There Any Part Time Wage?", hasPartTimeWage);

// g. 
const workingDays = Array.from(empDailyHoursMap.values())
    .filter(hours => hours > 0).length;
console.log("Number of Days Employee Worked:", workingDays);
