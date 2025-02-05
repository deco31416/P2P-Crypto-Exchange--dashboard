"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface Trade {
  id: string
  type: "buy" | "sell"
  asset: string
  amount: string
  price: string
  total: string
  date: string
}

const sampleTrades: Trade[] = [
  {
    id: "1",
    type: "buy",
    asset: "BTC",
    amount: "0.1",
    price: "30,000",
    total: "3,000",
    date: "2024-02-05 10:30",
  },
  {
    id: "2",
    type: "sell",
    asset: "ETH",
    amount: "2",
    price: "1,800",
    total: "3,600",
    date: "2024-02-04 15:45",
  },
  {
    id: "3",
    type: "buy",
    asset: "USDT",
    amount: "1000",
    price: "1",
    total: "1,000",
    date: "2024-02-03 09:15",
  },
]

export default function MyTrades() {
  const [filter, setFilter] = useState<"all" | "buy" | "sell">("all")

  const filteredTrades = sampleTrades.filter((trade) => (filter === "all" ? true : trade.type === filter))

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>My Trades</CardTitle>
          <Select value={filter} onValueChange={(value: "all" | "buy" | "sell") => setFilter(value)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter trades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Trades</SelectItem>
              <SelectItem value="buy">Buy Trades</SelectItem>
              <SelectItem value="sell">Sell Trades</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Asset</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTrades.map((trade) => (
              <TableRow key={trade.id}>
                <TableCell>
                  <Badge variant={trade.type === "buy" ? "default" : "secondary"}>{trade.type.toUpperCase()}</Badge>
                </TableCell>
                <TableCell>{trade.asset}</TableCell>
                <TableCell>{trade.amount}</TableCell>
                <TableCell>${trade.price}</TableCell>
                <TableCell>${trade.total}</TableCell>
                <TableCell>{trade.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

