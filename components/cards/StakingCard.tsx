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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StakingCard() {
  const [activeStakes, setActiveStakes] = useState([
    { id: 1, token: "BTC", amount: "0.5", apy: "5%", duration: "30 days", rewards: "0.00068 BTC", status: "Active" },
    { id: 2, token: "ETH", amount: "10", apy: "4.5%", duration: "60 days", rewards: "0.0739 ETH", status: "Active" },
  ]);

  const [stakeAmount, setStakeAmount] = useState("");
  const [stakeDuration, setStakeDuration] = useState("30");

  const stakingOptions = [
    { token: "BTC", apy: "5%", minAmount: "0.1" },
    { token: "ETH", apy: "4.5%", minAmount: "1" },
    { token: "USDT", apy: "8%", minAmount: "100" },
  ];

  const handleStake = (token: string) => {
    console.log(`Staking ${stakeAmount} ${token} for ${stakeDuration} days`);
    setStakeAmount("");
    setStakeDuration("30");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Staking</CardTitle>
        <CardDescription>Stake your crypto assets to earn rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="stake">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stake">Stake</TabsTrigger>
            <TabsTrigger value="active">Active Stakes</TabsTrigger>
          </TabsList>

          {/* Stake Section */}
          <TabsContent value="stake">
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount to Stake</Label>
                  <Input
                    id="amount"
                    placeholder="Enter amount"
                    type="number"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Staking Duration (Days)</Label>
                  <Input
                    id="duration"
                    placeholder="Enter duration in days"
                    type="number"
                    value={stakeDuration}
                    onChange={(e) => setStakeDuration(e.target.value)}
                  />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Token</TableHead>
                    <TableHead>APY</TableHead>
                    <TableHead>Minimum Amount</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stakingOptions.map((option) => (
                    <TableRow key={option.token}>
                      <TableCell>{option.token}</TableCell>
                      <TableCell>{option.apy}</TableCell>
                      <TableCell>{option.minAmount}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleStake(option.token)}>Stake</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Active Stakes Section */}
          <TabsContent value="active">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>APY</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Rewards</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeStakes.map((stake) => (
                  <TableRow key={stake.id}>
                    <TableCell>{stake.token}</TableCell>
                    <TableCell>{stake.amount}</TableCell>
                    <TableCell>{stake.apy}</TableCell>
                    <TableCell>{stake.duration}</TableCell>
                    <TableCell>{stake.rewards}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{stake.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
