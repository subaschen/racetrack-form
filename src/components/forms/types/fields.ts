import { z } from 'zod';

const RacetrackIntegrations = z.enum(['DUTCHIE', 'FLOWHUB', 'CANIX']);
type RacetrackIntegrations = z.infer<typeof RacetrackIntegrations>;

const RacetrackModules = z.enum(['TRANSACTION', 'INVENTORY', 'INCOME', 'OVERSHORT_LITE', 'DEBIT']);
type RacetrackModules = z.infer<typeof RacetrackModules>;

export interface FieldMetadata {
    label: string;
    required: boolean;
    description?: string;
    helpText?: string;
}

export interface SignupFieldMetadata extends FieldMetadata {
    visibleFor: RacetrackIntegrations[];
}

export type SignupField<T> = SignupFieldMetadata & {
    schema: z.ZodType<T>;
    defaultValue: T;
    validate?: (value: T) => string | undefined;
};

export const createField = <T>(config: SignupFieldMetadata & {
    schema: z.ZodType<T>;
    defaultValue: T;
    validate?: (value: T) => string | undefined;
}): SignupField<T> => config;

export type FieldConfig = Record<string, SignupField<any>>;

export type FieldValues<T extends FieldConfig> = {
    [K in keyof T]: z.infer<T[K]['schema']>;
  };

export type VisibleFields<
    T extends FieldConfig,
    R extends RacetrackIntegrations
> = {
    [K in keyof T]: T[K]['visibleFor'] extends R ? T[K] : never;
};

export const isFieldVisible = (
    field: SignupField<any>,
    integration: RacetrackIntegrations
  ): boolean => {
    return field.visibleFor.includes(integration) || field.visibleFor.length === 0;
  };
  
  // Type guard for checking if a field is required
  export const isRequiredField = <T>(
    field: SignupField<T>
  ): field is SignupField<T> & { required: true } => {
    return field.required;
  };