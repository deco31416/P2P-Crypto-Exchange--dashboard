import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Simulated user data
const userData = {
  name: "John Doe",
  email: "john@example.com",
  wallet: "0x1234...5678",
  country: "United States",
}

export default function Settings() {
  const [isVerified, setIsVerified] = useState(false)

  const startVerification = () => {
    // Here you would integrate with Civic.com's API
    console.log("Starting verification process with Civic.com")
    // For demonstration, we'll just toggle the state
    setIsVerified(true)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>KYC Verification Status</CardTitle>
          <CardDescription>Your current verification status and options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Verification Status:</span>
            {isVerified ? <Badge variant="success">Verified</Badge> : <Badge variant="destructive">Not Verified</Badge>}
          </div>
          {!isVerified && (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Start KYC Verification</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>KYC Verification</DialogTitle>
                  <DialogDescription>
                    You will be redirected to Civic.com to complete your KYC verification.
                  </DialogDescription>
                </DialogHeader>
                <Button onClick={startVerification}>Proceed to Verification</Button>
              </DialogContent>
            </Dialog>
          )}
        </CardContent>
      </Card>

      {isVerified && (
        <Card>
          <CardHeader>
            <CardTitle>Verified User Information</CardTitle>
            <CardDescription>Your verified personal details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>{userData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{userData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Wallet:</span>
                <span>{userData.wallet}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Country:</span>
                <span>{userData.country}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account settings and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue={userData.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={userData.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="2fa" />
              <Label htmlFor="2fa">Enable 2FA</Label>
            </div>
            <Button>Save Settings</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

