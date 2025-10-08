
/*
* Challenge Requirements: Ask the user for their name and store it in a variable.
﻿﻿Ask the user for their total income using prompt ().
﻿Ask the user how many expenses they have, then use a loop to collect expense amounts dynamically.
﻿make sure to validate all the inputs
﻿Perform all calculations (tax, balance, savings, financial status).
﻿Show the results in the console.

/*
MI Personal Budget Tracker
User: Alex
Total Income: $5000
Total Expenses: $2200
Tax Deducted (10%): $500
Net Income After Tax: $4500
Remaining Balance: $2300
Savings (20% of balance): $460
Needs Improvement. Consider reducing expenses.
*/

let usern=prompt("yoyr Name :");
let totalincom=parseInt(prompt("your total income :"));
let totalex=parseInt(prompt("Total Expenses :"));

if(isNaN(totalincom) || isNaN(totalex) || totalincom<=0 || totalex<=0 || totalex<0){
    console.log("invalid  Input Try again")
}
else{
    let totalex=0;

    for(let i=1; i<=totalex; i=i+1){
        let expense=parseFloat(prompt('inter expenses ${i}: '));

        if(isNaN(totalex) || totalex<0){
            console.log('invalid ${i} , setting it it $0');
            totalex=0;
        }
        
    }
}