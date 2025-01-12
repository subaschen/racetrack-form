import React from 'react';
import { useFormContext } from '../context/signUpFormContext';
import { isFinalStep } from '../config/stepRegistry';

const FormNavigation: React.FC = () => {
  const { currentStep, nextStep, previousStep } = useFormContext();

  return (
    <div className="flex justify-between mt-8">
      <button
        className="btn btn-outline"
        onClick={previousStep}
        disabled={currentStep === 'account'}
      >
        Back
      </button>
      <button
        className="btn btn-primary"
        onClick={nextStep}
      >
        {isFinalStep(currentStep) ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default FormNavigation;