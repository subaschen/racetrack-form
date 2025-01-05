import { FieldValues, createField } from '../../../../types/fields';
import { z } from 'zod';

export const customerFields = {
  first_name: createField({
    label: "First Name",
    schema: z.string().min(1, "First name is required"),
    defaultValue: '',
    visibleFor: ['DUTCHIE', 'FLOWHUB', 'CANIX'],
    required: true,
    validate: (value) => 
      value.length > 50 ? "Name is too long" : undefined
  }),
  
  email: createField({
    label: "Email Address",
    schema: z.string().email("Invalid email address"),
    defaultValue: '',
    visibleFor: ['DUTCHIE', 'FLOWHUB', 'CANIX'],
    required: true,
    helpText: "We'll use this email for account notifications"
  })
} as const;

// Type inference works automatically
type CustomerFieldValues = FieldValues<typeof customerFields>;