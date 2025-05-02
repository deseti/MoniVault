import { useState } from 'react';
import { useMoniVault } from '@/hooks/use-monivault';

export function DepositForm() {
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { depositFunds, isMember } = useMoniVault();
  
  const handleDeposit = async (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;
    
    setIsSubmitting(true);
    try {
      await depositFunds(amount);
      setAmount('');
      // Tambahkan notifikasi sukses jika perlu
    } catch (error) {
      console.error('Error depositing funds:', error);
      // Tambahkan notifikasi error jika perlu
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isMember) {
    return (
      <div className="space-y-4 border border-[#333] rounded-md p-4">
        <h2 className="text-xl font-bold text-left">Deposit Funds</h2>
        <p className="text-yellow-400">You need to be a member to deposit funds</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4 border border-[#333] rounded-md p-4">
      <h2 className="text-xl font-bold text-left">Deposit Funds</h2>
      <form onSubmit={handleDeposit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Amount (MON)
          </label>
          <input
            id="amount"
            type="number"
            step="0.001"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 bg-[#222] border border-[#444] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0.0"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !amount}
          className="w-full bg-white text-black font-medium py-2 rounded-md disabled:opacity-50"
        >
          {isSubmitting ? 'Processing...' : 'Deposit'}
        </button>
      </form>
    </div>
  );
}