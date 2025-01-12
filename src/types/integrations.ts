import { INTEGRATIONS } from '../constants/signupFormConstants';

// Get integration types from the constant
export type IntegrationType = typeof INTEGRATIONS[number]['value'];

export const MODULE_ENABLED_INTEGRATIONS = {
  salesReceipts: ['DUTCHIE', 'FLOWHUB', 'CANIX'],
  debitPayments: ['DUTCHIE'],
} as const;

export type ModuleEnabledIntegrations = typeof MODULE_ENABLED_INTEGRATIONS;

// Helper type to get integrations that have a specific module enabled
export type EnabledIntegrationsFor<T extends keyof ModuleEnabledIntegrations> = 
  ModuleEnabledIntegrations[T][number];

// Type guard to check if an integration is enabled for a module
export const isEnabledForModule = <T extends keyof ModuleEnabledIntegrations>(
  integration: IntegrationType,
  module: T
): integration is EnabledIntegrationsFor<T> => {
  return MODULE_ENABLED_INTEGRATIONS[module].includes(integration as any);
}; 