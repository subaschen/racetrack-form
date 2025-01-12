import React from 'react';
import { FormProvider } from '../context/signUpFormContext';
import FormStepper from './FormStepper';
import FormStep from './FormStep'
import FormNavigation from './FormNavigation';
import logo from '../assets/racetrack-icon.svg';
const SignUpForm: React.FC = () => {
  return (
    <FormProvider>
      <div className="max-w-6xl mx-auto p-6 gap-4">
        <div className="flex flex-row gap-4">
          <div className="w-64 flex flex-col gap-y-8">
            <img src={logo} alt="Racetrack" className="w-16 h-16" />
            <FormStepper />
          </div>
          <div className="flex-1">
            <FormStep />
          </div>
        </div>
        <FormNavigation />
      </div>
    </FormProvider>
  );
};

export default SignUpForm;
