import { useFormContext } from '../context/signUpFormContext';
import { TextInput } from '../components/inputs';

const AccountCreationStep: React.FC = () => {
  const { methods } = useFormContext();
  const { register, formState: { errors } } = methods;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body space-y-4">
        <h2 className="card-title font-lexend">Create Account</h2>
        
        <TextInput
          label="First Name"
          name="first_name"
          register={register}
          error={errors.first_name}
        />

        <TextInput
          label="Last Name"
          name="last_name"
          register={register}
          error={errors.last_name}
        />

        <TextInput
          label="Company Name"
          name="company_name"
          register={register}
          error={errors.company_name}
        />

        <TextInput
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        <TextInput
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />

        <TextInput
          label="Confirm Password"
          name="confirm_password"
          type="password"
          register={register}
          error={errors.confirm_password}
        />
      </div>
    </div>
  );
};

export default AccountCreationStep;