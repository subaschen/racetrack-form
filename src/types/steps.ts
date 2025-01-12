import { z } from 'zod';
import { SignUpFormData } from './form';
import { NonEmptyArray } from './types';


export type StepId = 
    | 'account'
    | 'selectIntegration'
    | 'connectQbo'
    | 'configureIntegration'
    | 'salesReceipts'
    /*
    | 'debitPayments'
    | 'vendorBills'
    | 'overshort'
    */
    | 'summary'

export interface FormStep {
    id: StepId;
    title: string;
    description?: string;
    schema?: z.ZodType<any>;
    component: React.FC;
    isVisible: (data: Partial<SignUpFormData>) => boolean;
}
export type ReadonlyFormSteps = Readonly<NonEmptyArray<FormStep>>;

