"use client"

import { useState, useEffect } from "react"
import { ethers } from "ethers"
import Dashboard from "@/components/Dashboard"
import LegalDisclaimer from "@/components/LegalDisclaimer"
import ConnectWallet from "@/components/ConnectWallet"
import { useToast } from "@/hooks/use-toast"
declare global {
  interface Window {
    ethereum?: any
  }
}

export default function Page() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState("")
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" })
        if (accounts.length > 0) {
          setAccount(accounts[0])
          setIsConnected(true)
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          setProvider(provider)
        }
      } catch (error: any) {
        console.error("Error checking wallet connection:", error)
        toast({
          title: "Connection Error",
          description: error.message || "Failed to connect to your wallet. Please try again.",
          variant: "destructive",
        })
      }
    } else {
      toast({
        title: "MetaMask not detected",
        description: "Please install MetaMask to use this platform",
        variant: "destructive",
      })
    }
  }

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        setAccount(accounts[0])
        setIsConnected(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(provider)
      } catch (error: any) {
        console.error("Error connecting wallet:", error)
        toast({
          title: "Connection Error",
          description: error.message || "Failed to connect your wallet. Please try again.",
          variant: "destructive",
        })
      }
    } else {
      toast({
        title: "MetaMask not detected",
        description: "Please install MetaMask to use this platform",
        variant: "destructive",
      })
    }
  }

  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false)
  }

  if (showDisclaimer) {
    return <LegalDisclaimer onAccept={handleDisclaimerAccept} />
  }

  if (!isConnected) {
    return <ConnectWallet onConnect={connectWallet} />
  }

  return <Dashboard account={account} provider={provider} />
}

