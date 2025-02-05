import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Copy, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"

// Simulated referral data
const referralData = {
  referralLink: "https://p2pexchange.com/ref/user123",
  totalReferrals: 15,
  activeReferrals: 8,
  totalEarnings: 47.5,
  availableForWithdrawal: 6.75,
  history: [
    { id: 1, date: "2024-02-10", action: "Token Purchase", amount: 2.5 },
    { id: 2, date: "2024-02-09", action: "Exchange Fee", amount: 0.75 },
    { id: 3, date: "2024-02-08", action: "IDO Participation", amount: 3.5 },
    { id: 4, date: "2024-02-07", action: "Exchange Fee", amount: 0.5 },
    { id: 5, date: "2024-02-06", action: "Token Purchase", amount: 1.5 },
    { id: 6, date: "2024-02-05", action: "Token Purchase", amount: 2.0 },
    { id: 7, date: "2024-02-04", action: "Exchange Fee", amount: 0.6 },
    { id: 8, date: "2024-02-03", action: "IDO Participation", amount: 4.0 },
    { id: 9, date: "2024-02-02", action: "Token Purchase", amount: 1.8 },
    { id: 10, date: "2024-02-01", action: "Exchange Fee", amount: 0.8 },
  ],
}

export default function Referrals() {
  const [copied, setCopied] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralData.referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const totalPages = Math.ceil(referralData.history.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = referralData.history.slice(startIndex, endIndex)

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
          <CardDescription>Share this link to earn rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input value={referralData.referralLink} readOnly />
            <Button onClick={copyToClipboard}>
              {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Referral Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Total Referrals</Label>
                <div className="text-2xl font-bold">{referralData.totalReferrals}</div>
              </div>
              <div>
                <Label>Active Referrals</Label>
                <div className="text-2xl font-bold">{referralData.activeReferrals}</div>
              </div>
              <div>
                <Label>Total Earnings</Label>
                <div className="text-2xl font-bold">${referralData.totalEarnings.toFixed(2)}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Withdrawal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Available for Withdrawal</Label>
                <div className="text-2xl font-bold">${referralData.availableForWithdrawal.toFixed(2)}</div>
              </div>
              <Progress value={(referralData.availableForWithdrawal / 5) * 100} className="w-full" />
              <p className="text-sm text-muted-foreground">
                ${referralData.availableForWithdrawal.toFixed(2)} / $5.00 needed to withdraw
              </p>
              <Button disabled={referralData.availableForWithdrawal < 5}>
                {referralData.availableForWithdrawal >= 5 ? "Withdraw Earnings" : "Insufficient Balance"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Earnings History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.action}</TableCell>
                  <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between mt-4">
            <Button onClick={prevPage} disabled={currentPage === 1}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Referral Program Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Earn a percentage of your referrals token purchases, exchange fees, and IDO participations.</li>
            <li>You can withdraw your earnings once you accumulate $5 or more.</li>
            <li>Referral rewards are calculated and added to your balance in real-time.</li>
            <li>The more active referrals you have, the higher your potential earnings.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

