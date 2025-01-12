import { z } from "zod";

// Common values used across integrations
const POS_TIMEZONES = ['US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific'] as const;
const ACCOUNTING_BASIS = ['Cash', 'Accrual'] as const;
const PARENT_ACCOUNTS = ['Cash on Hand', 'America/Los Angeles', 'America/Denver', 'America/Chicago', 'America/New York'] as const;

// Base schema with minimal common fields
const baseConfigSchema = z.object({
  integration_name: z.enum(['DUTCHIE', 'FLOWHUB', 'CANIX']),
});

// Combined schema with all possible fields
export const configureIntegrationSchema = baseConfigSchema.extend({
  // Dutchie fields
  dutchie_key: z.string().optional(),
  pos_timezone: z.enum(POS_TIMEZONES).nullable().optional(),
  
  // Flowhub fields
  flow_token: z.string().optional(),
  flow_client_id: z.string().optional(),
  flow_location_id: z.string().optional(),
  
  // Canix fields
  canix_token: z.string().optional(),
  canix_customer_id: z.string().optional(),
  
  // Common fields
  parent_acc_name: z.enum(PARENT_ACCOUNTS),
  accounting_basis: z.enum(ACCOUNTING_BASIS).nullable(),
});

export { POS_TIMEZONES, ACCOUNTING_BASIS, PARENT_ACCOUNTS };