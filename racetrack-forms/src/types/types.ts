export type IntegrationType = 'dutchie' | 'flowhub' | 'canix';

export interface FormData {
  // Integration Config
  integrationType?: IntegrationType;
  apiKey?: string;
  timeZone?: string;
  accountingBasis?: 'Cash' | 'Accrual';
  parentAccountName?: string;
  
  // Additional fields can be added as needed for other steps
}

export interface FormStep {
  id: string;
  title: string;
  isValid: (data: FormData) => boolean;
  isApplicable: (data: FormData) => boolean;
}