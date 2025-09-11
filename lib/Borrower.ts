import Pipelineprops from "./Pipelineprops";

export default interface Borrower extends Pipelineprops{
    email: string,
    phone: string,
    employment: string,
    income: number,
    loan_amount: number,
    existing_loan: number,
    credit_score: number,
    source_of_funds: number,
    risk_signal: string,
    ai_flags: string[]
}