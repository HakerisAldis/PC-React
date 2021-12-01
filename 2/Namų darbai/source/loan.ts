export default abstract class Loan {
    loanSize: number;
    period: number;
    interest: number;

    constructor (loanSize: number, period: number, interest?: number) {
        this.loanSize = loanSize;
        this.period = period;
        this.interest = interest;
    }
}