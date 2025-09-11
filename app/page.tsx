"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CardPipeline from "@/components/CardPipeline";

export default function Home() {
  const [borrowers, setBorrowers] = useState<any>([]);
  const [statuses, setStatuses] = useState<any>(["New","In Review","Approved"]);

  const handleCardClick = (name: string) => {
    console.log(name);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/borrowers")
      const data =  await response.json();
      data.new.map((b:any)=>{
        b.group = 'New'
      })
      data.in_review.map((b:any)=>{
        b.group = 'In Review'
      })
      data.approved.map((b:any)=>{
        b.group = 'Approved'
      })
      setBorrowers([...data.new,...data.in_review,...data.approved]);
      console.log(borrowers);
    })();
  }, []);

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
                  {statuses.map((status:any) => (
                    <TabsTrigger key={status} value={status}>
                      {status}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Tabs Content */}
                <div className="flex-1 overflow-auto">
                  {statuses.map((status:any) => (
                    <TabsContent key={status} value={status} className="item-center">
                      <div className="flex flex-row md:flex-col gap-2">
                        {borrowers
                          .filter((b:any) => b.group === status)
                          .map((b:any) => (
                            <CardPipeline key={b.id} id={b.id} name={b.name} amount={b.amount} loan_type={b.loan_type} status={b.status} onClick={() => handleCardClick(b.name)}/>
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