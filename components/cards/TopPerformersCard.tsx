"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function TopPerformersCard() {
  const topPerformers = [
    { category: "Referrals", user: "User123", count: 50 },
    { category: "Trading Volume", user: "Trader456", amount: "$100,000" },
    { category: "Fees Generated", user: "Active789", amount: "$5,000" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Top Performers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPerformers.map((performer, index) => (
              <TableRow key={index}>
                <TableCell>{performer.category}</TableCell>
                <TableCell>{performer.user}</TableCell>
                <TableCell>
                  {performer.count !== undefined ? (
                    <Badge variant="secondary">{performer.count} referrals</Badge>
                  ) : (
                    <Badge variant="secondary">{performer.amount}</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
