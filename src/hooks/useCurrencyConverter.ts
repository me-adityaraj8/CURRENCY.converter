import { useState, useCallback } from 'react';
import { exchangeRates } from '../data/currencies';

export const useCurrencyConverter = () => {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');

  const convertCurrency = useCallback((
    amount: number,
    from: string,
    to: string
  ): number => {
    if (from === to) return amount;
    
    // Convert to USD first, then to target currency
    const usdAmount = amount / exchangeRates[from];
    const convertedAmount = usdAmount * exchangeRates[to];
    
    return Math.round(convertedAmount * 100) / 100;
  }, []);

  const swapCurrencies = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }, [fromCurrency, toCurrency]);

  const convertedAmount = convertCurrency(
    parseFloat(amount) || 0,
    fromCurrency,
    toCurrency
  );

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    swapCurrencies,
  };
};