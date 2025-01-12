import { UseFormRegister, FieldError } from 'react-hook-form';
import { SignUpFormData } from '../../types/form';

interface ToggleInputProps {
  label: string;
  name: keyof SignUpFormData;
  register: UseFormRegister<SignUpFormData>;
  error?: FieldError;
  enableText?: string;
  disableText?: string;
}

export const ToggleInput: React.FC<ToggleInputProps> = ({
  label,
  name,
  register,
  error,
  enableText = 'Enable',
  disableText = 'Disable'
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-lexend">{label}</span>
      </label>
      <div className="join">
        <input
          type="checkbox"
          className={`toggle join-item ${error ? 'toggle-error' : ''}`}
          {...register(name)}
        />
        <span className="join-item px-4 font-lexend">
          {disableText} / {enableText}
        </span>
      </div>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error font-lexend">{error.message}</span>
        </label>
      )}
    </div>
  );
}; 