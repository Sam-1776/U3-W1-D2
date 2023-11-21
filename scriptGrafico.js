var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccountG = /** @class */ (function () {
    function SonAccountG(_nome, _cognome, _eta, _balanceInit) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
        this.balanceInit = _balanceInit;
        /* THIS indica la sua istanza */
    }
    SonAccountG.prototype.getAccount = function () {
        return "".concat(this.nome, " ").concat(this.cognome, " ACCOUNT");
    };
    SonAccountG.prototype.oneDeposit = function (x) {
        var deposit = x;
        this.balanceInit += deposit;
        return "HA DEPOSITATO: + ".concat(deposit, "\u20AC");
    }; // versamento 
    SonAccountG.prototype.oneWithDraw = function (x) {
        var prelievo = x;
        this.balanceInit -= prelievo;
        return "HA PRELEVATO: - ".concat(prelievo, "\u20AC");
    }; // prelievo
    SonAccountG.prototype.finalSald = function () {
        return "IL SALDO FINALE: ".concat(this.balanceInit, "\u20AC");
    };
    return SonAccountG;
}());
var MotherAccountG = /** @class */ (function (_super) {
    __extends(MotherAccountG, _super);
    function MotherAccountG(_nome, _cognome, _eta, _balanceInit) {
        return _super.call(this, _nome, _cognome, _eta, _balanceInit) || this;
    }
    MotherAccountG.prototype.addInterest = function () {
        var interest = (this.balanceInit * 10) / 100;
        this.balanceInit -= interest;
        return "IL SALDO FINALE MENO GLI INTERESSI: ".concat(this.balanceInit, "\u20AC");
    };
    return MotherAccountG;
}(SonAccountG));
var btn = document.getElementById("son");
var btnM = document.getElementById("mother");
var title = document.getElementById("name");
var home = document.getElementById("Home");
btn.addEventListener("click", accountS);
function accountS() {
    var nameI = document.querySelector("#nameAccount");
    var surnameI = document.querySelector("#surnameAccount");
    var ageI = document.querySelector("#eta");
    var balanceI = document.querySelector("#bilancio");
    var name = nameI.value;
    var surname = surnameI.value;
    var age = Number(ageI.value);
    var balance = Number(balanceI.value);
    var son = new SonAccountG(name, surname, age, balance);
    title.innerHTML = "".concat(name, " ").concat(surname, "-ACCOUNT");
    home.classList.add("d-none");
    generate(son, age);
}
btnM.addEventListener("click", accountM);
function accountM() {
    var nameI = document.querySelector("#nameAccount");
    var surnameI = document.querySelector("#surnameAccount");
    var ageI = document.querySelector("#eta");
    var balanceI = document.querySelector("#bilancio");
    var name = nameI.value;
    var surname = surnameI.value;
    var age = Number(ageI.value);
    var balance = Number(balanceI.value);
    var mother = new MotherAccountG(name, surname, age, balance);
    title.innerHTML = "".concat(name, " ").concat(surname, "-ACCOUNT");
    home.classList.add("d-none");
    generate(mother, age);
}
var div = document.querySelector("#action");
var divM = document.querySelector("#movimenti");
function generate(x, y) {
    console.log(x.getAccount());
    var btnD = document.createElement("button");
    btnD.innerText = "Deposit";
    btnD.className = "btn btn-outline-secondary ms-2";
    var btnR = document.createElement("button");
    btnR.innerText = "Withdraw";
    btnR.className = "btn btn-outline-secondary ms-2";
    var inputD = document.createElement("input");
    inputD.id = "deposit";
    inputD.type = "number";
    inputD.className = "rounded border border-light bg-transparent text-light";
    inputD.style = "width: 300px";
    var inputR = document.createElement("input");
    inputR.id = "Withdraw";
    inputR.type = "number";
    inputR.className = "rounded border border-light bg-transparent text-light";
    inputR.style = "width: 300px";
    var divR = document.createElement("div");
    divR.className = "d-flex mb-4";
    var divD = document.createElement("div");
    divD.className = "d-flex";
    var btnE = document.createElement("button");
    btnE.innerText = "Conto";
    btnE.className = "btn btn-outline-secondary ms-2 align-self-center";
    divD === null || divD === void 0 ? void 0 : divD.appendChild(inputD);
    divD === null || divD === void 0 ? void 0 : divD.appendChild(btnD);
    divR === null || divR === void 0 ? void 0 : divR.appendChild(inputR);
    divR === null || divR === void 0 ? void 0 : divR.appendChild(btnR);
    div === null || div === void 0 ? void 0 : div.appendChild(divD);
    div === null || div === void 0 ? void 0 : div.appendChild(divR);
    div === null || div === void 0 ? void 0 : div.appendChild(btnE);
    btnD.onclick = function () { return addM(x); };
    btnR.onclick = function () { return removM(x); };
    btnE.onclick = function () { return printM(x, y); };
}
function addM(y) {
    var In = document.querySelector("#deposit");
    var plus = Number(In.value);
    console.log(plus);
    var h3 = document.createElement("h3");
    h3.innerHTML = y.oneDeposit(plus);
    In.value = " ";
    divM === null || divM === void 0 ? void 0 : divM.appendChild(h3);
}
function removM(y) {
    var Out = document.querySelector("#Withdraw");
    var menus = Number(Out.value);
    var h3 = document.createElement("h3");
    h3.innerHTML = y.oneWithDraw(menus);
    Out.value = " ";
    divM === null || divM === void 0 ? void 0 : divM.appendChild(h3);
}
function printM(y, e) {
    if (e > 32) {
        var h3 = document.createElement("h3");
        h3.innerHTML = y.addInterest();
        divM === null || divM === void 0 ? void 0 : divM.appendChild(h3);
    }
    else {
        var h3 = document.createElement("h3");
        h3.innerHTML = y.finalSald();
        divM === null || divM === void 0 ? void 0 : divM.appendChild(h3);
    }
}
