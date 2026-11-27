import { z } from 'zod';

// Define the validation schema for creating a new address
export const createAddressSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),      // Name cannot be empty
    phone: z.string().min(1, "Phone is required"),    // Phone cannot be empty
    address: z.string().min(1, "Address is required"),// Address cannot be empty
  }),
});