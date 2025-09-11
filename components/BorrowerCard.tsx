import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import Borrower from "@/lib/Borrower"

export default function BorrowerDetails(borrower:Borrower) {
  return (
    <Card className="w-full p-4 space-y-6">
      {/* Header */}
      <CardHeader className="flex flex-col items-start space-y-2">
        <div className="flex w-full items-center justify-between">
          <CardTitle className="text-xl font-bold">{borrower.name}</CardTitle>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{borrower.status}</Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Email: {borrower.email}</p>
          <p>Phone: {borrower.phone}</p>
          <p>Loan Amount: ${borrower.loan_amount.toLocaleString()}</p>
        </div>
      </CardHeader>

      {/* AI Explainability Section */}
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="ai-findings">
            <AccordionTrigger>AI Explainability</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {borrower.ai_flags.map((flag,index)=>(
                  <div key={index} className="flex items-center text-red-600 gap-2">
                    <AlertTriangle className="h-4 w-4" /> {flag}
                  </div>
                ))}
                <div className="flex flex-wrap gap-2 pt-4">
                  <Button variant="secondary">Request Documents</Button>
                  <Button variant="secondary">Send to Valuer</Button>
                  <Button variant="default">Approve</Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>

      {/* Loan Summary */}
      <CardContent>
        <h3 className="font-semibold mb-2">Loan Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">Employment</p>
            <p>{borrower.employment}</p>
          </div>
          <div>
            <p className="font-medium">Existing Loan</p>
            <p>${borrower.existing_loan.toLocaleString()}</p>
          </div>
          <div>
            <p className="font-medium">Credit Score</p>
            <p>{borrower.credit_score}</p>
          </div>
          <div>
            <p className="font-medium">Source of Funds</p>
            <p>{borrower.source_of_funds}</p>
          </div>
        </div>

        {/* Risk Signal */}
        <div className="mt-4">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Risk Signal</AlertTitle>
            <AlertDescription>
              {borrower.risk_signal}
            </AlertDescription>
          </Alert>
        </div>

        <div className="mt-4">
          <Button variant="default" className="w-full">Escalate to Credit Committee</Button>
        </div>
      </CardContent>
    </Card>
  )
}