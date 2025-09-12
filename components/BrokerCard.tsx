"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Phone, Mail, MessageSquare } from "lucide-react"
import { useState } from "react"
import Broker from "@/lib/Broker"

export default function BrokerOverview(broker:Broker) {
  const [assistantEnabled, setAssistantEnabled] = useState(false)

  const workflowSteps = [
    "Collect Client Info",
    "Submit Documents",
    "Verify Credit",
    "Deal Structuring",
    "Underwriter Review",
    "Approval Decision",
    "Funding Released",
  ]

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{broker.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{broker.deals}</p>
            <p className="text-sm text-muted-foreground">Deals</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{broker.approval_rate}</p>
            <p className="text-sm text-muted-foreground">Approval Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold">${broker.pending}</p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </div>
        </div>

        <Separator />

        {/* Contact Buttons */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>

        <Separator />

        {/* Onboarding Workflow */}
        <div>
          <h3 className="text-sm font-medium mb-2">Onboarding Workflow</h3>
          <ol className="space-y-2">
            {workflowSteps.map((step, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">{i + 1}. {step}</span>
              </li>
            ))}
          </ol>
        </div>

        <Separator />

        {/* AI Assistant Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">E Ardsassist</span>
          <Toggle
            pressed={assistantEnabled}
            onPressedChange={setAssistantEnabled}
          >
            {assistantEnabled ? "On" : "Off"}
          </Toggle>
        </div>
      </CardContent>
    </Card>
  )
}