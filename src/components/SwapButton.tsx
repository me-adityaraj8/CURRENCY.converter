import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SwapButtonProps {
  onClick: () => void;
}

export const SwapButton: React.FC<SwapButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 group"
        aria-label="Swap currencies"
      >
        <ArrowUpDown className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-300" />
      </button>
    </div>
  );
};