"use client";

import { User } from "@/components/Home/User";
import { WalletActions } from "@/components/Home/WalletActions";
import { VaultInfo } from "@/components/Dashboard/VaultInfo";
import { DepositForm } from "@/components/Dashboard/DepositForm";
import { FriendsList } from "@/components/Dashboard/FriendsList";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center">MoniVault</h1>
      <p className="text-center text-gray-400">
        Manage Community Funds with Your Farcaster Friends
      </p>
      
      <div className="w-full max-w-4xl space-y-6">
        <User />
        <VaultInfo />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DepositForm />
          <WalletActions />
        </div>
        <FriendsList />
      </div>
    </div>
  );
}