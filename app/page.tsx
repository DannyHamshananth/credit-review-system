import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bell, HelpCircle, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
        <h1 className="text-xl font-bold">DemoApp</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search..." className="pl-8 w-48" />
          </div>
          <HelpCircle className="h-5 w-5 cursor-pointer text-gray-600" />
          <Bell className="h-5 w-5 cursor-pointer text-gray-600" />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 flex flex-col md:grid md:grid-cols-3 gap-6">
        {/* Pipeline */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <h2 className="font-semibold text-lg">Pipeline</h2>
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