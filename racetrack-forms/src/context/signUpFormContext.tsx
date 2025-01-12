import { createContext, useContext, useState, useEffect } from 'react';
import { FormProvider as RHFProvider, UseFormReturn, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormData } from '../types/form';
import { stepRegistry, isFinalStep, getPreviousVisibleStep, getNextVisibleStep } from '../config/stepRegistry';
import { StepId } from '../types/steps';
import { z } from 'zod';

interface FormContextType {
  currentStep: StepId;
  nextStep: () => Promise<void>;
  previousStep: () => void;
  methods: UseFormReturn<SignUpFormData>;
  isLastStep: boolean;
}



const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<StepId>(() => {
    const savedStep = localStorage.getItem('signUpFormStep') as StepId;
    return savedStep || 'account';
  });

  const methods = useForm<SignUpFormData>({
    defaultValues: {
      ...JSON.parse(localStorage.getItem('signupFormData') || '{}')
    },
    resolver: zodResolver(stepRegistry[currentStep].schema || z.object({})), //todo: remove when we add better structuring for steps without schemas
    mode: 'onChange'
  });

  useEffect(() => {
    const subscription = methods.watch((data) => {
      localStorage.setItem('signupFormData', JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  const nextStep = async () => {
    const formData = methods.getValues();
    console.log('Current form data:', formData);
    
    // Validate current step
    const isValid = await methods.trigger();
    console.log('Form validation result:', isValid);
    
    if (isValid) {
      const nextStepId = getNextVisibleStep(currentStep, formData);
      console.log('Next step:', nextStepId);
      if (nextStepId) {
        setCurrentStep(nextStepId);
        localStorage.setItem('signUpFormStep', nextStepId);
      }
    }
  };

  const previousStep = () => {
    const formData = methods.getValues();
    localStorage.setItem('signupFormData', JSON.stringify(formData));
    
    const prevStepId = getPreviousVisibleStep(currentStep, formData);
    if (prevStepId) {
      setCurrentStep(prevStepId);
      localStorage.setItem('signUpFormStep', prevStepId);
    }
  };

  const isLastStep : boolean = isFinalStep(currentStep);

  return (
    <FormContext.Provider 
      value={{ 
        currentStep,
        nextStep,
        previousStep,
        methods,
        isLastStep
      }}
    >
      <RHFProvider {...methods}>
        {children}
      </RHFProvider>
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
