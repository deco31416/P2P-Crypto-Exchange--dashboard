import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface LegalDisclaimerProps {
  onAccept: () => void
}

export default function LegalDisclaimer({ onAccept }: LegalDisclaimerProps) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Legal Disclaimer</CardTitle>
          <CardDescription>Please read and accept our terms before continuing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            By using this platform, you confirm that you are at least 18 years old and do not reside in the United
            States or Canada. This platform is for informational purposes only and does not constitute financial advice.
          </p>
          <p>
            Cryptocurrency trading involves significant risk and may not be suitable for all investors. Please ensure
            that you fully understand the risks involved before trading.
          </p>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked as boolean)} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I confirm that I meet the above requirements and accept the terms
            </label>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onAccept} disabled={!isChecked} className="w-full">
            Accept and Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

