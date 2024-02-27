import { z } from "zod";
 
 
const TParticipantSchema = z.object({
  userId: z.string(),
  initialContribution: z.number(),
  totalSpend: z.number().optional(),
  otherExpenses: z.number().optional(),
  dueOrLoan: z.number().optional()
});
 
const TRegisterTourSchema = z.object({
  tourId: z.string(),
  participants: z.array(TParticipantSchema),
  totalSpendOnThisTour: z.number().optional()
});

 
export  const RegisterTourValidations =  {  TRegisterTourSchema };
