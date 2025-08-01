import React from 'react';
import { Banknote } from 'lucide-react';
import { useCurrencyConverter } from '../hooks/useCurrencyConverter';
import { CurrencySelect } from './CurrencySelect';
import { AmountInput } from './AmountInput';
import { SwapButton } from './SwapButton';
import { currencies } from '../data/currencies';

export const CurrencyConverter: React.FC = () => {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    swapCurrencies,
  } = useCurrencyConverter();

  const fromCurrencyData = currencies.find(c => c.code === fromCurrency);
  const toCurrencyData = currencies.find(c => c.code === toCurrency);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-4">
            <Banknote className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Currency Converter
          </h1>
          <p className="text-gray-300 text-sm">
            Convert between different currencies instantly
          </p>
        </div>

        {/* Conversion Form */}
        <div className="space-y-6">
          {/* From Currency */}
          <div className="space-y-4">
            <AmountInput
              value={amount}
              onChange={setAmount}
              label="Amount"
              currencySymbol={fromCurrencyData?.symbol || '$'}
            />
            <CurrencySelect
              value={fromCurrency}
              onChange={setFromCurrency}
              label="From"
            />
          </div>

          {/* Swap Button */}
          <SwapButton onClick={swapCurrencies} />

          {/* To Currency */}
          <div className="space-y-4">
            <AmountInput
              value={convertedAmount.toString()}
              onChange={() => {}} // Read-only
              label="Converted Amount"
              readOnly
              currencySymbol={toCurrencyData?.symbol || '€'}
            />
            <CurrencySelect
              value={toCurrency}
              onChange={setToCurrency}
              label="To"
            />
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
          <p className="text-center text-sm text-gray-300">
            1 {fromCurrency} = {(convertedAmount / (parseFloat(amount) || 1)).toFixed(4)} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};