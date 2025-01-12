import { UseFormRegister, FieldError } from 'react-hook-form';
import { SignUpFormData } from '../../types/form';

interface CheckboxInputProps {
  label: string;
  name: keyof SignUpFormData;
  register: UseFormRegister<SignUpFormData>;
  error?: FieldError;
  defaultChecked?: boolean;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  name,
  register,
  error,
  defaultChecked
}) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text font-lexend">{label}</span>
        <input
          type="checkbox"
          className={`checkbox ${error ? 'checkbox-error' : ''}`}
          defaultChecked={defaultChecked}
          {...register(name)}
        />
      </label>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error font-lexend">{error.message}</span>
        </label>
      )}
    </div>
  );
}; 