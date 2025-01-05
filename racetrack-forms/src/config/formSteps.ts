export type FieldConfig = {
    name: string;
    showIf?: (formData: any) => boolean;
    // other field properties like type, validation, etc.
  };
  
export type StepConfig = {
    id: string;
    title: string;
    fields: FieldConfig[];
    showIf?: (formData: any) => boolean;
  };
  
export const formSteps: StepConfig[] = [
    {
      id: 'integration',
      title: 'Select Integration',
      fields: [
        { name: 'integrationType' }
      ]
    },
    {
      id: 'qboAuth',
      title: 'QuickBooks Authentication',
      showIf: (data) => data.integrationType === 'qbo',
      fields: [
        { name: 'qbo_realm_id' },
        { name: 'qbo_access_token' },
        { name: 'qbo_refresh_token' }
      ]
    }
];
