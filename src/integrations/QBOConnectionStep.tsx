import { useFormContext } from '../context/signUpFormContext';
import { TextInput } from '../components/inputs';

const QBOConnectionStep: React.FC = () => {
  const { methods } = useFormContext();
  const { register, formState: { errors } } = methods;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body space-y-4">
        <h2 className="card-title font-lexend">Connect to Quickbooks</h2>
        
        <TextInput
          label="QBO Realm ID"
          name="qbo_realm_id"
          register={register}
          error={errors.qbo_realm_id}
        />

        <TextInput
          label="QBO Access Token"
          name="qbo_access_token"
          register={register}
          error={errors.qbo_access_token}
        />

        <TextInput
          label="QBO Refresh Token"
          name="qbo_refresh_token"
          register={register}
          error={errors.qbo_refresh_token}
        />

        <TextInput
          label="QBO File Name"
          name="qbo_file_name"
          register={register}
          error={errors.qbo_file_name}
        />
      </div>
    </div>
  );
};

export default QBOConnectionStep;