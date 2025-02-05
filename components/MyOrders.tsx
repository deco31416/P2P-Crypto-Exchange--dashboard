import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Order {
  id: string
  type: "buy" | "sell"
  asset: string
  amount: string
  price: string
  total: string
  status: "open" | "completed" | "cancelled"
  date: string
}

const sampleOrders: Order[] = [
  {
    id: "1",
    type: "buy",
    asset: "BTC",
    amount: "0.1",
    price: "30,000",
    total: "3,000",
    status: "open",
    date: "2024-02-05 10:30",
  },
  {
    id: "2",
    type: "sell",
    asset: "ETH",
    amount: "2",
    price: "1,800",
    total: "3,600",
    status: "completed",
    date: "2024-02-04 15:45",
  },
  {
    id: "3",
    type: "buy",
    asset: "USDT",
    amount: "1000",
    price: "1",
    total: "1,000",
    status: "cancelled",
    date: "2024-02-03 09:15",
  },
]

export default function MyOrders() {
  const [filter, setFilter] = useState<"all" | "open" | "completed" | "cancelled">("all")

  const filteredOrders = sampleOrders.filter((order) => (filter === "all" ? true : order.status === filter))

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>My Orders</CardTitle>
          <Select value={filter} onValueChange={(value: "all" | "open" | "completed" | "cancelled") => setFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter orders" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="open">Open Orders</SelectItem>
              <SelectItem value="completed">Completed Orders</SelectItem>
              <SelectItem value="cancelled">Cancelled Orders</SelectItem>
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
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Badge variant={order.type === "buy" ? "default" : "secondary"}>{order.type.toUpperCase()}</Badge>
                </TableCell>
                <TableCell>{order.asset}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>${order.price}</TableCell>
                <TableCell>${order.total}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "open" ? "default" : order.status === "completed" ? "secondary" : "destructive"
                    }
                  >
                    {order.status.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  {order.status === "open" && (
                    <Button variant="destructive" size="sm">
                      Cancel
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

