import { createContext, useContext, useState } from 'react';
import { formSteps } from '../config/formSteps';

type FormContextType = {
  currentStep: number;
  formData: Record<string, any>;
  setStep: (step: number) => void;
  updateFormData: (newData: Partial<Record<string, any>>) => void;
  getVisibleSteps: () => typeof formSteps;
  isStepValid: (stepId: string) => boolean;
};

export const FormContext = createContext<FormContextType>({
  currentStep: 0,
  formData: {},
  setStep: () => {},
  updateFormData: () => {},
  getVisibleSteps: () => formSteps,
  isStepValid: () => false
});

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const updateFormData = (newData: Partial<Record<string, any>>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const getVisibleSteps = () => {
    return formSteps.filter(step => 
      !step.showIf || step.showIf(formData)
    );
  };

  const isStepValid = (stepId: string) => {
    const step = formSteps.find(s => s.id === stepId);
    if (!step) return false;
    
    // Add validation logic here
    return true;
  };

  const value: FormContextType = {
    currentStep,
    formData,
    setStep: setCurrentStep,
    updateFormData,
    getVisibleSteps,
    isStepValid
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};