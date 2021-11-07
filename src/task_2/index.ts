/** Задача 2 - Много стран, много валют
 * Определите классы следующих валют
 * Dollar
 * Ruble
 * XRP
 * Etherium
 * Gold
 */
import {Currency, CurrencyType} from "../task_1";

export class Dollar extends Currency {
    private readonly _currencyType: CurrencyType;

    constructor(value: number) {
        super("Dollar", value, "USD");
        this._currencyType = CurrencyType.materialCurrency;
    }
}

export class Ruble extends Currency {
    private readonly _currencyType: CurrencyType;

    constructor(value: number) {
        super("Ruble", value, "RUB");
        this._currencyType = CurrencyType.materialCurrency;
    }
}

export class XRP extends Currency {
    private readonly _currencyType: CurrencyType;

    constructor(value: number) {
        super("XRP", value, "XRP");
        this._currencyType = CurrencyType.CryptoСurrency
    }
}

export class Etherium extends Currency {
    private readonly _currencyType: CurrencyType;

    constructor(value: number) {
        super("Etherium", value, "ETH");
        this._currencyType = CurrencyType.CryptoСurrency;
    }
}

export class Gold extends Currency {
    private readonly _currencyType: CurrencyType;

    constructor(value: number) {
        super("Gold", value, "gram");
        this._currencyType = CurrencyType.MetalDepositCurrency;
    }
}


