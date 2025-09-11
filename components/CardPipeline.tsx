import React from 'react';
import { Card, CardContent } from './ui/card';
import Pipelineprops from "@/lib/Pipelineprops";

export default function CardPipeline({ id, name, loan_type, status, amount, onClick }: Pipelineprops) {
    return (
        <Card key={id} className="p-4 min-w-fit">
            <CardContent className="flex justify-between items-center cursor-pointer transition-transform transform hover:scale-105" onClick={onClick}>
                <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-muted-foreground">{loan_type}</p>
                    <p className="text-sm text-muted-foreground">{status}</p>
                </div>
                <p className="font-semibold">${amount.toLocaleString()}</p>
            </CardContent>
        </Card>
    );
};