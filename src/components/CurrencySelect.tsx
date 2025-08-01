import React from 'react';
import { ChevronDown } from 'lucide-react';
import { currencies } from '../data/currencies';

interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChange,
  label,
}) => {
  const selectedCurrency = currencies.find(c => c.code === value);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
        >
          {currencies.map((currency) => (
            <option
              key={currency.code}
              value={currency.code}
              className="bg-gray-800 text-white"
            >
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
      </div>
      {selectedCurrency && (
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <span className="font-semibold text-lg">{selectedCurrency.symbol}</span>
          <span>{selectedCurrency.name}</span>
        </div>
      )}
    </div>
  );
};