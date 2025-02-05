import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export default function TradingVolume() {
  const data = [
    { name: "Jan", volume: 400 },
    { name: "Feb", volume: 300 },
    { name: "Mar", volume: 500 },
    { name: "Apr", volume: 450 },
    { name: "May", volume: 600 },
    { name: "Jun", volume: 550 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trading Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="volume" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

