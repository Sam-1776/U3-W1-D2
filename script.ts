let i = 0
let j = 0

class SonAccount{
    nome: string;
    cognome: string;
    eta: number;
    balanceInit: number
    constructor(_nome: string, _cognome: string, _eta: number, _balanceInit: number) {
      this.nome = _nome;
      this.cognome = _cognome;
      this.eta = _eta;
      this.balanceInit = _balanceInit
  
      /* THIS indica la sua istanza */
    }
    getAccount(): string{
        return `${this.nome} ${this.cognome} ACCOUNT`;
      }
    oneDeposit(x: number):any{
        i++
        let deposit: number = x 
        this.balanceInit += deposit;
        return `${i} HA DEPOSITATO: + ${deposit}€`
        
    } // versamento 
    oneWithDraw(x: number):any{
        j++
        let prelievo: number = x 
        this.balanceInit -= prelievo;
        return `${j} HA PRELEVATO: - ${prelievo}€`
    } // prelievo
    finalSald():any{
        return `IL SALDO FINALE: ${this.balanceInit}€`
    }
}

const Piero = new SonAccount('Piero', 'Gialli', 20, 0)
console.log(Piero.getAccount());

console.log(Piero.oneDeposit(100));
console.log(Piero.oneWithDraw(30));
console.log(Piero.finalSald());
console.log(Piero.oneDeposit(100));

class MotherAccount extends SonAccount{
    constructor(_nome: string, _cognome: string, _eta: number, _balanceInit: number) {
        super(_nome, _cognome, _eta, _balanceInit)
      }

      addInterest():any {
        let interest = (this.balanceInit * 10) / 100
        this.balanceInit -= interest 
        return `IL SALDO FINALE MENO GLI INTERESSI: ${this.balanceInit}€`
      }
}

const Anna = new MotherAccount('Anna', 'Verdi', 44, 0)
console.log(Anna.getAccount());

console.log(Anna.oneDeposit(1200));
console.log(Anna.oneWithDraw(370));
console.log(Anna.finalSald());

console.log(Anna.addInterest());




