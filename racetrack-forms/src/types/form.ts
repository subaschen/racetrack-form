import { formSteps } from "../config/formSteps";

// Base types for different integrations
export type QBOIntegration = {
  qbo_realm_id: string;
  qbo_access_token: string;
  qbo_refresh_token: string;
  account_name: string;
};

export type coreFields = {
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
  currentStep: number;
  setStep: (step: number) => void;
  navigateTo: (id: IStep<S>["label"]) => void;
  getVisibleSteps: () => typeof formSteps;
  isStepValid: (stepId: string) => boolean;
  formData: FormData;
  updateFormData: (property: Partial<FormData>) => void;
  steps: IStep<S>[];
}

export interface IStep<S> {
    label: S;
    content: React.ReactNode;
}