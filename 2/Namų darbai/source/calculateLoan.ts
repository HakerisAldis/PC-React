import ConsumerLoan from "./consumerLoan";
import FastLoan from "./fastLoan";
import HouseLoan from "./houseLoan";

const MIN_LOAN_SIZE = 0;
const MAX_FAST_LOAN_SIZE = 5000;
const MAX_CONSUMER_LOAN_SIZE = 10000;
const MAX_CONSUMER_LOAN_PERIOD = 60;
const MIN_LOAN_PERIOD = 0;
const MAX_HOUSE_LOAN_PERIOD = 360;
const MAX_FAST_LOAN_PERIOD = 24;
const MONTHS_IN_YEAR = 12;

let loanSubmit = document.getElementById("loanForm");
let formClass = loanSubmit.className;

if (formClass == "fastLoan") {
    loanSubmit.addEventListener("submit", calculateFastLoan);
}
else if (formClass == "houseLoan") {
    loanSubmit.addEventListener("submit", calculateHouseLoan);
}
else if (formClass == "consumerLoan") {
    loanSubmit.addEventListener("submit", calculateConsumerLoan);
}


function calculateFastLoan() {
    let loanSize = +(<HTMLInputElement>document.getElementById("loanSize")).value;
    let loanPeriod = +(<HTMLInputElement>document.getElementById("loanPeriod")).value;
    let errorMsg = document.getElementById("errorMsg");
    let text = document.getElementById("calculatedLoan");

    if (loanSize < MIN_LOAN_SIZE || loanSize > MAX_FAST_LOAN_SIZE) {
        text.textContent = "";
        errorMsg.textContent = `Maksimali paskolos suma ${MAX_FAST_LOAN_SIZE} eur!`;
    }
    else if (loanPeriod < MIN_LOAN_PERIOD || loanPeriod > MAX_FAST_LOAN_PERIOD) {
        text.textContent = "";
        errorMsg.textContent = `Maksimalus terminas ${MAX_FAST_LOAN_PERIOD} mėn.!`;
    }
    else {
        errorMsg.textContent = "";
        let fastLoan = new FastLoan(loanSize, loanPeriod)
        text.textContent = `Mėnesinis mokėstis: ${fastLoan.monthlyPayment()}`;
    }
}

function calculateHouseLoan() {
    let loanSize = +(<HTMLInputElement>document.getElementById("loanSize")).value;
    let loanPeriod = +(<HTMLInputElement>document.getElementById("loanPeriod")).value;
    let salary = +(<HTMLInputElement>document.getElementById("salary")).value;
    let numOfChildren = +(<HTMLInputElement>document.getElementById("numOfChildren")).value;
    let periodInMonths = loanPeriod * MONTHS_IN_YEAR;

    let maxLoanSize = (salary / 5) * periodInMonths; //Atlyginimas padalinamas iš 5, kad atskirtų sumą, kurią klientas gali skirti paskolai
    console.log(maxLoanSize);

    let errorMsg = document.getElementById("errorMsg");
    let text = document.getElementById("calculatedLoan");

    if (loanSize < MIN_LOAN_SIZE || loanSize > maxLoanSize) {
        text.textContent = "";
        errorMsg.textContent = `Maksimali paskolos suma ${maxLoanSize} eur!`;
    }
    else if (loanPeriod < MIN_LOAN_PERIOD || periodInMonths > MAX_HOUSE_LOAN_PERIOD) {
        text.textContent = "";
        errorMsg.textContent = `Maksimalus terminas ${MAX_HOUSE_LOAN_PERIOD / MONTHS_IN_YEAR} m.!`;
    }
    else {
        errorMsg.textContent = "";
        let houseLoan = new HouseLoan(loanSize, periodInMonths, numOfChildren, salary);
        text.textContent = `Mėnesinis mokėstis: ${houseLoan.monthlyPayment()}`;
    }
}

function calculateConsumerLoan() {
    let loanSize = +(<HTMLInputElement>document.getElementById("loanSize")).value;
    let loanPeriod = +(<HTMLInputElement>document.getElementById("loanPeriod")).value;
    let itemType = (<HTMLInputElement>document.getElementById("itemType")).value;
    let periodInMonths = loanPeriod * MONTHS_IN_YEAR;

    let errorMsg = document.getElementById("errorMsg");
    let text = document.getElementById("calculatedLoan");

    if (loanSize < MIN_LOAN_SIZE || loanSize > MAX_CONSUMER_LOAN_SIZE) {
        text.textContent = "";
        errorMsg.textContent = `Maksimali paskolos suma ${MAX_CONSUMER_LOAN_SIZE} eur!`;
    }
    else if (loanPeriod < MIN_LOAN_PERIOD || periodInMonths > MAX_CONSUMER_LOAN_PERIOD) {
        console.log(periodInMonths);
        text.textContent = "";
        errorMsg.textContent = `Maksimalus terminas ${MAX_CONSUMER_LOAN_PERIOD / MONTHS_IN_YEAR} m.!`;
    }
    else {
        errorMsg.textContent = "";
        let consumerLoan = new ConsumerLoan(loanSize, periodInMonths, itemType);
        text.textContent = `Mėnesinis mokėstis: ${consumerLoan.monthlyPayment()}`;
    }
}

