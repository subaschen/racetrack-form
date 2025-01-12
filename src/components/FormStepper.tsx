import React from 'react';
import { useFormContext } from '../context/signUpFormContext';
import { orderedSteps } from '../config/stepRegistry';

const FormStepper: React.FC = () => {
  const { currentStep } = useFormContext();
  const currentIndex = orderedSteps.findIndex(step => step.id === currentStep);

  return (
    <ul className="steps steps-vertical w-full mb-8">
      {orderedSteps.map((step, index) => (
        <li 
          key={step.id}
          className={`step ${
            index === currentIndex ? 'step-primary' : 
            index < currentIndex ? 'step-primary step-completed' : ''
          }`}
        >
          {step.title}
        </li>
      ))}
    </ul>
  );
};

export default FormStepper; 