"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuickBuy from "@/components/QuickBuy";
import { BrowserProvider } from "ethers";

interface QuickExchangeProps {
  provider: BrowserProvider | null;
}

export default function QuickExchange({ provider }: QuickExchangeProps) {
  return (
    <Card className="sm:col-span-2">
      <CardHeader>
        <CardTitle>Quick Exchange</CardTitle>
      </CardHeader>
      <CardContent>
        <QuickBuy provider={provider} />
      </CardContent>
    </Card>
  );
}
