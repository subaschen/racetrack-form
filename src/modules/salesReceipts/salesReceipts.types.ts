import { z } from 'zod';
import { salesReceiptsSchema } from './salesReceipts.schema';
import { IntegrationType } from '../../types/integrations'; 

// Base features from schema
export type SalesReceiptsFeatures = z.infer<typeof salesReceiptsSchema>;

// Add any additional features not in schema
export interface ExtendedSalesReceiptsFeatures extends SalesReceiptsFeatures {
  // Add any fields not covered by the schema
  // For example, runtime-only configurations or UI states
}

export type SalesReceiptsIntegrationConfig = {
  features: Partial<ExtendedSalesReceiptsFeatures>;
  defaults: Partial<ExtendedSalesReceiptsFeatures>;
};

export type SalesReceiptsConfig = {
  [K in IntegrationType]?: SalesReceiptsIntegrationConfig;
}; 