const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    console.log(studentReport[i]);
}

// Using a while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// Using a foreach loop
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
})

// using a for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}