import { createField } from '../../types/fields';
import { z } from 'zod';

export const customerFields = {
  first_name: createField({
    label: "First Name",
    schema: z.string().min(1),
    defaultValue: '',
    visibleFor: ['DUTCHIE', 'FLOWHUB', 'CANIX'],
    required: true
  }),
  // ... other customer fields
} as const;


customer: {
    firs_name: string;
    last_name: string;
    email: string;
    company_name: string;
    num_locations: number;
},
