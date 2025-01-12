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
  // Common fields
  parent_acc_name: z.string(),
  accounting_basis: z.enum(ACCOUNTING_BASIS).nullable(),

  // Dutchie fields
  dutchie_key: z.string().nullable(),
  pos_timezone: z.enum(POS_TIMEZONES).nullable(),
  
  // Flowhub fields
  flow_token: z.string().nullable(),
  flow_client_id: z.string().nullable(),
  flow_location_id: z.string().nullable(),
  
  // Canix fields
  canix_token: z.string().nullable(),
  canix_customer_id: z.string().nullable(),
  

});

export { POS_TIMEZONES, ACCOUNTING_BASIS, PARENT_ACCOUNTS };