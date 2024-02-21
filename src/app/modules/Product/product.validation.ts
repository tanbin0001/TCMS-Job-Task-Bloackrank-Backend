 
import { z } from 'zod';

export const productsValidationSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  sportType: z.string(),
  brand: z.string(),
  size: z.string(),
  material: z.string(),
  color: z.string(),
  condition: z.enum(['new', 'used']),
  weight: z.number().optional(),
  style: z.string().optional(),
});
