import { FormStep, ReadonlyFormSteps, StepId } from '../types/steps';
import { newAccountSchema } from '../account/newAccount.schema';
import AccountCreationStep  from '../account/AccountCreationStep';
import { selectIntegrationSchema } from '../integrations/selectIntegration.schema';
import SelectIntegrationStep from '../integrations/SelectIntegrationStep';
import { SignUpFormData } from '../types/form';
import { qboConnectionSchema } from '../integrations/qboConnection.schema';
import QBOConnectionStep from '../integrations/QBOConnectionStep';
import { configureIntegrationSchema } from '../integrations/configureIntegration.schema'; 
import ConfigureIntegrationStep from '../integrations/ConfigureIntegrationStep';
import SummaryStep from '../components/steps/Summary';
export const stepRegistry: Record<StepId, FormStep> = {
  account: {
    id: 'account',
    title: 'Account Details',
    schema: newAccountSchema,
    component: AccountCreationStep,
    isVisible: () => true, // Always visible as first step
  },
  selectIntegration: {
    id: 'selectIntegration',
    title: 'Select Integration',
    schema: selectIntegrationSchema,
    component: SelectIntegrationStep,
    isVisible: (data) => !!data.email,
  },
  connectQbo: {
    id: 'connectQbo',
    title: 'Connect Quickbooks',
    schema: qboConnectionSchema,
    component: QBOConnectionStep,
    isVisible: (data) => !!data.integration_name,
  },
  configureIntegration: {
    id: 'configureIntegration',
    title: 'Configure Integration',
    schema: configureIntegrationSchema,
    component: ConfigureIntegrationStep,
    isVisible: (data) => !!data.integration_name && !!data.qbo_realm_id,
  },
    /*
  salesReceipts: {
    id: 'salesReceipts',
    title: '',
    schema: undefined,
    component: undefined,
    isVisible: () => false
  },
  debitPayments: {
    id: 'debitPayments',
    title: '',
    schema: undefined,
    component: undefined,
    isVisible: () => false
  },
  vendorBills: {
    id: 'vendorBills',
    title: '',
    schema: undefined,
    component: undefined,
    isVisible: () => false
  },
  overshort: {
    id: 'overshort',
    title: '',
    schema: undefined,
    component: undefined,
    isVisible: () => false
  }
  */
  summary: {
    id: 'summary',
    title: 'Review & Submit',
    schema: undefined,
    component: SummaryStep,
    isVisible: (data) => !!data.qbo_realm_id,
  }
} as const satisfies Readonly<Record<StepId, FormStep>>;

// Helper to get ordered steps
export const orderedSteps: ReadonlyFormSteps = [
  stepRegistry.account,
  stepRegistry.selectIntegration,
  stepRegistry.connectQbo,
  stepRegistry.configureIntegration,
] as const satisfies ReadonlyFormSteps;

// Helper functions
export const getStepById = (id: StepId): FormStep => stepRegistry[id];
export const getNextVisibleStep = (currentId: StepId, formData: Partial<SignUpFormData>): StepId | null => {
  const currentIndex = orderedSteps.findIndex(step => step.id === currentId);
  const nextSteps = orderedSteps.slice(currentIndex + 1);
  const nextVisibleStep = nextSteps.find(step => step.isVisible(formData));
  return nextVisibleStep?.id || null;
};

export const getPreviousVisibleStep = (currentId: StepId, formData: Partial<SignUpFormData>): StepId | null => {
  const currentIndex = orderedSteps.findIndex(step => step.id === currentId);
  const prevSteps = orderedSteps.slice(0, currentIndex).reverse();
  const prevVisibleStep = prevSteps.find(step => step.isVisible(formData));
  return prevVisibleStep?.id || 'account'; // Always allow going back to first step
};

export const isFinalStep = (stepId: StepId): boolean => stepId === 'summary';
