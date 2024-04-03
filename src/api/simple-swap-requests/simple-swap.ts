export interface ResponseExchange {
	id: string;
	type: string;
	timestamp: string;
	updated_at: string;

	currency_from: string;
	currency_to: string;
	amount_from: string;
	expected_amount: string;
	amount_to: string;
	address_from: string;
	address_to: string;
	extra_id_from: string;
	extra_id_to: string;
	user_refund_address: string;
	user_refund_extra_id: string;
	tx_from: string;
	tx_to: string;
	status: string;
	redirect_url: string;
	currencies: Currencies;
}

export interface Currencies {
	currency_from_ticker: CurrencyFromTicker;
	currency_to_ticker: CurrencyToTicker;
}

export interface CurrencyFromTicker {
	name: string;
	symbol: string;
	network: string;
	contract_address: string;
	has_extra_id: boolean;
	extra_id: string;
	image: string;
	warnings_from: string[];
	warnings_to: string[];
	validation_address: string;
	validation_extra: string;
	address_explorer: string;
	tx_explorer: string;
	confirmations_from: string;
}

export interface CurrencyToTicker {
	name: string;
	symbol: string;
	network: string;
	contract_address: string;
	has_extra_id: boolean;
	extra_id: string;
	image: string;
	warnings_from: string[];
	warnings_to: string[];
	validation_address: string;
	validation_extra: string;
	address_explorer: string;
	tx_explorer: string;
	confirmations_from: string;
}
