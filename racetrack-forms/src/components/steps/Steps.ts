import { FormStep } from "../../types/types";

export const steps: FormStep[] = [
    {
        id: 'account-creation',
        title: 'Account Creation',
        isValid: (data) => !!data.first_name && !!data.last_name && !!data.company_name && !!data.email && !!data.password && !!data.confirm_password,
        isApplicable: () => true,
      },
    {
      id: 'integration-type',
      title: 'Select Integration',
      isValid: (data) => !!data.integration_name,
      isApplicable: () => true,
    },
    {
        id: 'connect-qbo',
        title: 'Connect to Quickbooks Online',
        isValid: (data) => !!data.qbo_realm_id && !!data.qbo_access_token && !!data.qbo_refresh_token && !!data.qbo_file_name,
        isApplicable: () => true,
      },
    {
      id: 'integration-config',
      title: 'Integration Settings',
      isValid: (data) => !!(data.dutchie_key && data.time_zone && data.accounting_basis && data.parent_acc_name),
      isApplicable: (data) => !!data.integration_name,
    },
    // Additional steps can be added here
  ];