import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface Appeal {
  id: string
  users: string[]
  amount: string
  paymentMethod: string
  escrowVotes: number
}

const appeals: Appeal[] = [
  { id: "AP001", users: ["User1", "User2"], amount: "1000 USDT", paymentMethod: "Bank Transfer", escrowVotes: 2 },
  { id: "AP002", users: ["User3", "User4"], amount: "0.5 BTC", paymentMethod: "PayPal", escrowVotes: 4 },
]

export default function Appeals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Apelaciones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appeals.map((appeal) => (
            <Card key={appeal.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">ID: {appeal.id}</h3>
                  <Badge variant="outline">En disputa</Badge>
                </div>
                <p>Usuarios: {appeal.users.join(", ")}</p>
                <p>Cantidad bloqueada: {appeal.amount}</p>
                <p>Método de pago: {appeal.paymentMethod}</p>
                <div className="mt-4">
                  <p>Progreso de validación de escrow:</p>
                  <Progress value={(appeal.escrowVotes / 5) * 100} className="mt-2" />
                  <p className="text-sm text-muted-foreground mt-1">{appeal.escrowVotes}/5 escrows han votado</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="secondary">Resolver disputa 🏛</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

