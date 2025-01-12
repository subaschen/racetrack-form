import { useFormContext } from '../context/signUpFormContext';
import { stepRegistry } from '../config/stepRegistry';

const FormStep: React.FC = () => {
  const { currentStep } = useFormContext();
  const StepComponent = stepRegistry[currentStep].component;
  
  return <StepComponent />;
};

export default FormStep;