import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Transaction {
  id: string
  type: "buy" | "sell" | "transfer"
  asset: string
  amount: string
  status: "completed" | "pending" | "failed"
  date: string
}

const sampleTransactions: Transaction[] = [
  {
    id: "1",
    type: "buy",
    asset: "BTC",
    amount: "0.1",
    status: "completed",
    date: "2024-02-05 10:30",
  },
  {
    id: "2",
    type: "sell",
    asset: "ETH",
    amount: "2",
    status: "completed",
    date: "2024-02-04 15:45",
  },
  {
    id: "3",
    type: "transfer",
    asset: "USDT",
    amount: "1000",
    status: "pending",
    date: "2024-02-03 09:15",
  },
  {
    id: "4",
    type: "buy",
    asset: "ETH",
    amount: "0.5",
    status: "failed",
    date: "2024-02-02 14:20",
  },
]

export default function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Asset</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleTransactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>
              <Badge variant={tx.type === "buy" ? "default" : tx.type === "sell" ? "secondary" : "outline"}>
                {tx.type.toUpperCase()}
              </Badge>
            </TableCell>
            <TableCell>{tx.asset}</TableCell>
            <TableCell>{tx.amount}</TableCell>
            <TableCell>
              <Badge
                variant={tx.status === "completed" ? "success" : tx.status === "pending" ? "warning" : "destructive"}
              >
                {tx.status.toUpperCase()}
              </Badge>
            </TableCell>
            <TableCell>{tx.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

