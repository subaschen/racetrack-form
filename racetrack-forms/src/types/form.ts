// Base types for different integrations
export type QBOIntegration = {
  qbo_realm_id: string;
  qbo_access_token: string;
  qbo_refresh_token: string;
  account_name: string;
};

export type XeroIntegration = {
  // Xero specific fields
};

// Combined form data type
export type FormData = {
  integrationType: 'qbo' | 'xero' | null;
  connectQuickbooks?: QBOIntegration;
  connectXero?: XeroIntegration;
  trackingSettings?: {
    // tracking configuration fields
  };
  // other form sections
};

// Context props interface
export interface FormContextProps {
  formData: FormData;
  updateFormData: (property: Partial<FormData>) => void;
  currentStep: number;
  setStep: (step: number) => void;
  getVisibleSteps: () => typeof formSteps;
  isStepValid: (stepId: string) => boolean;
}
