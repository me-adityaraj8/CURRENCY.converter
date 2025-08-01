export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface ExchangeRates {
  [key: string]: number;
}