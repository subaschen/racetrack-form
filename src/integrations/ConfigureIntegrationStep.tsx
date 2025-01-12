import { useFormContext, UseFormReturn } from 'react-hook-form';
import { TextInput, SelectInput } from '../components/inputs';
import { SignUpFormData } from '../types/form';
import { POS_TIMEZONES } from './configureIntegration.schema';

// Type for integration config components
type IntegrationConfigProps = UseFormReturn<SignUpFormData>;

const CommonFields = () => {
  const { register, formState: { errors } } = useFormContext<SignUpFormData>();
  
  return (
    <>
      <TextInput
        label="Parent Account Name"
        name="parent_acc_name"
        register={register}
        error={errors.parent_acc_name}
      />
      <SelectInput
        label="Accounting Basis"
        name="accounting_basis"
        register={register}
        error={errors.accounting_basis}
        options={[
          { value: 'Cash', label: 'Cash' },
          { value: 'Accrual', label: 'Accrual' },
        ]}
      />
    </>
  );
};

const integrationConfigs = {
  DUTCHIE: ({ register, formState: { errors } }: IntegrationConfigProps) => (
    <>
      <TextInput
        label="Dutchie Key"
        name="dutchie_key"
        register={register}
        error={errors.dutchie_key}
      />
      <SelectInput
        label="POS Timezone"
        name="pos_timezone"
        register={register}
        error={errors.pos_timezone}
        options={POS_TIMEZONES.map(tz => ({ value: tz, label: tz }))}
      />
    </>
  ),
  
  FLOWHUB: ({ register, formState: { errors } }: IntegrationConfigProps) => (
    <>
      <TextInput
        label="Flow Token"
        name="flow_token"
        register={register}
        error={errors.flow_token}
      />
      <TextInput
        label="Flow Client ID"
        name="flow_client_id"
        register={register}
        error={errors.flow_client_id}
      />
      <TextInput
        label="Flow Location ID"
        name="flow_location_id"
        register={register}
        error={errors.flow_location_id}
      />
    </>
  ),
  
  CANIX: ({ register, formState: { errors } }: IntegrationConfigProps) => (
    <>
      <TextInput
        label="Canix Token"
        name="canix_token"
        register={register}
        error={errors.canix_token}
      />
      <TextInput
        label="Canix Customer ID"
        name="canix_customer_id"
        register={register}
        error={errors.canix_customer_id}
      />
    </>
  ),
} as const;

const ConfigureIntegrationStep = () => {
  const methods = useFormContext<SignUpFormData>();
  const { watch } = methods;
  const integration_name = watch('integration_name') as keyof typeof integrationConfigs;

  const IntegrationFields = integration_name ? integrationConfigs[integration_name] : null;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body space-y-4">
        <h2 className="card-title font-lexend">Configure {integration_name}</h2>
        <CommonFields />
        {IntegrationFields && <IntegrationFields {...methods} />}
      </div>
    </div>
  );
};

export default ConfigureIntegrationStep; 