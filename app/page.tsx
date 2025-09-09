"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// Mock borrower data
const borrowers = [
  { id: 1, name: "John Doe", loanType: "Personal Loan", amount: "$5,000", status: "New" },
  { id: 2, name: "Jane Smith", loanType: "Home Loan", amount: "$80,000", status: "In Review" },
  { id: 3, name: "Mark Wilson", loanType: "Business Loan", amount: "$15,000", status: "Renew" },
];

export default function Home() {
  const [activeProfile, setActiveProfile] = useState<number | null>(null);
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
            <p className="text-sm text-gray-600">Pipeline data goes here...</p>
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