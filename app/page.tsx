"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CardPipeline from "@/components/CardPipeline";

const borrowers = [
  { "id": 1, "name": "John Doe", "loanType": "Personal Loan", "amount": 5000, "status": "New" },
  { "id": 2, "name": "Jane Smith", "loanType": "Home Loan", "amount": 80000, "status": "In Review" },
  { "id": 3, "name": "Mark Wilson", "loanType": "Business Loan", "amount": 15000, "status": "Renew" },
  { "id": 4, "name": "Emily Davis", "loanType": "Car Loan", "amount": 12500, "status": "New" },
  { "id": 5, "name": "Michael Brown", "loanType": "Education Loan", "amount": 20000, "status": "In Review" },
  { "id": 6, "name": "Sophia Johnson", "loanType": "Home Loan", "amount": 150000, "status": "Approved" },
  { "id": 7, "name": "Daniel Garcia", "loanType": "Business Loan", "amount": 45000, "status": "Renew" },
  { "id": 8, "name": "Olivia Martinez", "loanType": "Personal Loan", "amount": 7200, "status": "New" },
  { "id": 9, "name": "William Lee", "loanType": "Car Loan", "amount": 30000, "status": "In Review" },
  { "id": 10, "name": "Ava Taylor", "loanType": "Education Loan", "amount": 10000, "status": "Approved" },
  { "id": 11, "name": "James Anderson", "loanType": "Business Loan", "amount": 65000, "status": "Renew" },
  { "id": 12, "name": "Mia Thomas", "loanType": "Personal Loan", "amount": 4800, "status": "New" },
  { "id": 13, "name": "Benjamin Harris", "loanType": "Home Loan", "amount": 95000, "status": "In Review" },
  { "id": 14, "name": "Charlotte White", "loanType": "Car Loan", "amount": 18300, "status": "Approved" },
  { "id": 15, "name": "Lucas Martin", "loanType": "Business Loan", "amount": 22000, "status": "Renew" }
];

export default function Home() {
  const statuses = Array.from(new Set(borrowers.map((b) => b.status)));

  const handleCardClick = (name: string) => {
    console.log(name);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Content */}
      <main className="flex-1 p-6 flex flex-col md:grid md:grid-cols-3 gap-6">
        {/* Pipeline */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <h2 className="font-semibold text-lg">Borrower Pipeline</h2>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="New">
              <div className="flex flex-row md:flex-col gap-4">
                {/* Tabs List */}
                <TabsList className="flex-col md:flex-row place-self-center bg-transparent">
                  {statuses.map((status) => (
                    <TabsTrigger key={status} value={status}>
                      {status}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Tabs Content */}
                <div className="flex-1 overflow-auto">
                  {statuses.map((status) => (
                    <TabsContent key={status} value={status} className="item-center">
                      <div className="flex flex-row md:flex-col gap-2">
                        {borrowers
                          .filter((b) => b.status === status)
                          .map((b) => (
                            <CardPipeline key={b.id} id={b.id} name={b.name} amount={b.amount} loan_type={b.loanType} status={b.status} onClick={() => handleCardClick(b.name)}/>
                          ))}
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        {/* Borrower Detail */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <h2 className="font-semibold text-lg">Borrower Detail</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Borrower details go here...</p>
          </CardContent>
        </Card>

        {/* Broker Info */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <h2 className="font-semibold text-lg">Broker Info</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Broker info goes here...</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}