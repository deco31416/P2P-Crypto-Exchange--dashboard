import { useState } from "react"
import type { ethers } from "ethers"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRightLeft } from "lucide-react"

interface QuickBuyProps {
  provider: ethers.providers.Web3Provider | null
}

export default function QuickBuy({ provider }: QuickBuyProps) {
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("USDT")
  const [amount, setAmount] = useState("")
  const [estimatedReceive, setEstimatedReceive] = useState("0")

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const handleAmountChange = (value: string) => {
    setAmount(value)
    // This is a placeholder calculation. In a real app, you'd fetch real-time exchange rates.
    setEstimatedReceive((Number.parseFloat(value) * 0.99).toFixed(2))
  }

  const handleQuickBuy = async () => {
    if (!provider) {
      console.error("Provider not available")
      return
    }
    // Implement the actual buy logic here
    console.log(`Buying ${amount} ${fromCurrency} worth of ${toCurrency}`)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromAmount">You Pay</Label>
          <div className="flex space-x-2">
            <Input
              id="fromAmount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
            />
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="toAmount">You Receive (Estimated)</Label>
          <div className="flex space-x-2">
            <Input id="toAmount" type="number" placeholder="0.00" value={estimatedReceive} readOnly />
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USDT">USDT</SelectItem>
                <SelectItem value="BTC">BTC</SelectItem>
                <SelectItem value="ETH">ETH</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant="outline" size="icon" onClick={handleSwap}>
          <ArrowRightLeft className="h-4 w-4" />
        </Button>
      </div>
      <Button className="w-full" onClick={handleQuickBuy}>
        Quick Buy
      </Button>
    </div>
  )
}

