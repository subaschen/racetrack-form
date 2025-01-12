import { z } from "zod";



export const debitPaymentsSchema = z.object({
    debit_payment_types: z.record(z.string(), z.string()),
    debit_tracking_class: z.string(),
    debit_single_register: z.boolean(),
    debit_to_income: z.boolean(),
});

/*
  debit_payment_types: {
      'debitPaid': 'Debit Clearing Account', 
      'checkPaid': 'Check Clearing Account',
      'creditPaid': 'Credit Clearing Account',
      'giftPaid': 'GiftCard Clearing Account',
      'prePaymentAmount': 'Dutchie Pay Clearing Account',
      'debit': 'Debit Clearing Account',
      'giftcard': 'Debit Clearing Account'
    },
   debit_tracking_class: "",
   debit_single_register: false,
   debit_to_income: false,
*/