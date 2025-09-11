import { NextRequest, NextResponse } from 'next/server';

const borrowers = [
  {
    "id": "1",
    "name": "Sarah Dunn",
    "email": "sarah.dunn@example.com",
    "phone": "(355)123-4557",
    "loan_amount": 300000,
    "status": "In Review",
    "employment": "At Tech Company",
    "income": 120000,
    "existing_loan": 240000,
    "credit_score": 720,
    "source_of_funds": "Declared",
    "risk_signal": "Missing Source of Funds declaration",
    "ai_flags": [
      "Income Inconsistent with Bank statements",
      "High Debt-to-Income Ratio detected"
    ]
  },
  {
    "id": "2",
    "name": "Alex Johnson",
    "email": "alex.johnson@example.com",
    "phone": "(355)987-6543",
    "loan_amount": 150000,
    "status": "Approved",
    "employment": "Freelance Graphic Designer",
    "income": 75000,
    "existing_loan": 50000,
    "credit_score": 780,
    "source_of_funds": "Verified",
    "risk_signal": "None",
    "ai_flags": []
  },
  {
    "id": "3",
    "name": "Maria Garcia",
    "email": "maria.garcia@example.com",
    "phone": "(355)222-3333",
    "loan_amount": 500000,
    "status": "Declined",
    "employment": "Marketing Director at Ad Agency",
    "income": 150000,
    "existing_loan": 400000,
    "credit_score": 650,
    "source_of_funds": "Declared",
    "risk_signal": "High Debt-to-Income Ratio",
    "ai_flags": [
      "High Debt-to-Income Ratio detected",
      "Multiple Recent Credit Inquiries"
    ]
  },
  {
    "id": "4",
    "name": "David Chen",
    "email": "david.chen@example.com",
    "phone": "(355)444-5555",
    "loan_amount": 80000,
    "status": "In Review",
    "employment": "Software Engineer",
    "income": 95000,
    "existing_loan": 0,
    "credit_score": 750,
    "source_of_funds": "Verified",
    "risk_signal": "None",
    "ai_flags": [
      "Employment history appears inconsistent"
    ]
  }
];

// @ts-ignore
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const borrowerId = params.id;
  const borrower = borrowers.find(u => u.id === borrowerId);

  if (borrower) {
    return NextResponse.json(borrower);
  } else {
    // Return a 404 response if the user is not found
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
}