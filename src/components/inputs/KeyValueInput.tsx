import { UseFormRegister, FieldError } from 'react-hook-form';
import { SignUpFormData } from '../../types/form';

interface KeyValueInputProps {
  keyLabel: string;
  valueLabel: string;
  keyName: keyof SignUpFormData;
  valueName: keyof SignUpFormData;
  register: UseFormRegister<SignUpFormData>;
  keyError?: FieldError;
  valueError?: FieldError;
}

export const KeyValueInput: React.FC<KeyValueInputProps> = ({
  keyLabel,
  valueLabel,
  keyName,
  valueName,
  register,
  keyError,
  valueError
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-lexend">{keyLabel}</span>
        </label>
        <input
          type="text"
          className={`input input-bordered font-lexend ${keyError ? 'input-error' : ''}`}
          {...register(keyName)}
        />
        {keyError && (
          <label className="label">
            <span className="label-text-alt text-error font-lexend">{keyError.message}</span>
          </label>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-lexend">{valueLabel}</span>
        </label>
        <input
          type="text"
          className={`input input-bordered font-lexend ${valueError ? 'input-error' : ''}`}
          {...register(valueName)}
        />
        {valueError && (
          <label className="label">
            <span className="label-text-alt text-error font-lexend">{valueError.message}</span>
          </label>
        )}
      </div>
    </div>
  );
}; 