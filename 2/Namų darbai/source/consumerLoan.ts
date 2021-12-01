import Loan from "./loan";

const INTEREST_FOR_CAR = 4;
const INTEREST_FOR_COMPUTER = 6;
const INTEREST_FOR_PHONE = 8;

export default class ConsumerLoan extends Loan {
    itemType: string;

    constructor (loanSize: number, period: number, itemType: string) {
        super(loanSize, period);
        this.itemType = itemType;
    }

    setInterest(): void {
        switch(this.itemType){
            case "automobilis":
                this.interest = INTEREST_FOR_CAR;
                break;
            case "kompiuteris":
                this.interest = INTEREST_FOR_COMPUTER;
                break;
            case "telefonas":
                this.interest = INTEREST_FOR_PHONE;
                break;
        }
    }

    monthlyPayment(): number {
        this.setInterest();
        let monthlyInterestSum = this.loanSize * (this.interest / 100); // this.interest yra padalinamos iš 100, kad gautųsi procentali dalis
        let monthlyPayment = (this.loanSize / this.period) + monthlyInterestSum;
        return +Number(monthlyPayment).toFixed(2);
    }
}