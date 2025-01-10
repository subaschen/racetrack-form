import React from 'react';
import { FormProvider } from '../context/signUpFormContext';
import FormStepper from './FormStepper';
import FormStep from './FormStep'
import FormNavigation from './FormNavigation';

export const SignupForm: React.FC = () => {
  return (
    <FormProvider>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <FormStepper />
        <FormStep />
        <FormNavigation />
      </div>
    </FormProvider>
  );
};
