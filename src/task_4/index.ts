/**
 * Задание 4 - Гарантия доставки
 * Денежки со счета на счет перевести легко, а вот дотащить 3 килограмма палладия, может быть затруднительно
 * Изучите интерфейс IContract
 * Опишите и реализуйте функционал сущности Договора-контракта
 * BankingContract - банковский перевод, без задержки
 * SmartContract - перевод через блокчейн, задержка 3000мс
 * LogisticContract - перевозка металла, задержка 6000мс
 */
import { Currency } from "../task_1";
import {ISecureVaultRequisites} from "../task_3";

abstract class Contract implements  IContract {
    private _id: number;
    private _state: ContractState = ContractState.pending;
    private _value: Currency;
    private _sender: ISecureVaultRequisites;
    private _receiver: ISecureVaultRequisites;

    public get id(): number {
        return this._id;
    }
    public set id(inputData: number) {
        if (inputData < 0 || inputData === undefined) {
            throw new Error("The input data is incorrect for changing the id");
        }

        this._id = inputData;
    }

    public get state(): ContractState {
        return this._state;
    }
    public set state(inputData: ContractState) {
        if (inputData === undefined) {
            throw new Error("The input data is incorrect for changing the state")
        }

        this._state = inputData;
    }

    public get value(): Currency {
        return this._value;
    }
    public set value(inputData: Currency) {
        if (inputData === undefined) {
            throw new Error("The input data is incorrect for changing the value");
        }

        this._value = inputData;
    }

    public get sender() {
        return this._sender;
    }
    public set sender(inputData: ISecureVaultRequisites) {
        if (inputData === undefined) {
            throw new Error("The input data is incorrect for changing the sender");
        }

        this._sender = inputData;
    }

    public get receiver() {
        return this._receiver;
    }
    public set receiver(inputData: ISecureVaultRequisites) {
        if (inputData === undefined) {
            throw new Error("The input data is incorrect for changing the id");
        }

        this._receiver = inputData;
    }

    public signAndTransfer() {
        this._state = ContractState.transfer;
    }

    public closeTransfer() {
        this._state = ContractState.close;
    }

    public rejectTransfer() {
        this._state = ContractState.rejected;
    }
}

export class SmartContract extends Contract {}
export class BankingContract extends Contract {}
export class LogisticContract extends Contract {}

export interface IContract{
    /**
     * Уникальный номер контракта
     */
    id: number,
    /**
     * Текущее состояние контракта
     */
    state: ContractState,
    /**
     * Предмет контракта
     */
    value: Currency,
    /**
     * Реквизиты отправителя
     */
    sender: ISecureVaultRequisites,
    /**
     * Реквизиты получателя
     */
    receiver: ISecureVaultRequisites,
    /**
     * Начало исполнения контракта
     */
    signAndTransfer: () => void,
    /**
     * Успешное завершение контракта
     */
    closeTransfer: () => void,
    /**
     * Отмена исполнения контракта
     */
    rejectTransfer: () => void
}

export enum ContractState{
    /**
     * Контракт находится в ожидании исполнения
     */
    pending,
    /**
     * Контракт находится в исполнении
     */
    transfer,
    /**
     * Контракт исполнен успешно
     */
    close,
    /**
     * Контракт отменен, либо отклонен
     */
    rejected
}
