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
    provider: z.string({
        required_error: 'the provider name is required'
    }),

})