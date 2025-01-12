import { z } from 'zod';
import { overShortSchema } from './overShort.schema';
import { IntegrationType } from '../../types/integrations'; 

// Base features from schema
export type OverShortFeatures = z.infer<typeof overShortSchema>;

// Add any additional features not in sche  ma
export interface ExtendedOverShortFeatures extends OverShortFeatures {
  // Add any fields not covered by the schema
  // For example, runtime-only configurations or UI states
}

export type OverShortIntegrationConfig = {
  features: Partial<ExtendedOverShortFeatures>;
  defaults: Partial<ExtendedOverShortFeatures>;
};

export type OverShortConfig = {
  [K in IntegrationType]?: OverShortIntegrationConfig;
}; 