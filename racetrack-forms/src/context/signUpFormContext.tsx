import { createContext, useContext, useEffect, useState } from 'react';
import { SignUpFormData } from '../types/types';
import { steps } from '../components/steps/Steps';
interface FormContextType {
  formData: SignUpFormData;
  currentStep: number;
  updateFormData: (data: Partial<SignUpFormData>) => void;
  nextStep: () => void;
  previousStep: () => void;
  isCurrentStepValid: () => boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<SignUpFormData>(() => {
    // Load saved data from localStorage if available
    const savedData = localStorage.getItem('integrationFormData');
    return savedData ? JSON.parse(savedData) : {};
  });
  
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const savedStep = localStorage.getItem('integrationFormStep');
    return savedStep ? parseInt(savedStep, 10) : 0;
  });

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    localStorage.setItem('integrationFormData', JSON.stringify(formData));
    localStorage.setItem('integrationFormStep', currentStep.toString());
  }, [formData, currentStep]);

  const updateFormData = (newData: Partial<SignUpFormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (isCurrentStepValid()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const previousStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const isCurrentStepValid = () => {
    return steps[currentStep]?.isValid(formData) ?? false;
  };

  return (
    <FormContext.Provider 
      value={{ 
        formData, 
        currentStep, 
        updateFormData, 
        nextStep, 
        previousStep, 
        isCurrentStepValid 
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
