export type NonEmptyArray<T> = [T, ...T[]];

export interface OldSignUpFormData {
  // Account Creation
  first_name?: string;
  last_name?: string;
  company_name?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  
  // Integration Type
  integration_name?: string;

  // Connect to Quickbooks Online
  qbo_realm_id?: string;
  qbo_access_token?: string;
  qbo_refresh_token?: string;
  qbo_file_name?: string;

  // Integration Config
  accounting_basis?: 'Cash' | 'Accrual' | null;
  parent_acc_name?: string;
  
  // Dutchie
  dutchie_key?: string;
  time_zone?: string;
  
  //Sales + Refunds
  income_single_register?: boolean;
  income_breakdown?: boolean;
  income_cogs_breakdown?: boolean;
  income_discounts_breakdown?: boolean;
  income_disc_cannabis_breakdown?: boolean;
  income_merge_discounts?: boolean;
  income_sales_cannabis_breakdown?: boolean;
  income_tax_inclusive?: boolean;
  income_tracking_class_map?: { [key: string]: string };
  income_tax_naming_map?: { [key: string]: string };
  sales_customer_name?: string;
  income_sales_line_name?: string;
  income_cogs_cannabis_breakdown?: boolean;

  //Debit and Non Cash Payments
  debit_payment_types?: { [key: string]: string };
  debit_tracking_class?: string;
  debit_single_register?: boolean;
  debit_to_income?: boolean;

  //Vendor Inventory Bills
  inventory_tracking_class?: string;
  inventory_sales_term_standard?: "Net 7" | "Net 15" | "Net 30" | "Net 60" | "Net 90" | "Net 120" | "Custom";
  inventory_acc_name?: string;
  inventory_cash_basis_acc_name?: string;
  inventory_acc_type?: string;
  inventory_vendor_naming_map?: { [key: string]: string };
  inventory_exclude_vendors?: string[];
  inventory_parent_category?: boolean;
  inventory_category_map?: { [key: string]: string };
  inventory_offset?: number;

  // OverShort
  cash_var_acc_name?: string;
  mimo_vault_name?: string;
  vault_acc_name?: string;
  overshort?: { [key: string]: string };
  overshort_single_register?: boolean;

  // Misc
  watermark?: string; 
}

export const defaultSignUpFormData: OldSignUpFormData = {
   // Account Creation
   first_name: "",
   last_name: "",
   company_name: "",
   email: "",
   password: "",
   confirm_password: "",
   
   // Integration Type
   integration_name: undefined,
 
   // Connect to Quickbooks Online
   qbo_realm_id: "",
   qbo_access_token: "",
   qbo_refresh_token: "",
   qbo_file_name: "",
 
   // Integration Config
   accounting_basis: null,
   parent_acc_name: "Cash on Hand",
   
   // Dutchie
   dutchie_key: "",
   time_zone: "",
   
   //Sales + Refunds
 
 
   //Debit and Non Cash Payments
   debit_payment_types: {
      'debitPaid': 'Debit Clearing Account', 
      'checkPaid': 'Check Clearing Account',
      'creditPaid': 'Credit Clearing Account',
      'giftPaid': 'GiftCard Clearing Account',
      'prePaymentAmount': 'Dutchie Pay Clearing Account',
      'debit': 'Debit Clearing Account',
      'giftcard': 'Debit Clearing Account'
    },
   debit_tracking_class: "",
   debit_single_register: false,
   debit_to_income: false,
 
   //Vendor Inventory Bills
   inventory_tracking_class: "",
   inventory_sales_term_standard: "Net 30",
   inventory_acc_name: "Cost of Goods Sold",
   inventory_cash_basis_acc_name: "",
   inventory_acc_type: "",
   inventory_vendor_naming_map: {},
   inventory_exclude_vendors: [],
   inventory_parent_category: false,
   inventory_category_map: {},
   inventory_offset: 7,
 
   // OverShort
   cash_var_acc_name: "Cash Variances",
   mimo_vault_name: "Cash In Transit",
   vault_acc_name: "Cash on Hand",
   overshort: {},
   overshort_single_register: false,

   //Misc
   watermark: "watermark_template"
}

export interface FormStep {
  id: string;
  title: string;
  isValid: (data: OldSignUpFormData) => boolean;
  isApplicable: (data: OldSignUpFormData) => boolean;
}