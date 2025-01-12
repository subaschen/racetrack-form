import React from 'react';
import { useFormContext } from '../context/signUpFormContext';
import { steps } from './steps/Steps';

const FormStepper: React.FC = () => {
  const { currentStep, formData } = useFormContext();

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-8">
      {steps.map((step, index) => {
        if (!step.isApplicable(formData)) return null;
        
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        
        return (
          <div
            key={step.id}
            className={`flex items-center ${index < steps.length - 1 ? 'mb-4 sm:mb-0' : ''}`}
          >
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isActive
                    ? 'bg-primary text-white'
                    : isCompleted
                    ? 'bg-success text-white'
                    : 'bg-gray-200'
                }`}
              >
                {isCompleted ? '✓' : index + 1}
              </div>
              <span className={`ml-2 ${isActive ? 'text-primary' : ''}`}>
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden sm:block w-12 h-px bg-gray-300 mx-4" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FormStepper; 