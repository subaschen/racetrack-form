import { UseFormRegister, FieldError } from 'react-hook-form';
import { SignUpFormData } from '../../types/form';

interface TextInputProps {
  label: string;
  name: keyof SignUpFormData;
  register: UseFormRegister<SignUpFormData>;
  error?: FieldError;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  register,
  error,
  type = 'text',
  placeholder
}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-lexend">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full font-lexend ${error ? 'input-error' : ''}`}
        {...register(name)}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error font-lexend">{error.message}</span>
        </label>
      )}
    </div>
  );
}; 