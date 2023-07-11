import { z } from "zod";

export const createUserSchema = z.object({
    userName: z.string({
        required_error: 'username is required'
    }),

    email: z.string({
        required_error: 'Email is required',
    }).email({
        required_error: 'Email is not valid'
    }),
    password: z.string({
        required_error: 'password is required',
    }).min(6, {
        message: 'password must be at least 6 characters'
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).email({
        required_error: 'Email is not valid'
    }),
    password: z.string({
        required_error: 'password is required',
    }).min(6, {
        message: 'password must be at least 6 characters'
    })
});