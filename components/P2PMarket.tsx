"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const PAYMENT_METHODS = ["All Payments", "Bank Transfer", "Cash App", "PayPal", "Wise", "Revolut"]

const CURRENCIES = ["USDT", "BTC", "ETH", "BNB", "BUSD"]

export default function P2PMarket() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy")
  const [selectedCurrency, setSelectedCurrency] = useState("USDT")
  const [selectedPayment, setSelectedPayment] = useState("All Payments")

  return (
    <Card>
      <CardHeader>
        <CardTitle>P2P Market</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Tabs and Filters */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex gap-2">
              <Button variant={activeTab === "buy" ? "default" : "outline"} onClick={() => setActiveTab("buy")}>
                Buy
              </Button>
              <Button variant={activeTab === "sell" ? "default" : "outline"} onClick={() => setActiveTab("sell")}>
                Sell
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  {CURRENCIES.map((currency) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPayment} onValueChange={setSelectedPayment}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  {PAYMENT_METHODS.map((method) => (
                    <SelectItem key={method} value={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="pl-9 w-[200px]" />
              </div>

              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Orders Table */}
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Advertiser</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Limit/Available</th>
                  <th className="text-left py-3 px-4">Payment</th>
                  <th className="text-right py-3 px-4">Trade</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Order Row */}
                <tr className="border-b">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">JD</div>
                      <div>
                        <div className="font-medium">JohnDoe</div>
                        <div className="text-xs text-muted-foreground">98.5% • 100+ trades</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium">$1.01</div>
                  </td>
                  <td className="py-4 px-4">
                    <div>Available: 1,000 USDT</div>
                    <div className="text-xs text-muted-foreground">Limit: $100 - $1,000</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Bank Transfer</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button>{activeTab === "buy" ? "Buy USDT" : "Sell USDT"}</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

