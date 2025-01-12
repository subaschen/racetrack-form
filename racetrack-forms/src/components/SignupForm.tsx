import React from 'react';
import { FormProvider } from '../context/signUpFormContext';
import FormStepper from './FormStepper';
import FormStep from './FormStep'
import FormNavigation from './FormNavigation';

const SignUpForm: React.FC = () => {
  return (
    <FormProvider>
      <div className="max-w-2xl mx-auto p-6">
        <FormStepper />
        <FormStep />
        <FormNavigation />
      </div>
    </FormProvider>
  );
};

export default SignUpForm;
