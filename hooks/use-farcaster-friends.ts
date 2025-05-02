import { useState, useEffect } from 'react';
import { useMiniAppContext } from '@/hooks/use-miniapp-context';

export function useFarcasterFriends() {
  const { context, actions } = useMiniAppContext();
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchFriends() {
      try {
        // Catatan: Ini adalah implementasi contoh
        // Untuk saat ini, kita hanya menggunakan data dummy
        
        // Data dummy untuk demo
        setFriends([
          {
            fid: 12345,
            username: "friend1",
            displayName: "Friend One",
            pfpUrl: "https://via.placeholder.com/40"
          },
          {
            fid: 67890,
            username: "friend2",
            displayName: "Friend Two",
            pfpUrl: "https://via.placeholder.com/40"
          }
        ]);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching friends:', error);
        setIsLoading(false);
      }
    }
    
    if (context?.user?.fid) {
      fetchFriends();
    } else {
      // Set loading to false if we don't have a user context
      setIsLoading(false);
    }
  }, [context?.user?.fid]);
  
  // Fungsi untuk mengundang teman ke MoniVault
  const inviteFriend = async (fid) => {
    try {
      if (actions) {
        // Compose cast dengan mention ke pengguna dengan fid tertentu
        await actions.composeCast({
          text: `Hey @[fid:${fid}], I just invited you to join my MoniVault! Check it out!`,
          embeds: ["https://your-miniapp-url.com"]
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error inviting friend:', error);
      return false;
    }
  };
  
  return {
    friends,
    isLoading,
    inviteFriend
  };
}