/** Задача 1 - Сущность любой монетки
 * Опишите класс валюты
 * Он должен определять имя(name) валюты, String
 * Содержать количество(value) валюты, Number
 * Содержать количественный тип(unit), в котором исчисляется валюта, String
 * Класс должен предоставлять информацию о типе валюты: Материальная, криптовалюта или металл-депозит
 * Example new Currency("DOGE", 12.5, "satoshi")
 */

export class Currency {
    private _name: string;
    private _value: number;
    private readonly _unit: string;

    constructor(name: string, value: number, unit: string) {
        if (name === " " || name === "" || value < 0
            || name === undefined || value === undefined || unit === undefined) {
            throw new Error("Input data is incorrect for Currency creation");
        }

        this._name = name;
        this._value = value;
        this._unit = unit;
    }

    public get name(): string {
        return this._name;
    }

    public set name(n: string) {
        if (n === " " || n === "" || n === undefined) {
            throw new Error("The input data is incorrect for name of Currency");
        }

        this._name = n;
    }

    public get value(): number {
        return this._value;
    }

    public set value(v: number) {
        if (v < 0 || v === undefined) {
            throw new Error("The input data is incorrect for name of Currency");
        }

        this._value = v;
    }
}

export enum CurrencyType {
    materialCurrency,
    CryptoСurrency,
    MetalDepositCurrency
}
