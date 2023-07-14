import {z} from "zod"

export const providerSchema = z.object({
    providerName: z.string({
        required_error: "providerName is required",
    }),
    address: z.string({
        required_error: "address is required",
    }),

    phone: z.number({
        required_error: "phone number is required",
    }),
})