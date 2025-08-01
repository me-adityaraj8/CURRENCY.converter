import React from 'react';
import { CurrencyConverter } from './components/CurrencyConverter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <CurrencyConverter />
      </div>

      {/* Footer */}
      <div className="relative z-10 pb-6">
        <p className="text-center text-gray-300 text-sm">
          Made with ❤️ by <span className="font-semibold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Aditya RKD</span>
        </p>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default App;