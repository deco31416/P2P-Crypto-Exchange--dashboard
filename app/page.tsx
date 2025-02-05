"use client";

import { useState, useEffect, useCallback } from "react";
import { BrowserProvider } from "ethers";
import Dashboard from "@/components/Dashboard";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConnectWallet from "@/components/ConnectWallet";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    ethereum?: import("ethers").Eip1193Provider;
  }
}

export default function Page() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const { toast } = useToast();

  const checkIfWalletIsConnected = useCallback(async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          const providerInstance = new BrowserProvider(window.ethereum);
          setProvider(providerInstance);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error checking wallet connection:", error);
          toast({
            title: "Connection Error",
            description: error.message || "Failed to connect to your wallet. Please try again.",
            variant: "destructive",
          });
        }
      }
    } else {
      toast({
        title: "MetaMask not detected",
        description: "Please install MetaMask to use this platform",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [checkIfWalletIsConnected]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setIsConnected(true);
        const providerInstance = new BrowserProvider(window.ethereum);
        setProvider(providerInstance);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error connecting wallet:", error);
          toast({
            title: "Connection Error",
            description: error.message || "Failed to connect your wallet. Please try again.",
            variant: "destructive",
          });
        }
      }
    } else {
      toast({
        title: "MetaMask not detected",
        description: "Please install MetaMask to use this platform",
        variant: "destructive",
      });
    }
  };

  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false);
  };

  if (showDisclaimer) {
    return <LegalDisclaimer onAccept={handleDisclaimerAccept} />;
  }

  if (!isConnected) {
    return <ConnectWallet onConnect={connectWallet} />;
  }

  return <Dashboard account={account} provider={provider} />;
}
