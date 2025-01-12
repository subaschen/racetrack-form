import React from 'react';
import { useFormContext } from '../context/signUpFormContext';
import { steps } from './steps/Steps';

const FormNavigation: React.FC = () => {
  const { currentStep, nextStep, previousStep, isCurrentStepValid } = useFormContext();

  return (
    <div className="flex justify-between mt-8">
      <button
        className="btn btn-outline"
        onClick={previousStep}
        disabled={currentStep === 0}
      >
        Back
      </button>
      <button
        className="btn btn-primary"
        onClick={nextStep}
        disabled={!isCurrentStepValid()}
      >
        {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default FormNavigation;