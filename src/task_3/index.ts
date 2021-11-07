/** Задача 3 - Моё хранилище
 *	Напишите класс хранилища(Vault)
 *	Из хранилища можно снимать валюту с помощью withdraw(Currency)
 *	В хранилище можно вкладывать валюту через deposit(Currency)
 *	Из хранилища, можно переводить валюту через transfer(Currency, Vault)
 */
import { Currency } from "../task_1";

export class Vault implements ISecureVaultRequisites{
	public id: number;
	public store: Set<Currency> = new Set<Currency>();

	public withdraw(currency: Currency) {
		const isCurrencyInVault: boolean = this.isCurrencyInVault(currency);
		const curCurrency: Currency = this.findCurrencyInVault(currency);

		if (!isCurrencyInVault || curCurrency.value < currency.value) {
			throw new Error("It is not possible to withdraw currency that is not stored in the vault " +
				"or withdraw in a larger amount than is available in the vault");
		}

		this.store.forEach(currencyInVault => currencyInVault.name === currency.name
			? currencyInVault.value -= currency.value : undefined);
	}

	public deposit(currency: Currency) {
		const isCurrencyInVault = this.isCurrencyInVault(currency);

		if (isCurrencyInVault) {
			this.store.forEach(currencyInVault => currencyInVault.name === currency.name
				? currencyInVault.value += currency.value : 0);
		} else {
			this.store.add(currency);
		}
	}

	public transfer(currency: Currency, toVault: Vault) {
		const isCurrencyInToVault = this.isCurrencyInVault(currency, toVault);
		const currencyInVault = this.findCurrencyInVault(currency);

		if (currencyInVault.value < currency.value) {
			throw new Error("It is not possible to transfer in a larger amount than is available in the vault");
		} else if (isCurrencyInToVault) {
			toVault.store.forEach(y => y.name === currency.name ? y.value += currency.value : undefined);
		} else {
			toVault.store.add(currency);
		}
		this.store.forEach(x => x.name === currency.name ? x.value -= currency.value : undefined);
	}

	private isCurrencyInVault(currency: Currency, vault: Vault = this): boolean {
		let isCurrencyInVault = false;
		vault.store.forEach(currencyInVault =>
			currencyInVault.name === currency.name ? isCurrencyInVault = true : 0);

		return isCurrencyInVault;
	}

	private findCurrencyInVault(currency: Currency): Currency {
		let foundCurrency: Currency;
		this.store.forEach(currencyInVault => currencyInVault.name === currency.name
			? foundCurrency = currencyInVault : undefined);

		return foundCurrency;
	}
}

export interface ISecureVaultRequisites{
	id: number
}
