import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MarketOverview() {
  const marketData = [
    { pair: "BTC/USDT", price: "29,345.67", change: "+2.5%" },
    { pair: "ETH/USDT", price: "1,876.54", change: "-0.8%" },
    { pair: "XRP/USDT", price: "0.4567", change: "+1.2%" },
    { pair: "LTC/USDT", price: "87.65", change: "+3.1%" },
    { pair: "DOT/USDT", price: "5.43", change: "-1.5%" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pair</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>24h Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((item) => (
              <TableRow key={item.pair}>
                <TableCell>{item.pair}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell className={item.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                  {item.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}