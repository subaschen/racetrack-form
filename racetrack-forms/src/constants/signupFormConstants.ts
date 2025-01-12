import { NonEmptyArray } from "../types/types";

export const DUTCHIE_KEY_LENGTH : number = 32;

export const EMPTY_FIELD_MESSAGE : string = "This field is required";

export const INVALID_EMAIL_MESSAGE : string = "You must add a valid email";

export type ReportTypes = ['TRANSACTION', 'INVENTORY', 'INCOME', 'OVERSHORT_LITE', 'DEBIT'];

export const INTEGRATIONS : NonEmptyArray<{value:string, label:string}> = [
    {value:'DUTCHIE', label: 'Dutchie'}, 
    {value:'FLOWHUB', label: 'Flowhub'}, 
    {value:'CANIX', label: 'Canix'}
] as const;

export const DEFAULT_SIGNUP_FORM_DATA = {
    // Account Creation
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    password: "",
    confirm_password: "",
    
    // Integration Type
    integration_name: null,
    
    // Connect to Quickbooks Online
    //qbo_realm_id: "",
    qbo_access_token: "",
    qbo_refresh_token: "",
    qbo_file_name: "",
    
    // Integration Config
    accounting_basis: null,
    parent_acc_name: "Cash on Hand",
    
    // Dutchie
    dutchie_key: "",
    
    //Sales + Refunds
    income_single_register: false,
    income_breakdown: false,
    income_cogs_breakdown: false,
    income_discounts_breakdown: false,
    income_sales_cannabis_breakdown: false,
    income_tracking_class_map: { 'ALL_TX_TYPES': '' },
    income_tax_naming_map: {},
    income_cogs_cannabis_breakdown: false,
    income_disc_cannabis_breakdown: false,
    sales_customer_name: '*POS Sales Info',
    income_sales_line_name: 'Sales',
    
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