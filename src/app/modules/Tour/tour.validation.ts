import { z } from "zod";

 
const tourValidationSchema = z.object({
  tourName: z.string({ required_error: "Tour name cannot be empty" }),
  destination: z.string({ required_error: "Destination cannot be empty" }),
  tourCreator: z.string({ required_error: "Tour creator cannot be empty" }),
  imageLink: z.string({ required_error: "Image link must be a valid URL" }),
  startDate: z.coerce.date() ,
  endDate: z.coerce.date(),
}) 

export const TourValidations = {
tourValidationSchema
};
