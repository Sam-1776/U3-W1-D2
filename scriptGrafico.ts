class SonAccountG{
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
        let deposit: number = x 
        this.balanceInit += deposit;
        return `HA DEPOSITATO: + ${deposit}€`
        
        
    } // versamento 
    oneWithDraw(x: number):any{
        let prelievo: number = x 
        this.balanceInit -= prelievo;
        return `HA PRELEVATO: - ${prelievo}€`
    } // prelievo
    finalSald():any{
        return `IL SALDO FINALE: ${this.balanceInit}€`
    }
}

class MotherAccountG extends SonAccountG{
    constructor(_nome: string, _cognome: string, _eta: number, _balanceInit: number) {
        super(_nome, _cognome, _eta, _balanceInit)
      }

      addInterest():any {
        let interest = (this.balanceInit * 10) / 100
        this.balanceInit -= interest 
        return `IL SALDO FINALE MENO GLI INTERESSI: ${this.balanceInit}€`
      }
}

const btn = document.getElementById("son") as HTMLButtonElement
const btnM = document.getElementById("mother") as HTMLButtonElement
const title = document.getElementById("name") as HTMLHeadingElement
const home = document.getElementById("Home") as HTMLDivElement

btn.addEventListener("click", accountS)

function accountS() {
    const nameI = document.querySelector("#nameAccount") as HTMLInputElement
    const surnameI = document.querySelector("#surnameAccount") as HTMLInputElement
    const ageI = document.querySelector("#eta") as HTMLInputElement
    const balanceI = document.querySelector("#bilancio") as HTMLInputElement

    const name = nameI.value
    const surname = surnameI.value
    const age = Number(ageI.value)
    const balance = Number(balanceI.value)
    let son = new SonAccountG(name, surname, age, balance)
    title.innerHTML = `${name} ${surname}-ACCOUNT`
    home.classList.add("d-none")
    generate(son, age)
}

btnM.addEventListener("click", accountM)

function accountM() {
    const nameI = document.querySelector("#nameAccount") as HTMLInputElement
    const surnameI = document.querySelector("#surnameAccount") as HTMLInputElement
    const ageI = document.querySelector("#eta") as HTMLInputElement
    const balanceI = document.querySelector("#bilancio") as HTMLInputElement

    const name = nameI.value
    const surname = surnameI.value
    const age = Number(ageI.value)
    const balance = Number(balanceI.value)
    let mother = new MotherAccountG(name, surname, age, balance)
    title.innerHTML = `${name} ${surname}-ACCOUNT`
    home.classList.add("d-none")
    generate(mother, age)
}

const div = document.querySelector("#action") as HTMLDivElement
const divM = document.querySelector("#movimenti") as HTMLDivElement
function generate(x: any, y:number) {
    console.log(x.getAccount());
    
    const btnD = document.createElement("button") as HTMLButtonElement
    btnD.innerText = "Deposit"
    btnD.className = "btn btn-outline-secondary ms-2"
    const btnR = document.createElement("button") as HTMLButtonElement
    btnR.innerText = "Withdraw"
    btnR.className = "btn btn-outline-secondary ms-2"
    const inputD = document.createElement("input") as HTMLInputElement
    inputD.id = "deposit"
    inputD.type = "number"
    inputD.className = "rounded border border-light bg-transparent text-light"
    inputD.style = "width: 300px"
    const inputR = document.createElement("input") as HTMLInputElement
    inputR.id = "Withdraw"
    inputR.type = "number"
    inputR.className = "rounded border border-light bg-transparent text-light"
    inputR.style = "width: 300px"

    const divR = document.createElement("div") as HTMLDivElement
    divR.className = "d-flex mb-4"
    const divD = document.createElement("div") as HTMLDivElement
    divD.className = "d-flex"
    const btnE = document.createElement("button") as HTMLButtonElement
    btnE.innerText = "Conto"
    btnE.className = "btn btn-outline-secondary ms-2 align-self-center"

    divD?.appendChild(inputD)
    divD?.appendChild(btnD)
    divR?.appendChild(inputR)
    divR?.appendChild(btnR)
    div?.appendChild(divD)
    div?.appendChild(divR)
    div?.appendChild(btnE)

    btnD.onclick! = () => addM(x)
    btnR.onclick! = () => removM(x)
    btnE.onclick! = () => printM(x, y)

}


function addM(y: any) {
    let In = document.querySelector("#deposit") as HTMLInputElement
    let plus = Number(In.value)
    console.log(plus);

    const h3 = document.createElement("h3")
    h3.innerHTML = y.oneDeposit(plus)
    In.value = " "

    divM?.appendChild(h3)
}

function removM(y: any) {
    let Out = document.querySelector("#Withdraw") as HTMLInputElement
    let menus = Number(Out.value)
    const h3 = document.createElement("h3")
    h3.innerHTML = y.oneWithDraw(menus)

    Out.value = " "

    divM?.appendChild(h3)
    
}

function printM(y: any, e: number) {
    if (e > 32) {
        const h3 = document.createElement("h3")
        h3.innerHTML = y.addInterest()
    
        divM?.appendChild(h3)
    }else{
        const h3 = document.createElement("h3")
        h3.innerHTML = y.finalSald()
    
        divM?.appendChild(h3)
    }
    
}