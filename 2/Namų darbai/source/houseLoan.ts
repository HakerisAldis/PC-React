import Loan from "./loan";

const HOUSE_LOAN_INTEREST = 2;

export default class HouseLoan extends Loan {
    numOfChildren: number;
    salary: number;

    constructor (loanSize: number, period: number, numOfChildren: number, salary: number) {
        super(loanSize, period, 2);
        this.numOfChildren = numOfChildren;
        this.salary = salary;
    }

    monthlyPayment(): number {
        let monthlyInterestSum = this.loanSize * (this.interest / 100); // this.interest yra padalinamos iš 100, kad gautųsi procentali dalis
        let monthlyPayment = (this.loanSize / this.period) + monthlyInterestSum;
        return +Number(monthlyPayment).toFixed(2);
    }
}