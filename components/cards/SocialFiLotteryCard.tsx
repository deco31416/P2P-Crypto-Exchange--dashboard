"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SocialFiLotteryCard() {
  const currentPool = 1000;
  const daysRemaining = 15;
  const totalParticipants = 500;

  return (
    <Card>
      <CardHeader>
        <CardTitle>SocialFi Rewards - Decentralized Lottery System</CardTitle>
        <CardDescription>
          Earn rewards based on referrals, trading volume, and platform participation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Current Pool</h3>
            <div className="text-3xl font-bold">${currentPool.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">Next distribution in {daysRemaining} days</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Total Participants</h3>
            <div className="text-3xl font-bold">{totalParticipants}</div>
            <p className="text-sm text-muted-foreground">Eligible for random selection</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Your Eligibility</h3>
            <Progress value={80} className="w-full" />
            <p className="text-sm text-muted-foreground">4/5 verified referrals needed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
