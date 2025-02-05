import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ConnectWalletProps {
  onConnect: () => void
}

export default function ConnectWallet({ onConnect }: ConnectWalletProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to P2P Exchange</CardTitle>
          <CardDescription>Connect your wallet to start trading</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={onConnect} className="w-full flex items-center justify-center gap-2 h-12" size="lg">
            Connect with MetaMask
          </Button>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            You can still view orders without connecting your wallet
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

