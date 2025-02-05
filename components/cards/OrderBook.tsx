import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function OrderBook() {
  const buyOrders = [
    { price: "29,340.50", amount: "0.5234", total: "15,356.82" },
    { price: "29,339.75", amount: "0.1000", total: "2,933.98" },
    { price: "29,338.20", amount: "0.3500", total: "10,268.37" },
  ]

  const sellOrders = [
    { price: "29,341.00", amount: "0.2500", total: "7,335.25" },
    { price: "29,342.50", amount: "0.4000", total: "11,737.00" },
    { price: "29,343.75", amount: "0.1750", total: "5,135.16" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Book</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="mb-2 font-semibold text-green-500">Buy Orders</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {buyOrders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{order.price}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{order.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-red-500">Sell Orders</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellOrders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{order.price}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{order.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

