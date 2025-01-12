import { z } from "zod";

export const vendorBillsSchema = z.object({
    inventory_tracking_class: z.string(),
    inventory_sales_term_standard: z.enum(["Net 7", "Net 15", "Net 30", "Net 60", "Net 90", "Net 120", "Custom"]),
    inventory_acc_name: z.string(),
    inventory_cash_basis_acc_name: z.string(),
    inventory_acc_type: z.string(),
    inventory_vendor_naming_map: z.record(z.string(), z.string()),
    inventory_exclude_vendors: z.array(z.string()),
    inventory_parent_category: z.boolean(),
    inventory_category_map: z.record(z.string(), z.string()),
    inventory_offset: z.number(),
});

/*
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
   */