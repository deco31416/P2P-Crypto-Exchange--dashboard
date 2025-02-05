import { Card, CardContent } from "@/components/ui/card"
import { InfoIcon } from "lucide-react"

interface MyBalanceProps {
  showSecondary?: boolean
}

export default function MyBalance({ showSecondary = false }: MyBalanceProps) {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-primary-foreground/20 p-2">
            <img src="/placeholder.svg?height=40&width=40" alt="Robot" className="h-10 w-10" />
          </div>
          <div className="flex flex-col">
            <div className="text-sm opacity-80">Hi 0x23...03E2 👋 your balance is:</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-medium">0.00 SDFT</span>
              <InfoIcon className="h-4 w-4 opacity-80" />
            </div>
          </div>
        </div>
        {showSecondary && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-primary-foreground/10 p-3 rounded-lg">
              <div className="text-sm opacity-80">USDT Balance</div>
              <div className="text-lg font-semibold">1,234.56</div>
            </div>
            <div className="bg-primary-foreground/10 p-3 rounded-lg">
              <div className="text-sm opacity-80">ETH Balance</div>
              <div className="text-lg font-semibold">0.547</div>
            </div>
            <div className="bg-primary-foreground/10 p-3 rounded-lg">
              <div className="text-sm opacity-80">Total Orders</div>
              <div className="text-lg font-semibold">23</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

