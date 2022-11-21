class SonAccount {
    balance:number;

    constructor(_balanceInit:number = 0){ 
        this.balance = _balanceInit;
    }

    getBalance():number{
        return this.balance;
    }

    oneDeposit(d:number):number {
        this.balance += d;
        return this.balance;
    }

    oneWithdraw(w:number):number|string {
        if(w > this.balance) {
            return "Non hai abbastanza cedito";
        }
        this.balance -= w;
        return this.balance;
    }

}

class MotherAccount extends SonAccount {

    interest:number;

    constructor( _balanceInit:number = 0, _interest = 0.2) {
        super(_balanceInit);
        this.interest = _interest;
    }

    oneWithdraw(w:number):number|string {
        let wInterest = this.addInterest(w);
        if(wInterest > this.balance) {
            return "Non hai abbastanza cedito";
        }
        this.balance -= wInterest;
        return this.balance;
    }

    addInterest(x:number):number {
        return x + (x * this.interest);
    }
}

let s = new SonAccount(100);
let s1 = new SonAccount();

let balanceDiv = document.getElementById("balance")!;
balanceDiv.innerHTML = s.getBalance().toString();

let btnPrelevaFifty = document.getElementById("prelevaFifty")!;
btnPrelevaFifty.addEventListener("click", ()=>{
    balanceDiv.innerHTML = s.oneWithdraw(50).toString();
})

let input = document.getElementById("inputTest") as HTMLInputElement;
input.value = "";