"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RewardDistributionCard() {
  const currentPool = 1000;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reward Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Percentage</TableHead>
              <TableHead>Estimated Reward</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Referral Leader</TableCell>
              <TableCell>25%</TableCell>
              <TableCell>${(currentPool * 0.25).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trading Volume Leader</TableCell>
              <TableCell>25%</TableCell>
              <TableCell>${(currentPool * 0.25).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fee Generation Leader</TableCell>
              <TableCell>25%</TableCell>
              <TableCell>${(currentPool * 0.25).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Random User 1</TableCell>
              <TableCell>12.5%</TableCell>
              <TableCell>${(currentPool * 0.125).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Random User 2</TableCell>
              <TableCell>12.5%</TableCell>
              <TableCell>${(currentPool * 0.125).toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
