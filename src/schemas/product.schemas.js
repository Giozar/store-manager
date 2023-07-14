import { z } from "zod";

export const productSchema = z.object({
    productName: z.string({
        required_error: 'the proudct name is required'
    }),
    description: z.string({
        required_error: 'the description name is required'
    }),
    category: z.string({
        required_error: 'the category name is required'
    }),
    price: z.number({
        required_error: 'the price name is required'
    }),
    quantity: z.number({
        required_error: 'the quantity name is required'
    }),
    providerId: z.string().refine((value) => /^[0-9a-zA-Z]{24}$/.test(value), {
        message: 'providerId must be a valid ObjectId',
    }),

})