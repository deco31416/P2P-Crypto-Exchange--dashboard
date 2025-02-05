import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function TradeHistory() {
  const trades = [
    { time: "14:30:45", pair: "BTC/USDT", price: "29,340.50", amount: "0.0234", type: "Buy" },
    { time: "14:29:30", pair: "ETH/USDT", price: "1,876.25", amount: "0.5000", type: "Sell" },
    { time: "14:28:15", pair: "BTC/USDT", price: "29,338.75", amount: "0.0100", type: "Buy" },
    { time: "14:27:00", pair: "XRP/USDT", price: "0.4565", amount: "100.0000", type: "Sell" },
    { time: "14:25:45", pair: "ETH/USDT", price: "1,875.50", amount: "0.2500", type: "Buy" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trade History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Pair</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((trade, index) => (
              <TableRow key={index}>
                <TableCell>{trade.time}</TableCell>
                <TableCell>{trade.pair}</TableCell>
                <TableCell>{trade.price}</TableCell>
                <TableCell>{trade.amount}</TableCell>
                <TableCell>
                  <Badge variant={trade.type === "Buy" ? "success" : "destructive"}>{trade.type}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

