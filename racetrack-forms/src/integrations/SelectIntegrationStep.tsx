import { INTEGRATIONS } from '../constants/signupFormConstants';
import { useFormContext } from '../context/signUpFormContext';
import { SelectInput } from '../components/inputs';

const SelectIntegrationStep: React.FC = () => {
  const { methods } = useFormContext();
  const { register, formState: { errors } } = methods;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body space-y-4">
        <h2 className="card-title font-lexend">Select Integration</h2>
        
        <SelectInput
          label="Select Integration"
          name="integration_name"
          register={register}
          options={INTEGRATIONS}
          error={errors.integration_name}
        />
      </div>
    </div>
  );
};

export default SelectIntegrationStep;