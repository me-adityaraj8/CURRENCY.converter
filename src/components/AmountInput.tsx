import React from 'react';

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  readOnly?: boolean;
  currencySymbol: string;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  label,
  readOnly = false,
  currencySymbol,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow only numbers and decimal point
    if (/^\d*\.?\d*$/.test(newValue) || newValue === '') {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 font-semibold text-lg">
          {currencySymbol}
        </span>
        <input
          type="text"
          value={readOnly ? parseFloat(value).toLocaleString() : value}
          onChange={handleChange}
          readOnly={readOnly}
          placeholder="0.00"
          className={`w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 ${
            readOnly 
              ? 'cursor-default bg-white/5' 
              : 'hover:bg-white/15'
          }`}
        />
      </div>
    </div>
  );
};