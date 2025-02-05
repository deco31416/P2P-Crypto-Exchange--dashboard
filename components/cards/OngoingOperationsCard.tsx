import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ongoingOperations = [
  { id: 1, type: "Buy", amount: "0.5 BTC", price: "$15,000", status: "Pending", timeRemaining: "2h 30m" },
  { id: 2, type: "Sell", amount: "10 ETH", price: "$18,000", status: "In Progress", timeRemaining: "1h 45m" },
  { id: 3, type: "Buy", amount: "1000 XRP", price: "$500", status: "Awaiting Payment", timeRemaining: "3h 15m" },
  { id: 4, type: "Sell", amount: "5 LTC", price: "$750", status: "Pending", timeRemaining: "4h 00m" },
  { id: 5, type: "Buy", amount: "100 DOT", price: "$2,000", status: "In Progress", timeRemaining: "0h 55m" },
]

export default function OngoingOperationsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ongoing Operations</CardTitle>
        <CardDescription>Track your current P2P trades and transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time Remaining</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ongoingOperations.map((operation) => (
              <TableRow key={operation.id}>
                <TableCell>{operation.type}</TableCell>
                <TableCell>{operation.amount}</TableCell>
                <TableCell>{operation.price}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      operation.status === "Pending"
                        ? "secondary"
                        : operation.status === "In Progress"
                          ? "default"
                          : "outline"
                    }
                  >
                    {operation.status}
                  </Badge>
                </TableCell>
                <TableCell>{operation.timeRemaining}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
