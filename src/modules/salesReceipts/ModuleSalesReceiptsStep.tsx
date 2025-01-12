import { useFormContext } from 'react-hook-form';
import { TextInput, CheckboxInput } from '../../components/inputs';
import { SignUpFormData } from '../../types/form';

const ModuleSalesReceiptsStep = () => {
  const { register, formState: { errors }, watch } = useFormContext<SignUpFormData>();
  const integration_name = watch('integration_name');

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body space-y-4">
        <h2 className="card-title font-lexend">Sales Receipt Configuration</h2>
        
        {/* Conditional Canix fields */}
        {integration_name === 'CANIX' && (
          <TextInput
            label="Canix Customer ID"
            name="canix_customer_id"
            register={register}
            error={errors.canix_customer_id}
          />
        )}

        {/* Common fields */}
        <CheckboxInput
          label="Single Register"
          name="income_single_register"
          register={register}
        />

        <CheckboxInput
          label="Income Breakdown"
          name="income_breakdown"
          register={register}
        />

        <CheckboxInput
          label="COGS Breakdown"
          name="income_cogs_breakdown"
          register={register}
        />

        <CheckboxInput
          label="Discounts Breakdown"
          name="income_discounts_breakdown"
          register={register}
        />

        <CheckboxInput
          label="Sales Cannabis Breakdown"
          name="income_sales_cannabis_breakdown"
          register={register}
        />

        <CheckboxInput
          label="Merge Discounts"
          name="income_merge_discounts"
          register={register}
        />

        <CheckboxInput
          label="Tax Inclusive"
          name="income_tax_inclusive"
          register={register}
        />

        <TextInput
          label="Sales Customer Name"
          name="sales_customer_name"
          register={register}
          defaultValue="POS Sales Info"
          error={errors.sales_customer_name}
        />

        <TextInput
          label="Sales Line Name"
          name="income_sales_line_name"
          register={register}
          defaultValue="Sales"
          error={errors.income_sales_line_name}
        />
      </div>
    </div>
  );
};

export default ModuleSalesReceiptsStep; 