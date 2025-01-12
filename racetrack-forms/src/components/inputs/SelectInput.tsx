import { UseFormRegister, FieldError } from 'react-hook-form';
import { SignUpFormData } from '../../types/form';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  name: keyof SignUpFormData;
  options: SelectOption[];
  register: UseFormRegister<SignUpFormData>;
  error?: FieldError;
  placeholder?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  options,
  register,
  error,
  placeholder = 'Select an option'
}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-lexend">{label}</span>
      </label>
      <select 
        className={`select select-bordered w-full font-lexend ${error ? 'select-error' : ''}`}
        {...register(name)}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error font-lexend">{error.message}</span>
        </label>
      )}
    </div>
  );
}; 