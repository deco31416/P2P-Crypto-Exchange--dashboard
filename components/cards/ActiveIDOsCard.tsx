"use client";

import { useState } from "react";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

export default function ActiveIDOsCard() {
  const [activeIDOs] = useState([
    { id: 1, name: "DeFi Protocol X", tokenSymbol: "DPX", price: "0.1 USDT", raised: 750000, goal: 1000000, endDate: "2023-07-15" },
    { id: 2, name: "NFT Marketplace Y", tokenSymbol: "NFTY", price: "0.05 USDT", raised: 450000, goal: 500000, endDate: "2023-07-20" },
  ]);

  const [investmentAmount, setInvestmentAmount] = useState("");

  const handleInvest = (idoId: number) => {
    console.log(`Investing ${investmentAmount} USDT in IDO ${idoId}`);
    setInvestmentAmount("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active IDOs</CardTitle>
        <CardDescription>Participate in ongoing Initial DEX Offerings</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Ends In</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activeIDOs.map((ido) => (
              <TableRow key={ido.id}>
                <TableCell>{ido.name}</TableCell>
                <TableCell>{ido.tokenSymbol}</TableCell>
                <TableCell>{ido.price}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <Progress value={(ido.raised / ido.goal) * 100} />
                    <p className="text-sm text-muted-foreground">
                      {ido.raised.toLocaleString()} / {ido.goal.toLocaleString()} USDT
                    </p>
                  </div>
                </TableCell>
                <TableCell>{ido.endDate}</TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <Input
                      type="number"
                      placeholder="Amount (USDT)"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                    />
                    <Button onClick={() => handleInvest(ido.id)} className="w-full">
                      Invest
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
