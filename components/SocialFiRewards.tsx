import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

// Simulated data for SocialFi Rewards
const rewardsData = {
  totalPool: 1000,
  timeRemaining: "15 days 7 hours",
  leaderboard: [
    { category: "Referrals", leader: "User123", score: "50 referrals", prize: 250 },
    { category: "Trading Volume", leader: "Trader456", score: "$500,000", prize: 250 },
    { category: "Fees Generated", leader: "Active789", score: "$5,000", prize: 250 },
  ],
  randomWinners: [
    { username: "Lucky101", prize: 125 },
    { username: "Fortunate202", prize: 125 },
  ],
  userStats: {
    referrals: 8,
    tradingVolume: 75000,
    feesGenerated: 750,
  },
}

export default function SocialFiRewards() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>SocialFi Rewards - Decentralized Lottery</CardTitle>
          <CardDescription>
            Participate and win a share of the monthly reward pool based on your activity and referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Current Pool</h3>
              <p className="text-3xl font-bold">${rewardsData.totalPool.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Time Remaining</h3>
              <p className="text-3xl font-bold">{rewardsData.timeRemaining}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Leader</TableHead>
                <TableHead>Score</TableHead>
                <TableHead className="text-right">Prize</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rewardsData.leaderboard.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.leader}</TableCell>
                  <TableCell>{item.score}</TableCell>
                  <TableCell className="text-right">${item.prize.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Random Winners (5+ Verified Referrals)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {rewardsData.randomWinners.map((winner, index) => (
              <li key={index} className="flex justify-between">
                <span>{winner.username}</span>
                <span className="font-semibold">${winner.prize.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Referrals</span>
                <span>{rewardsData.userStats.referrals}/5</span>
              </div>
              <Progress value={(rewardsData.userStats.referrals / 5) * 100} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Trading Volume</span>
                <span>${rewardsData.userStats.tradingVolume.toLocaleString()}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Fees Generated</span>
                <span>${rewardsData.userStats.feesGenerated.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>1% of all platform fees go into the monthly reward pool.</li>
            <li>Rewards are distributed every 30 days to 5 winners.</li>
            <li>25% each to top referrer, top trader, and top fee generator.</li>
            <li>12.5% each to two random users with at least 5 verified referrals.</li>
            <li>Increase your chances by referring users and being active on the platform!</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

