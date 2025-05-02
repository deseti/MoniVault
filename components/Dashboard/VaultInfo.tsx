import { useMoniVault } from '@/hooks/use-monivault';

export function VaultInfo() {
  const { totalFunds, memberCount, isLoading, isMember } = useMoniVault();
  
  if (isLoading) {
    return (
      <div className="space-y-4 border border-[#333] rounded-md p-4">
        <h2 className="text-xl font-bold text-left">MoniVault Info</h2>
        <p>Loading vault information...</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4 border border-[#333] rounded-md p-4">
      <h2 className="text-xl font-bold text-left">MoniVault Info</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#222] p-4 rounded-md">
          <p className="text-sm text-gray-400">Total Funds</p>
          <p className="text-2xl font-bold">{totalFunds} MON</p>
        </div>
        <div className="bg-[#222] p-4 rounded-md">
          <p className="text-sm text-gray-400">Members</p>
          <p className="text-2xl font-bold">{memberCount}</p>
        </div>
      </div>
      {isMember ? (
        <p className="text-green-400">You are a member of this vault</p>
      ) : (
        <p className="text-yellow-400">You are not a member of this vault yet</p>
      )}
    </div>
  );
}