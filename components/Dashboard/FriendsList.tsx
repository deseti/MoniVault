import { useFarcasterFriends } from '@/hooks/use-farcaster-friends';
import { useMoniVault } from '@/hooks/use-monivault';

export function FriendsList() {
  const { friends, isLoading, inviteFriend } = useFarcasterFriends();
  const { addNewMember } = useMoniVault();
  
  const handleAddMember = async (friend) => {
    try {
      // Simulasi alamat wallet untuk demo
      // Dalam aplikasi nyata, Anda perlu mencari alamat wallet yang terkait dengan FID
      const mockWalletAddress = `0x${friend.fid.toString(16).padStart(40, '0')}`;
      
      // Tambahkan anggota ke vault
      await addNewMember(mockWalletAddress);
      
      // Kirim undangan melalui Farcaster
      await inviteFriend(friend.fid);
      
      // Tambahkan notifikasi sukses jika perlu
    } catch (error) {
      console.error('Error adding member:', error);
      // Tambahkan notifikasi error jika perlu
    }
  };
  
  if (isLoading) {
    return (
      <div className="space-y-4 border border-[#333] rounded-md p-4">
        <h2 className="text-xl font-bold text-left">Invite Friends</h2>
        <p>Loading friends...</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4 border border-[#333] rounded-md p-4">
      <h2 className="text-xl font-bold text-left">Invite Friends</h2>
      
      {friends.length === 0 ? (
        <p>No friends found on Farcaster</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {friends.map((friend) => (
            <div key={friend.fid} className="flex items-center space-x-3 p-3 border border-[#444] rounded-md">
              {friend.pfpUrl && (
                <img
                  src={friend.pfpUrl}
                  alt={friend.displayName}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div className="flex-1">
                <p className="font-medium">{friend.displayName}</p>
                <p className="text-sm text-gray-400">@{friend.username}</p>
              </div>
              <button
                onClick={() => handleAddMember(friend)}
                className="bg-white text-black px-3 py-1 rounded-md text-sm"
              >
                Invite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}