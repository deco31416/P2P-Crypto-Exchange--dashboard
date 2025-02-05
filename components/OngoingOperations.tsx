import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Operation {
  id: string
  type: "Fiat ⇄ Cripto" | "Fiat ⇄ Fiat" | "Cripto ⇄ Cripto"
  amount: string
  status: "En espera de pago" | "Pago recibido" | "En disputa" | "Completado"
}

const operations: Operation[] = [
  { id: "OP001", type: "Fiat ⇄ Cripto", amount: "1000 USDT", status: "En espera de pago" },
  { id: "OP002", type: "Fiat ⇄ Fiat", amount: "500 EUR", status: "Pago recibido" },
  { id: "OP003", type: "Cripto ⇄ Cripto", amount: "0.5 BTC", status: "En disputa" },
]

export default function OngoingOperations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Operaciones en Curso</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {operations.map((op) => (
            <Card key={op.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">ID: {op.id}</h3>
                  <Badge
                    variant={
                      op.type === "Fiat ⇄ Cripto" ? "default" : op.type === "Fiat ⇄ Fiat" ? "secondary" : "outline"
                    }
                  >
                    {op.type}
                  </Badge>
                </div>
                <p>Cantidad bloqueada: {op.amount}</p>
                <p>Estado: {op.status}</p>
                <div className="mt-4 space-y-2">
                  <Label htmlFor={`chat-${op.id}`}>Chat en vivo</Label>
                  <div className="border p-2 h-24 overflow-y-auto">{/* Chat messages would go here */}</div>
                  <div className="flex space-x-2">
                    <Input id={`chat-${op.id}`} placeholder="Escribe un mensaje..." />
                    <Button>Enviar</Button>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <Button variant="outline">Aprobar ✅</Button>
                  <Button variant="destructive">Iniciar apelación ⚠</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

