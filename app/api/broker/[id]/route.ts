import { NextResponse } from "next/server";

const brokers = [
  { "id": 1, "name": "Robert Turner", "deals": 16, "approval_rate": "75%", "pending": 7660 },
  { "id": 2, "name": "Sophia Patel", "deals": 22, "approval_rate": "82%", "pending": 5200 },
  { "id": 3, "name": "James Wong", "deals": 10, "approval_rate": "68%", "pending": 3100 },
  { "id": 4, "name": "Elena Rodriguez", "deals": 19, "approval_rate": "71%", "pending": 4500 },
  { "id": 5, "name": "David Kim", "deals": 27, "approval_rate": "89%", "pending": 8800 },
  { "id": 6, "name": "Olivia Brown", "deals": 14, "approval_rate": "64%", "pending": 2950 },
  { "id": 7, "name": "Michael Johnson", "deals": 31, "approval_rate": "77%", "pending": 10400 },
  { "id": 8, "name": "Aisha Khan", "deals": 12, "approval_rate": "70%", "pending": 3800 },
  { "id": 9, "name": "Daniel Smith", "deals": 25, "approval_rate": "83%", "pending": 7200 },
  { "id": 10, "name": "Grace Lee", "deals": 18, "approval_rate": "79%", "pending": 6100 }
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10)
  const broker = brokers.find(b => b.id === id)

  if (!broker) {
    return NextResponse.json({ error: "Broker not found" }, { status: 404 })
  }

  return NextResponse.json(broker);
}