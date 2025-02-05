"use client";

import { useState } from "react";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AppealsCard() {
  const [appeals, setAppeals] = useState([
    { id: 1, type: "Transaction Dispute", status: "Pending", date: "2023-06-01", description: "Seller didn't release funds after payment confirmation" },
    { id: 2, type: "Account Restriction", status: "Under Review", date: "2023-05-28", description: "Account restricted without clear reason" },
    { id: 3, type: "Withdrawal Issue", status: "Resolved", date: "2023-05-25", description: "Withdrawal stuck for over 72 hours" },
    { id: 4, type: "P2P Trade Conflict", status: "Pending", date: "2023-05-20", description: "Buyer claims they sent payment, but it's not received" },
  ]);

  const [newAppeal, setNewAppeal] = useState("");

  const handleSubmitAppeal = (e: React.FormEvent) => {
    e.preventDefault();
    const newAppealObj = {
      id: appeals.length + 1,
      type: "New Appeal",
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
      description: newAppeal,
    };
    setAppeals([...appeals, newAppealObj]);
    setNewAppeal("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appeals</CardTitle>
        <CardDescription>Manage and track your appeals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Submit New Appeal</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Submit New Appeal</DialogTitle>
                <DialogDescription>
                  Describe your issue in detail. Our support team will review your appeal as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitAppeal}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="appeal">Appeal Description</Label>
                    <Textarea
                      id="appeal"
                      value={newAppeal}
                      onChange={(e) => setNewAppeal(e.target.value)}
                      placeholder="Describe your issue here..."
                      required
                    />
                  </div>
                </div>
                <Button type="submit">Submit Appeal</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appeals.map((appeal) => (
              <TableRow key={appeal.id}>
                <TableCell>{appeal.type}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      appeal.status === "Pending"
                        ? "secondary"
                        : appeal.status === "Under Review"
                        ? "default"
                        : "success"
                    }
                  >
                    {appeal.status}
                  </Badge>
                </TableCell>
                <TableCell>{appeal.date}</TableCell>
                <TableCell className="max-w-xs truncate">{appeal.description}</TableCell>
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
  );
}
