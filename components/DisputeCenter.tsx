"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Dispute {
  id: string
  orderNumber: string
  buyer: string
  seller: string
  amount: string
  currency: string
  status: "pending" | "in_review" | "resolved"
  createdAt: string
  description: string
}

export default function DisputeCenter() {
  const [selectedDispute, setSelectedDispute] = useState<Dispute | null>(null)

  // Sample disputes data
  const disputes: Dispute[] = [
    {
      id: "1",
      orderNumber: "ORD-001",
      buyer: "0x1234...5678",
      seller: "0x8765...4321",
      amount: "1,000",
      currency: "USDT",
      status: "pending",
      createdAt: "2024-02-04 12:30",
      description: "Payment sent but tokens not received",
    },
    // Add more sample disputes
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Dispute Center</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">Pending Disputes</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-muted-foreground">In Review</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm text-muted-foreground">Resolved</div>
                </CardContent>
              </Card>
            </div>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Order ID</th>
                    <th className="text-left py-3 px-4">Parties</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Created</th>
                    <th className="text-right py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {disputes.map((dispute) => (
                    <tr key={dispute.id} className="border-b">
                      <td className="py-4 px-4">{dispute.orderNumber}</td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <div className="text-xs">Buyer: {dispute.buyer}</div>
                          <div className="text-xs">Seller: {dispute.seller}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {dispute.amount} {dispute.currency}
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant={
                            dispute.status === "pending"
                              ? "destructive"
                              : dispute.status === "in_review"
                                ? "warning"
                                : "success"
                          }
                        >
                          {dispute.status.replace("_", " ").toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">{dispute.createdAt}</td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="outline" onClick={() => setSelectedDispute(dispute)}>
                          Review
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedDispute} onOpenChange={() => setSelectedDispute(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Dispute Details - {selectedDispute?.orderNumber}</DialogTitle>
            <DialogDescription>Review the dispute details and chat history</DialogDescription>
          </DialogHeader>

          {selectedDispute && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Buyer</h4>
                  <p className="text-sm text-muted-foreground">{selectedDispute.buyer}</p>
                </div>
                <div>
                  <h4 className="font-medium">Seller</h4>
                  <p className="text-sm text-muted-foreground">{selectedDispute.seller}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium">Description</h4>
                <p className="text-sm text-muted-foreground">{selectedDispute.description}</p>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Chat History</h4>
                <div className="space-y-2">
                  {/* Sample chat messages */}
                  <div className="flex gap-2">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      B
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Buyer</p>
                      <p className="text-sm">I've sent the payment. Please check.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      S
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Seller</p>
                      <p className="text-sm">I haven't received any payment yet.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setSelectedDispute(null)}>
                  Close
                </Button>
                <Button>Resolve in Favor of Buyer</Button>
                <Button variant="destructive">Resolve in Favor of Seller</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

