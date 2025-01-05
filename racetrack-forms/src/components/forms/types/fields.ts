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
    validate?: (value: T) => string;
}): SignupField<T> => config;

