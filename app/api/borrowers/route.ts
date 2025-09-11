import { NextResponse } from "next/server";

const borrowers = {
  "new": [
    { "id": "1", "name": "Sarah Dunn", "loan_type": "Home Loan", "amount": 300000, "status": "Renew" },
    { "id": "3", "name": "Lisa Carter", "loan_type": "Home Loan", "amount": 450000, "status": "New" },
    { "id": "5", "name": "Emily Brown", "loan_type": "Education Loan", "amount": 15000, "status": "New" },
    { "id": "7", "name": "Michael Green", "loan_type": "Business Loan", "amount": 75000, "status": "New" }
  ],
  "in_review": [
    { "id": "2", "name": "Alan Matthews", "loan_type": "Personal Loan", "amount": 20000, "status": "In Review" },
    { "id": "4", "name": "John Doe", "loan_type": "Car Loan", "amount": 18000, "status": "In Review" },
    { "id": "8", "name": "Sophia Turner", "loan_type": "Home Loan", "amount": 500000, "status": "In Review" }
  ],
  "approved": [
    { "id": "6", "name": "Daniel Lee", "loan_type": "Personal Loan", "amount": 12000, "status": "Approved" },
    { "id": "9", "name": "Olivia White", "loan_type": "Business Loan", "amount": 100000, "status": "Approved" }
  ]
};

export async function GET() {
  return NextResponse.json(borrowers);
}