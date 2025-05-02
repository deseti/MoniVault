import { useState, useEffect } from 'react';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { MONIVAULT_CONTRACT } from '@/lib/config/contracts';
// Pastikan Anda telah mengimpor ABI dari lokasi yang benar
import MoniVaultABI from '@/lib/abi/MoniVault.json';

export function useMoniVault() {
  const { address, isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [isMember, setIsMember] = useState(false);
  const [totalFunds, setTotalFunds] = useState('0');
  const [memberCount, setMemberCount] = useState(0);
  const [proposals, setProposals] = useState([]);

  // Check if connected user is a member
  const { data: memberStatus } = useContractRead({
    address: MONIVAULT_CONTRACT,
    abi: MoniVaultABI.abi,
    functionName: 'isMember',
    args: [address],
    enabled: !!address,
  });

  // Get total funds
  const { data: vaultFunds } = useContractRead({
    address: MONIVAULT_CONTRACT,
    abi: MoniVaultABI.abi,
    functionName: 'totalFunds',
  });

  // Get member count
  const { data: vaultMemberCount } = useContractRead({
    address: MONIVAULT_CONTRACT,
    abi: MoniVaultABI.abi,
    functionName: 'getMemberCount',
  });

  // Setup deposit function
  const { write: deposit } = useContractWrite({
    address: MONIVAULT_CONTRACT,
    abi: MoniVaultABI.abi,
    functionName: 'deposit',
  });

  // Setup add member function
  const { write: addMember } = useContractWrite({
    address: MONIVAULT_CONTRACT,
    abi: MoniVaultABI.abi,
    functionName: 'addMember',
  });

  // Update states when data changes
  useEffect(() => {
    if (memberStatus !== undefined) {
      setIsMember(memberStatus);
    }
  }, [memberStatus]);

  useEffect(() => {
    if (vaultFunds !== undefined) {
      setTotalFunds(formatEther(vaultFunds));
    }
  }, [vaultFunds]);

  useEffect(() => {
    if (vaultMemberCount !== undefined) {
      setMemberCount(Number(vaultMemberCount));
      setIsLoading(false);
    }
  }, [vaultMemberCount]);

  // Deposit funds
  const depositFunds = async (amount) => {
    if (!address || !isConnected) return;
    try {
      await deposit({
        value: parseEther(amount),
      });
    } catch (error) {
      console.error('Error depositing funds:', error);
      throw error;
    }
  };

  // Add a new member
  const addNewMember = async (memberAddress) => {
    if (!address || !isConnected) return;
    try {
      await addMember({
        args: [memberAddress],
      });
    } catch (error) {
      console.error('Error adding member:', error);
      throw error;
    }
  };

  return {
    isLoading,
    isMember,
    totalFunds,
    memberCount,
    proposals,
    depositFunds,
    addNewMember
  };
}