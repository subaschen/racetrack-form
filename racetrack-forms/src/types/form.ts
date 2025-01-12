import { z } from 'zod';
import { newAccountSchema } from '../account/newAccount.schema';
import { selectIntegrationSchema } from '../integrations/selectIntegration.schema';
import { qboConnectionSchema } from '../integrations/qboConnection.schema';
import { configureIntegrationSchema } from '../integrations/configureIntegration.schema';
import { debitPaymentsSchema } from '../modules/debitPayments/debitPayments.schema';
import { vendorBillsSchema } from '../modules/vendorBills/vendorBills.schema';
import { overShortSchema } from '../modules/overShort/overShort.schema';
import { salesReceiptsSchema } from '../modules/salesReceipts/salesReceipts.schema';
import { unknownSchema } from '../schemas/unknown.schema';

export type SignUpFormData = z.infer<typeof newAccountSchema> &
  z.infer<typeof qboConnectionSchema> &
  z.infer<typeof selectIntegrationSchema> &
  z.infer<typeof configureIntegrationSchema> &
  z.infer<typeof debitPaymentsSchema> &
  z.infer<typeof vendorBillsSchema> &
  z.infer<typeof overShortSchema> &
  z.infer<typeof salesReceiptsSchema> &
  z.infer<typeof unknownSchema>;