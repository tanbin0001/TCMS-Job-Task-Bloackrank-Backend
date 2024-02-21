import { z } from "zod";

const tourDetailsSchema = z.object({
    destination: z.string().nonempty(),
    duration: z.string().nonempty()
});
 
export const TTourSchema = z.object({
    tourName: z.string().nonempty(),
    tourDetails: tourDetailsSchema,
    tourCreator: z.string().nonempty(),
    date: z.date(),
    expenseStatus: z.enum(['pending', 'paid'])
});
