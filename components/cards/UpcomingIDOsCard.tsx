"use client";

import { useState } from "react";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function UpcomingIDOsCard() {
  const [upcomingIDOs] = useState([
    { id: 3, name: "GameFi Project Z", tokenSymbol: "GPZ", price: "0.2 USDT", goal: 2000000, startDate: "2023-07-25" },
    { id: 4, name: "DeFi Lending Platform W", tokenSymbol: "DLP", price: "0.15 USDT", goal: 1500000, startDate: "2023-08-01" },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming IDOs</CardTitle>
        <CardDescription>Get ready for these upcoming Initial DEX Offerings</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Goal</TableHead>
              <TableHead>Starts On</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingIDOs.map((ido) => (
              <TableRow key={ido.id}>
                <TableCell>{ido.name}</TableCell>
                <TableCell>{ido.tokenSymbol}</TableCell>
                <TableCell>{ido.price}</TableCell>
                <TableCell>{ido.goal.toLocaleString()} USDT</TableCell>
                <TableCell>{ido.startDate}</TableCell>
                <TableCell>
                  <Button variant="outline">Set Reminder</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
