import { FormStep } from "../types/types";

export const steps: FormStep[] = [
    {
      id: 'integration-type',
      title: 'Configure Integration',
      isValid: (data) => !!data.integrationType,
      isApplicable: () => true,
    },
    {
      id: 'integration-config',
      title: 'Integration Settings',
      isValid: (data) => !!(data.apiKey && data.timeZone && data.accountingBasis && data.parentAccountName),
      isApplicable: (data) => !!data.integrationType,
    },
    // Additional steps can be added here
  ];