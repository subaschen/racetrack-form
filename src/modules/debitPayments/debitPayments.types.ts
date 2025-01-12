import { z } from 'zod';
import { debitPaymentsSchema } from './debitPayments.schema';
import { IntegrationType } from '../../types/integrations'; 

// Base features from schema
export type DebitPaymentsFeatures = z.infer<typeof debitPaymentsSchema>;

// Add any additional features not in schema
export interface ExtendedDebitPaymentsFeatures extends DebitPaymentsFeatures {
  // Add any fields not covered by the schema
  // For example, runtime-only configurations or UI states
}

export type DebitPaymentsIntegrationConfig = {
  features: Partial<ExtendedDebitPaymentsFeatures>;
  defaults: Partial<ExtendedDebitPaymentsFeatures>;
};

export type DebitPaymentsConfig = {
  [K in IntegrationType]?: DebitPaymentsIntegrationConfig;
}; 