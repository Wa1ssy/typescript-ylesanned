if (true) {

}
else if (false) {

}
else {

}

const month: number = 9;
let monthName: string;
switch (month) {
    case 1:
        monthName = "jaanuar";
        break;
    case 5:
        monthName = "mai";
        break;
    case 9:
        monthName = "september";
        break;
    default:
        monthName = "pole teada";
        break;
}
console.log(monthName);

let isThisOddOrEven = 5;
let oddEvenBool = isThisOddOrEven % 2 === 0 ? "paaris" : "paaritu";
console.log(oddEvenBool);

if (month && monthName) {
    console.log("month ja monthName on olemas");
}
if (month || monthName) {
    console.log("month või monthName on olemas");
}
if (!month) {
    console.log("month ei ole olemas");
}