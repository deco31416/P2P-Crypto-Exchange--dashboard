"use client";

import MarketOverview from "@/components/cards/MarketOverview";
import OrderBook from "@/components/cards/OrderBook";
import QuickExchangeV2 from "@/components/cards/QuickExchange";
import TradeHistory from "@/components/cards/TradeHistory";
import TradingVolume from "@/components/cards/TradingVolume";
import OngoingOperationsCard from "@/components/cards/OngoingOperationsCard";
import AppealsCard from "@/components/cards/AppealsCard"; 
import ActiveIDOsCard from "@/components/cards/ActiveIDOsCard";
import UpcomingIDOsCard from "@/components/cards/UpcomingIDOsCard";
import StakingCard from "@/components/cards/StakingCard";
import SocialFiLotteryCard from "@/components/cards/SocialFiLotteryCard";
import RewardDistributionCard from "@/components/cards/RewardDistributionCard";
import TopPerformersCard from "@/components/cards/TopPerformersCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Extras() {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-background">
      <h1 className="text-2xl font-bold mb-6">Dashboard Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Market Overview Card */}
        <Card>
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <MarketOverview />
          </CardContent>
        </Card>

        {/* Order Book Card */}
        <Card>
          <CardHeader>
            <CardTitle>Order Book</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderBook />
          </CardContent>
        </Card>

        {/* Quick Exchange V2 Card */}
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Quick Exchange</CardTitle>
          </CardHeader>
          <CardContent>
            <QuickExchangeV2 />
          </CardContent>
        </Card>

        {/* Active IDOs Card - NUEVA ✅ */}
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Active IDOs</CardTitle>
          </CardHeader>
          <CardContent>
            <ActiveIDOsCard />
          </CardContent>
        </Card>

        {/* Trade History Card */}
        <Card>
          <CardHeader>
            <CardTitle>Trade History</CardTitle>
          </CardHeader>
          <CardContent>
            <TradeHistory />
          </CardContent>
        </Card>

        {/* Trading Volume Card */}
        <Card>
          <CardHeader>
            <CardTitle>Trading Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <TradingVolume />
          </CardContent>
        </Card>

        {/* Ongoing Operations Card */}
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Ongoing Operations</CardTitle>
          </CardHeader>
          <CardContent>
            <OngoingOperationsCard />
          </CardContent>
        </Card>

        {/* Appeals Card - NUEVA ✅ */}
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Appeals</CardTitle>
          </CardHeader>
          <CardContent>
            <AppealsCard />
          </CardContent>
        </Card>

        {/* Upcoming IDOs Card - NUEVA ✅ */}
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming IDOs</CardTitle>
          </CardHeader>
          <CardContent>
            <UpcomingIDOsCard />
          </CardContent>
        </Card>

        {/* Staking Card - NUEVA ✅ */}
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Staking</CardTitle>
          </CardHeader>
          <CardContent>
            <StakingCard />
          </CardContent>
        </Card>

        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>SocialFi Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <SocialFiLotteryCard />
          </CardContent>
        </Card>

        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Reward Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <RewardDistributionCard />
          </CardContent>
        </Card>

        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Current Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <TopPerformersCard />
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
