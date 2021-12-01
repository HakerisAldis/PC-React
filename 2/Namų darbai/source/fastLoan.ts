import Loan from "./loan";

const FAST_LOAN_INTEREST = 20;

export default class FastLoan extends Loan {

    constructor (loanSize: number, period: number) {
        super(loanSize, period, FAST_LOAN_INTEREST);
    }

    monthlyPayment(): number {
        let monthlyInterestSum = this.loanSize * (this.interest / 100); // this.interest yra padalinamos iš 100, kad gautųsi procentali dalis
        let monthlyPayment = (this.loanSize / this.period) + monthlyInterestSum;
        return +Number(monthlyPayment).toFixed(2);
    }
}