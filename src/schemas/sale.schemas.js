import { z } from "zod";

const saleItemSchema = z.object({
    productId: z.string().refine((value) => /^[0-9a-zA-Z]{24}$/.test(value), {
        message: 'productId must be a valid ObjectId',
        required_error: 'productId is required',
    }),
    productName: z.string().optional(),
    quantity: z.number({required_error: "quantity is required"}),
    price: z.number().optional(),
});

export const saleSchema = z.object({

    userId: z.string().refine((value) => /^[0-9a-zA-Z]{24}$/.test(value), {
        message: 'userId must be a valid ObjectId',
        required_error: 'userId is required',
    }),

    userName: z.string().optional(),

    items: z.array(saleItemSchema, { required_error: "at least one product is required"}),

    totalPrice: z.number().optional(),

    saleDate: z.string().datetime().optional(),

})