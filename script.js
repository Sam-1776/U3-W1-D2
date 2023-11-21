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
var i = 0;
var j = 0;
var SonAccount = /** @class */ (function () {
    function SonAccount(_nome, _cognome, _eta, _balanceInit) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
        this.balanceInit = _balanceInit;
        /* THIS indica la sua istanza */
    }
    SonAccount.prototype.getAccount = function () {
        return "".concat(this.nome, " ").concat(this.cognome, " ACCOUNT");
    };
    SonAccount.prototype.oneDeposit = function (x) {
        i++;
        var deposit = x;
        this.balanceInit += deposit;
        return "".concat(i, " HA DEPOSITATO: + ").concat(deposit, "\u20AC");
    }; // versamento 
    SonAccount.prototype.oneWithDraw = function (x) {
        j++;
        var prelievo = x;
        this.balanceInit -= prelievo;
        return "".concat(j, " HA PRELEVATO: - ").concat(prelievo, "\u20AC");
    }; // prelievo
    SonAccount.prototype.finalSald = function () {
        return "IL SALDO FINALE: ".concat(this.balanceInit, "\u20AC");
    };
    return SonAccount;
}());
var Piero = new SonAccount('Piero', 'Gialli', 20, 0);
console.log(Piero.getAccount());
console.log(Piero.oneDeposit(100));
console.log(Piero.oneWithDraw(30));
console.log(Piero.finalSald());
console.log(Piero.oneDeposit(100));
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_nome, _cognome, _eta, _balanceInit) {
        return _super.call(this, _nome, _cognome, _eta, _balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var interest = (this.balanceInit * 10) / 100;
        this.balanceInit -= interest;
        return "IL SALDO FINALE MENO GLI INTERESSI: ".concat(this.balanceInit, "\u20AC");
    };
    return MotherAccount;
}(SonAccount));
var Anna = new MotherAccount('Anna', 'Verdi', 44, 0);
console.log(Anna.getAccount());
console.log(Anna.oneDeposit(1200));
console.log(Anna.oneWithDraw(370));
console.log(Anna.finalSald());
console.log(Anna.addInterest());
